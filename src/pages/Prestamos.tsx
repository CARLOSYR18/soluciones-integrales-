import React, { useState, useEffect, FormEvent, ChangeEvent } from "react";


interface FormData {
  loanAmount: string;
  interestRate: string;
  loanTerm: string;
  termType: string;
  loanType: string;
  fullName: string;
  email: string;
  phone: string;
}

interface ComparisonRow {
  scenario: string;
  term: string;
  rate: string;
  monthly: string;
  total: string;
}

const PrestamosCalculadora: React.FC = () => {
  // Estados
  const [formData, setFormData] = useState<FormData>({
    loanAmount: '',
    interestRate: '',
    loanTerm: '',
    termType: 'months',
    loanType: '',
    fullName: '',
    email: '',
    phone: ''
  });

  const [monthlyPayment, setMonthlyPayment] = useState('0,00 €');
  const [totalCost, setTotalCost] = useState('0,00 €');
  const [loansCounter, setLoansCounter] = useState(187);
  const [showModal, setShowModal] = useState(false);
  const [referenceNumber, setReferenceNumber] = useState('');
  const [comparisonData, setComparisonData] = useState<ComparisonRow[]>([
    { scenario: 'Principal', term: '- meses', rate: '-%', monthly: '0,00 €', total: '0,00 €' },
    { scenario: 'Plazo extendido', term: '- meses', rate: '-%', monthly: '0,00 €', total: '0,00 €' },
    { scenario: 'Mejor tasa', term: '- meses', rate: '-%', monthly: '0,00 €', total: '0,00 €' }
  ]);

  const [errors, setErrors] = useState({
    loanAmount: false,
    interestRate: false,
    loanTerm: false,
    loanType: false,
    fullName: false,
    email: false,
    phone: false
  });

  const [isFormValid, setIsFormValid] = useState(false);

  // Validación en tiempo real
  useEffect(() => {
    validateForm();
    if (formData.loanAmount && formData.interestRate && formData.loanTerm) {
      calculateLoan();
    }
  }, [formData]);

  const validateForm = () => {
    const newErrors = {
      loanAmount: !formData.loanAmount || parseFloat(formData.loanAmount) < 1000 || parseFloat(formData.loanAmount) > 500000,
      interestRate: !formData.interestRate || parseFloat(formData.interestRate) < 1 || parseFloat(formData.interestRate) > 20,
      loanTerm: !formData.loanTerm || 
        (formData.termType === 'months' && (parseInt(formData.loanTerm) < 3 || parseInt(formData.loanTerm) > 360)) ||
        (formData.termType === 'years' && (parseInt(formData.loanTerm) < 1 || parseInt(formData.loanTerm) > 30)),
      loanType: !formData.loanType,
      fullName: !formData.fullName || formData.fullName.trim().length < 3,
      email: !formData.email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email),
      phone: !formData.phone || !/^\d{9,}$/.test(formData.phone.replace(/\s/g, ''))
    };

    setErrors(newErrors);
    setIsFormValid(!Object.values(newErrors).includes(true));
  };

  const calculateLoan = () => {
    const principal = parseFloat(formData.loanAmount);
    const rate = parseFloat(formData.interestRate) / 100 / 12;
    const time = formData.termType === 'years' ? parseInt(formData.loanTerm) * 12 : parseInt(formData.loanTerm);
    
    const x = Math.pow(1 + rate, time);
    const monthly = (principal * x * rate) / (x - 1);
    const totalAmount = monthly * time;
    
    setMonthlyPayment(formatCurrency(monthly));
    setTotalCost(formatCurrency(totalAmount));
    
    updateComparisonTable(principal, rate, time);
  };

  const updateComparisonTable = (principal: number, monthlyRate: number, months: number) => {
    const scenario1Monthly = calculateMonthlyPayment(principal, monthlyRate, months);
    const scenario1Total = scenario1Monthly * months;
    
    const extendedMonths = Math.round(months * 1.25);
    const scenario2Monthly = calculateMonthlyPayment(principal, monthlyRate, extendedMonths);
    const scenario2Total = scenario2Monthly * extendedMonths;
    
    const betterRate = monthlyRate - (0.5 / 100 / 12);
    const scenario3Monthly = calculateMonthlyPayment(principal, betterRate, months);
    const scenario3Total = scenario3Monthly * months;
    
    const annualRate = monthlyRate * 12 * 100;
    const betterAnnualRate = betterRate * 12 * 100;
    
    setComparisonData([
      {
        scenario: 'Principal',
        term: `${months} meses`,
        rate: `${annualRate.toFixed(2)}%`,
        monthly: formatCurrency(scenario1Monthly),
        total: formatCurrency(scenario1Total)
      },
      {
        scenario: 'Plazo extendido',
        term: `${extendedMonths} meses`,
        rate: `${annualRate.toFixed(2)}%`,
        monthly: formatCurrency(scenario2Monthly),
        total: formatCurrency(scenario2Total)
      },
      {
        scenario: 'Mejor tasa',
        term: `${months} meses`,
        rate: `${betterAnnualRate.toFixed(2)}%`,
        monthly: formatCurrency(scenario3Monthly),
        total: formatCurrency(scenario3Total)
      }
    ]);
  };

  const calculateMonthlyPayment = (principal: number, rate: number, time: number): number => {
    const x = Math.pow(1 + rate, time);
    return (principal * x * rate) / (x - 1);
  };

  const formatCurrency = (value: number): string => {
    return new Intl.NumberFormat('es-ES', { 
      style: 'currency', 
      currency: 'EUR' 
    }).format(value);
  };

  const handleInputChange = (e: ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { id, value } = e.target;
    setFormData(prev => ({ ...prev, [id]: value }));
  };

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    
    if (isFormValid) {
      const refNumber = `REF-${Date.now().toString().slice(-8)}-${Math.floor(Math.random() * 1000)}`;
      setReferenceNumber(refNumber);
      setLoansCounter(prev => prev + 1);
      setShowModal(true);
      
      // Reset form
      setFormData({
        loanAmount: '',
        interestRate: '',
        loanTerm: '',
        termType: 'months',
        loanType: '',
        fullName: '',
        email: '',
        phone: ''
      });
      
      setMonthlyPayment('0,00 €');
      setTotalCost('0,00 €');
      setComparisonData([
        { scenario: 'Principal', term: '- meses', rate: '-%', monthly: '0,00 €', total: '0,00 €' },
        { scenario: 'Plazo extendido', term: '- meses', rate: '-%', monthly: '0,00 €', total: '0,00 €' },
        { scenario: 'Mejor tasa', term: '- meses', rate: '-%', monthly: '0,00 €', total: '0,00 €' }
      ]);
    }
  };

  return (
    <>
      {/* Estilos exactamente iguales al HTML */}
      <style>
        {`
          :root {
            --primary: #0a2540;
            --secondary: #4a6fa5;
            --light-gray: #f8f9fa;
            --medium-gray: #e9ecef;
            --dark-gray: #495057;
          }

          body {
            font-family: 'Roboto', sans-serif;
            color: var(--dark-gray);
            background-color: var(--light-gray);
          }

          .navbar {
            background-color: var(--primary);
          }

          .hero-section {
            background: linear-gradient(to right, var(--primary), var(--secondary));
            color: white;
            padding: 3rem 0;
          }

          .form-container {
            background-color: white;
            border-radius: 10px;
            box-shadow: 0 0.5rem 1rem rgba(0, 0, 0, 0.15);
            padding: 2rem;
          }

          .comparison-table {
            background-color: white;
            border-radius: 10px;
            box-shadow: 0 0.5rem 1rem rgba(0, 0, 0, 0.15);
            padding: 1.5rem;
          }

          .btn-primary {
            background-color: var(--primary);
            border-color: var(--primary);
          }

          .btn-primary:hover {
            background-color: var(--secondary);
            border-color: var(--secondary);
          }

          .counter-section {
            background-color: white;
            padding: 1.5rem;
            border-radius: 10px;
            box-shadow: 0 0.5rem 1rem rgba(0, 0, 0, 0.15);
            margin-top: 2rem;
          }

          .counter-number {
            font-size: 3rem;
            font-weight: bold;
            color: var(--primary);
          }

          .highlight-cell {
            background-color: rgba(74, 111, 165, 0.1);
            font-weight: 500;
          }

          .comparison-table th {
            background-color: var(--primary);
            color: white;
          }

          .form-label {
            font-weight: 500;
          }

          .invalid-feedback {
            display: none;
            font-size: 0.875em;
            color: #dc3545;
          }

          .is-invalid {
            border-color: #dc3545;
          }

          .is-invalid ~ .invalid-feedback {
            display: block;
          }

          footer {
            background-color: var(--primary);
            color: white;
            padding: 2rem 0;
            margin-top: 3rem;
          }

          .footer-link {
            color: #ccc;
            text-decoration: none;
          }

          .footer-link:hover {
            color: white;
          }

          @media (min-width: 992px) {
            .form-and-comparison {
              display: flex;
              gap: 2rem;
            }
            
            .form-container {
              flex: 1;
            }
            
            .comparison-container {
              flex: 1;
            }
          }

          .logo {
            font-weight: 700;
            font-size: 1.5rem;
          }

          .logo-accent {
            color: #4a6fa5;
          }
        `}
      </style>

      {/* Navbar */}
      <nav className="navbar navbar-expand-lg navbar-dark">
        <div className="container">
          <a className="navbar-brand logo" href="#">Financia<span className="logo-accent">Más</span></a>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav ms-auto">
              <li className="nav-item">
                <a className="nav-link active" href="#">Inicio</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">Préstamos</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">Calculadora</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">Nosotros</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">Contacto</a>
              </li>
            </ul>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="hero-section">
        <div className="container text-center">
          <h1 className="display-4">Solicita tu préstamo personalizado</h1>
          <p className="lead">Compara y elige la mejor opción para tus necesidades financieras</p>
        </div>
      </section>

      {/* Main Content */}
      <div className="container my-5">
        <div className="form-and-comparison">
          {/* Formulario */}
          <div className="form-container mb-4">
            <h2 className="mb-4">Calculadora de préstamos</h2>
            <form id="loan-form" noValidate onSubmit={handleSubmit}>
              <div className="mb-3">
                <label htmlFor="loanAmount" className="form-label">Monto del préstamo (€)</label>
                <input
                  type="number"
                  className={`form-control ${errors.loanAmount ? 'is-invalid' : ''}`}
                  id="loanAmount"
                  placeholder="Ej: 10000"
                  value={formData.loanAmount}
                  onChange={handleInputChange}
                  min="1000"
                  max="500000"
                />
                <div className="invalid-feedback">
                  Por favor ingrese un monto entre 1.000€ y 500.000€
                </div>
              </div>
              
              <div className="mb-3">
                <label htmlFor="interestRate" className="form-label">Tasa de interés anual (%)</label>
                <input
                  type="number"
                  className={`form-control ${errors.interestRate ? 'is-invalid' : ''}`}
                  id="interestRate"
                  placeholder="Ej: 5.5"
                  value={formData.interestRate}
                  onChange={handleInputChange}
                  min="1"
                  max="20"
                  step="0.1"
                />
                <div className="invalid-feedback">
                  Por favor ingrese una tasa entre 1% y 20%
                </div>
              </div>
              
              <div className="row mb-3">
                <div className="col-md-6">
                  <label htmlFor="loanTerm" className="form-label">Plazo</label>
                  <input
                    type="number"
                    className={`form-control ${errors.loanTerm ? 'is-invalid' : ''}`}
                    id="loanTerm"
                    placeholder="Ej: 24"
                    value={formData.loanTerm}
                    onChange={handleInputChange}
                    min="3"
                    max="360"
                  />
                  <div className="invalid-feedback">
                    Por favor ingrese un plazo válido
                  </div>
                </div>
                <div className="col-md-6">
                  <label htmlFor="termType" className="form-label">Tipo de plazo</label>
                  <select
                    className="form-select"
                    id="termType"
                    value={formData.termType}
                    onChange={handleInputChange}
                  >
                    <option value="months">Meses</option>
                    <option value="years">Años</option>
                  </select>
                </div>
              </div>
              
              <div className="mb-3">
                <label htmlFor="loanType" className="form-label">Tipo de préstamo</label>
                <select
                  className={`form-select ${errors.loanType ? 'is-invalid' : ''}`}
                  id="loanType"
                  value={formData.loanType}
                  onChange={handleInputChange}
                >
                  <option value="">Seleccione un tipo</option>
                  <option value="personal">Personal</option>
                  <option value="mortgage">Hipotecario</option>
                  <option value="auto">Automóvil</option>
                </select>
                <div className="invalid-feedback">
                  Por favor seleccione un tipo de préstamo
                </div>
              </div>
              
              <div className="mb-3">
                <label htmlFor="fullName" className="form-label">Nombre completo</label>
                <input
                  type="text"
                  className={`form-control ${errors.fullName ? 'is-invalid' : ''}`}
                  id="fullName"
                  placeholder="Ej: Juan Pérez"
                  value={formData.fullName}
                  onChange={handleInputChange}
                />
                <div className="invalid-feedback">
                  Por favor ingrese su nombre completo
                </div>
              </div>
              
              <div className="mb-3">
                <label htmlFor="email" className="form-label">Correo electrónico</label>
                <input
                  type="email"
                  className={`form-control ${errors.email ? 'is-invalid' : ''}`}
                  id="email"
                  placeholder="Ej: nombre@ejemplo.com"
                  value={formData.email}
                  onChange={handleInputChange}
                />
                <div className="invalid-feedback">
                  Por favor ingrese un correo electrónico válido
                </div>
              </div>
              
              <div className="mb-3">
                <label htmlFor="phone" className="form-label">Teléfono</label>
                <input
                  type="tel"
                  className={`form-control ${errors.phone ? 'is-invalid' : ''}`}
                  id="phone"
                  placeholder="Ej: 612345678"
                  value={formData.phone}
                  onChange={handleInputChange}
                />
                <div className="invalid-feedback">
                  Por favor ingrese un número de teléfono válido
                </div>
              </div>
              
              <div className="alert alert-info mb-4">
                <div className="row">
                  <div className="col-md-6 mb-2 mb-md-0">
                    <strong>Cuota mensual estimada:</strong>
                    <div id="monthly-payment" className="fs-4">{monthlyPayment}</div>
                  </div>
                  <div className="col-md-6">
                    <strong>Costo total del préstamo:</strong>
                    <div id="total-cost" className="fs-4">{totalCost}</div>
                  </div>
                </div>
              </div>
              
              <button 
                type="submit" 
                className="btn btn-primary btn-lg w-100" 
                id="submit-btn" 
                disabled={!isFormValid}
              >
                Enviar solicitud
              </button>
            </form>
          </div>
          
          {/* Comparación y contador */}
          <div className="comparison-container">
            <div className="comparison-table mb-4">
              <h2 className="mb-3">Comparativa de préstamos</h2>
              <div className="table-responsive">
                <table className="table table-striped">
                  <thead>
                    <tr>
                      <th>Escenario</th>
                      <th>Plazo</th>
                      <th>Tasa</th>
                      <th>Cuota mensual</th>
                      <th>Costo total</th>
                    </tr>
                  </thead>
                  <tbody id="comparison-table-body">
                    {comparisonData.map((row, index) => (
                      <tr key={index}>
                        <td>{row.scenario === 'Principal' ? <strong>{row.scenario}</strong> : row.scenario}</td>
                        <td>{row.term}</td>
                        <td>{row.rate}</td>
                        <td>{row.monthly}</td>
                        <td>{row.total}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
              <p className="small text-muted mt-2">
                * Los cálculos son estimativos y pueden variar según la evaluación crediticia.
              </p>
            </div>
            
            <div className="counter-section text-center">
              <p className="mb-1">Préstamos aprobados este mes</p>
              <div className="counter-number" id="loans-counter">{loansCounter}</div>
            </div>
          </div>
        </div>
      </div>

      {/* Características */}
      <div className="container">
        <div className="row">
          <div className="col-md-4 mb-4">
            <div className="card h-100">
              <div className="card-body text-center">
                <i className="fas fa-clock fa-3x text-primary mb-3"></i>
                <h5 className="card-title">Rápido y sencillo</h5>
                <p className="card-text">Aprobación en menos de 24 horas y fondos disponibles de inmediato.</p>
              </div>
            </div>
          </div>
          <div className="col-md-4 mb-4">
            <div className="card h-100">
              <div className="card-body text-center">
                <i className="fas fa-percentage fa-3x text-primary mb-3"></i>
                <h5 className="card-title">Las mejores tasas</h5>
                <p className="card-text">Tasas competitivas adaptadas a tu perfil financiero y necesidades.</p>
              </div>
            </div>
          </div>
          <div className="col-md-4 mb-4">
            <div className="card h-100">
              <div className="card-body text-center">
                <i className="fas fa-shield-alt fa-3x text-primary mb-3"></i>
                <h5 className="card-title">100% seguro</h5>
                <p className="card-text">Tus datos están protegidos con la más alta tecnología de encriptación.</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Modal de confirmación */}
      {showModal && (
        <div className="modal fade show" style={{ display: 'block', backgroundColor: 'rgba(0,0,0,0.5)' }} tabIndex={-1}>
          <div className="modal-dialog">
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title">¡Solicitud recibida!</h5>
                <button type="button" className="btn-close" onClick={() => setShowModal(false)}></button>
              </div>
              <div className="modal-body">
                <div className="text-center mb-3">
                  <i className="fas fa-check-circle text-success fa-4x"></i>
                </div>
                <p>Su solicitud de préstamo ha sido recibida correctamente. En breve, uno de nuestros asesores se pondrá en contacto con usted para continuar con el proceso.</p>
                <p><strong>Número de referencia:</strong> <span id="reference-number">{referenceNumber}</span></p>
              </div>
              <div className="modal-footer">
                <button type="button" className="btn btn-primary" onClick={() => setShowModal(false)}>Aceptar</button>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Footer */}
      <footer>
        <div className="container">
          <div className="row">
            <div className="col-md-4 mb-4 mb-md-0">
              <h5 className="mb-3">FinanciaMás</h5>
              <p>Soluciones financieras personalizadas para cumplir tus objetivos y facilitar tu vida.</p>
            </div>
            <div className="col-md-2 mb-4 mb-md-0">
              <h5 className="mb-3">Enlaces</h5>
              <ul className="list-unstyled">
                <li><a href="#" className="footer-link">Inicio</a></li>
                <li><a href="#" className="footer-link">Préstamos</a></li>
                <li><a href="#" className="footer-link">Calculadora</a></li>
                <li><a href="#" className="footer-link">FAQs</a></li>
              </ul>
            </div>
            <div className="col-md-3 mb-4 mb-md-0">
              <h5 className="mb-3">Legal</h5>
              <ul className="list-unstyled">
                <li><a href="#" className="footer-link">Términos y condiciones</a></li>
                <li><a href="#" className="footer-link">Política de privacidad</a></li>
                <li><a href="#" className="footer-link">Cookies</a></li>
              </ul>
            </div>
            <div className="col-md-3">
              <h5 className="mb-3">Contacto</h5>
              <ul className="list-unstyled">
                <li><i className="fas fa-phone me-2"></i> 900 123 456</li>
                <li><i className="fas fa-envelope me-2"></i> info@financiamas.es</li>
                <li><i className="fas fa-map-marker-alt me-2"></i> Calle Principal 123, Madrid</li>
              </ul>
            </div>
          </div>
          <hr className="mt-4 mb-3" style={{ borderColor: 'rgba(255,255,255,0.1)' }} />
          <div className="text-center">
            <p className="mb-0">&copy; 2025 FinanciaMás. Todos los derechos reservados.</p>
          </div>
        </div>
      </footer>
    </>
  );
};

export default PrestamosCalculadora;