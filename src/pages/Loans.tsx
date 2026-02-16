import React, { useState } from "react";
import { motion } from "framer-motion";
import { DollarSign, Percent, Clock, CheckCircle } from "lucide-react";

const Loans = () => {
  const [selectedLoan, setSelectedLoan] = useState(null);

  const loanTypes = [
    {
      id: 1,
      name: "Préstamo Personal",
      description: "Financiamiento flexible para tus necesidades personales",
      rate: "8.5% - 12%",
      term: "12 - 60 meses",
      amount: "Hasta $50,000",
      icon: DollarSign,
      benefits: [
        "Aprobación rápida",
        "Sin garantía",
        "Tasa competitiva",
        "Plazos flexibles"
      ]
    },
    {
      id: 2,
      name: "Préstamo Comercial",
      description: "Soluciones de crédito para impulsar tu negocio",
      rate: "7% - 10%",
      term: "24 - 120 meses",
      amount: "Hasta $500,000",
      icon: Percent,
      benefits: [
        "Capital de trabajo",
        "Inversión en equipos",
        "Asesoramiento empresarial",
        "Términos negociables"
      ]
    },
    {
      id: 3,
      name: "Préstamo Hipotecario",
      description: "Financiamiento para la casa de tus sueños",
      rate: "5.5% - 8%",
      term: "120 - 360 meses",
      amount: "Hasta $2,000,000",
      icon: Clock,
      benefits: [
        "Tasas bajas",
        "Plazos largos",
        "Asesoramiento legal",
        "Trámites simplificados"
      ]
    }
  ];

  return (
    <div className="font-sans bg-gradient-to-b from-slate-50 to-white min-h-screen">
      {/* Hero Section */}
      <div className="relative h-[350px] bg-gradient-to-r from-blue-600 to-cyan-500 flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 opacity-20">
          <div className="absolute top-10 left-10 w-40 h-40 bg-white rounded-full blur-3xl"></div>
          <div className="absolute bottom-10 right-10 w-60 h-60 bg-blue-300 rounded-full blur-3xl"></div>
        </div>
        
        <motion.div
          className="relative text-center z-10 px-4"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h1 className="text-5xl md:text-6xl font-bold text-white mb-4">
            Préstamos
          </h1>
          <p className="text-xl text-blue-100 max-w-2xl mx-auto">
            Soluciones de financiamiento adaptadas a tus necesidades
          </p>
        </motion.div>
      </div>

      {/* Contenido Principal */}
      <div className="px-4 py-16 max-w-7xl mx-auto">
        
        {/* Intro Section */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl md:text-4xl font-bold text-slate-800 mb-4">
            Tipos de Préstamos Disponibles
          </h2>
          <p className="text-lg text-slate-600 max-w-3xl mx-auto">
            En Soluciones Integrales JB ofrecemos una variedad de opciones de préstamo 
            con tasas competitivas y términos flexibles para ayudarte a alcanzar tus metas.
          </p>
        </motion.div>

        {/* Loans Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          {loanTypes.map((loan, index) => {
            const IconComponent = loan.icon;
            return (
              <motion.div
                key={loan.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.15 }}
                viewport={{ once: true }}
                whileHover={{ y: -10 }}
                className="bg-white rounded-lg shadow-lg hover:shadow-2xl transition-shadow duration-300 overflow-hidden cursor-pointer"
                onClick={() => setSelectedLoan(selectedLoan === loan.id ? null : loan.id)}
              >
                <div className="bg-gradient-to-r from-blue-500 to-cyan-400 p-6 flex items-center justify-center">
                  <IconComponent className="w-16 h-16 text-white" />
                </div>
                
                <div className="p-6">
                  <h3 className="text-2xl font-bold text-slate-800 mb-3">
                    {loan.name}
                  </h3>
                  <p className="text-slate-600 mb-4">
                    {loan.description}
                  </p>

                  <div className="space-y-3 mb-6">
                    <div className="flex items-center text-slate-700">
                      <span className="font-semibold mr-2">Tasa:</span>
                      <span className="text-blue-600">{loan.rate}</span>
                    </div>
                    <div className="flex items-center text-slate-700">
                      <span className="font-semibold mr-2">Plazo:</span>
                      <span className="text-blue-600">{loan.term}</span>
                    </div>
                    <div className="flex items-center text-slate-700">
                      <span className="font-semibold mr-2">Monto:</span>
                      <span className="text-blue-600">{loan.amount}</span>
                    </div>
                  </div>

                  {selectedLoan === loan.id && (
                    <motion.div
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: "auto" }}
                      exit={{ opacity: 0, height: 0 }}
                      className="border-t pt-4"
                    >
                      <p className="font-semibold text-slate-800 mb-3">Beneficios:</p>
                      <ul className="space-y-2">
                        {loan.benefits.map((benefit, idx) => (
                          <li key={idx} className="flex items-center text-slate-600">
                            <CheckCircle className="w-4 h-4 text-green-500 mr-2 flex-shrink-0" />
                            {benefit}
                          </li>
                        ))}
                      </ul>
                    </motion.div>
                  )}
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Features Section */}
        <motion.div
          className="bg-gradient-to-r from-blue-50 to-cyan-50 rounded-lg p-8 md:p-12 mb-12"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl font-bold text-slate-800 mb-8 text-center">
            ¿Por qué elegir nuestros préstamos?
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { title: "Aprobación Rápida", desc: "En 24-48 horas" },
              { title: "Tasas Competitivas", desc: "Mejores del mercado" },
              { title: "Asesoramiento Personalizado", desc: "Para tu situación" },
              { title: "Trámites Simples", desc: "Documentación mínima" }
            ].map((feature, idx) => (
              <motion.div
                key={idx}
                className="text-center"
                whileHover={{ scale: 1.05 }}
              >
                <div className="bg-white rounded-lg p-4 shadow-md">
                  <h3 className="font-semibold text-slate-800 mb-2">{feature.title}</h3>
                  <p className="text-slate-600 text-sm">{feature.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* CTA Section */}
        <motion.div
          className="text-center"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl font-bold text-slate-800 mb-6">
            ¿Listo para obtener tu préstamo?
          </h2>
          <p className="text-lg text-slate-600 mb-8 max-w-2xl mx-auto">
            Contáctanos hoy y uno de nuestros asesores te ayudará a encontrar la mejor solución de financiamiento.
          </p>
          
          <motion.a
            href="/contacto"
            whileHover={{ scale: 1.08 }}
            whileTap={{ scale: 0.95 }}
            className="bg-gradient-to-r from-blue-600 to-cyan-500 text-white px-8 py-4 rounded-lg text-lg font-semibold hover:shadow-lg transition-all duration-300 inline-block"
          >
            Solicitar Préstamo
          </motion.a>
        </motion.div>
      </div>
    </div>
  );
};

export default Loans;