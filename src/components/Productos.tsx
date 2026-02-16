import React, { useEffect, useState } from "react";
import axios from "axios";

const Productos = () => {
  const [productos, setProductos] = useState([]);
  const [loading, setLoading] = useState(true);
  const [searchTerm, setSearchTerm] = useState("");
  const [cart, setCart] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:3006/productos")
      .then((res) => {
        setProductos(res.data);
        setLoading(false);
      })
      .catch((err) => {
        console.error("Error al obtener productos:", err);
        setLoading(false);
      });
  }, []);

  const addToCart = (product) => {
    setCart(prev => {
      const existing = prev.find(item => item.id === product.id);
      if (existing) {
        return prev.map(item =>
          item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item
        );
      }
      return [
        ...prev,
        {
          id: product.id,
          name: product.name,
          price: product.price,
          quantity: 1,
        },
      ];
    });
  };

  if (loading) {
    return (
      <div className="flex items-center justify-center min-h-screen">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-orange-500"></div>
      </div>
    );
  }

  return (
    <section className="products bg-white py-16 px-4 md:px-8" id="products">
      <div className="container max-w-7xl mx-auto">
        {/* HEADER */}
        <div className="products-header">
          <div>
            <h2 className="section-title">PRODUCTOS</h2>
            <p className="results-count">Resultados ({productos.length})</p>
          </div>
          <div className="sort-container">
            <label>Ordenar por:</label>
            <select className="sort-select">
              <option>Recomendados</option>
              <option>Menor precio</option>
              <option>Mayor precio</option>
              <option>Más vendidos</option>
            </select>
          </div>
        </div>

        {/* SEARCH BAR */}
        <div className="search-container">
          <i className="fas fa-search search-icon"></i>
          <input
            type="text"
            className="search-input"
            placeholder="Buscar productos..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
          <button className="filter-btn" disabled>
            <i className="fas fa-filter"></i>
          </button>
        </div>

        {/* PRODUCTS GRID */}
        <div className="products-grid-store">
          {productos.map((product) => (
            <div className="product-card-store" key={product.id}>
              <div className="product-image-wrapper">
                <div className="product-image-placeholder">
                  <span>Producto</span>
                </div>
                <div className="discount-badge">-20%</div>
              </div>

              <div className="product-info">
                <p className="brand-name">{product.code || "MARCA"}</p>

                <h3 className="product-title">{product.name}</h3>

                <div className="rating">
                  <span>★★★★★</span>
                  <span className="reviews">(124)</span>
                </div>

                <div className="price-section">
                  <span className="original-price">S/ {(parseFloat(product.price) * 1.25).toFixed(2)}</span>
                  <span className="current-price">S/ {parseFloat(product.price).toFixed(2)}</span>
                </div>

                <p className="availability">Llega mañana</p>
                <p className="installments">18 Cuotas Sin Interés</p>

                <button 
                  className="btn-add-cart-store"
                  onClick={() => addToCart(product)}
                >
                  Añadir al carrito
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* VIEW MORE BUTTON */}
        <div className="view-more-container">
          <a href="#products" className="btn-view-more">
            Ver más productos
          </a>
        </div>
      </div>

      <style>{`
        .products-header {
          display: flex;
          justify-content: space-between;
          align-items: center;
          margin-bottom: 30px;
        }
        .section-title {
          color: #333;
          text-shadow: none;
          font-size: 2.5rem;
          font-weight: bold;
          margin: 0;
        }
        .results-count {
          color: #999;
          font-size: 14px;
          margin: 5px 0 0 0;
        }
        .sort-container {
          display: flex;
          align-items: center;
          gap: 15px;
        }
        .sort-select {
          padding: 8px 15px;
          border: 1px solid #ddd;
          border-radius: 6px;
          font-size: 14px;
          background: white;
          cursor: pointer;
        }
        .search-container {
          position: sticky;
          top: 80px;
          background: white;
          padding: 15px;
          border-radius: 30px;
          box-shadow: 0 5px 20px rgba(0, 0, 0, 0.1);
          margin: 0 auto 40px;
          max-width: 700px;
          display: flex;
          align-items: center;
          z-index: 100;
        }
        .search-icon {
          color: #0066ff;
          font-size: 1.2rem;
          margin-right: 10px;
        }
        .search-input {
          border: none;
          flex: 1;
          padding: 10px 0;
          font-size: 1rem;
        }
        .search-input:focus {
          outline: none;
        }
        .filter-btn {
          background: none;
          border: none;
          color: #ff7a00;
          font-size: 1.2rem;
          cursor: pointer;
          padding: 0 10px;
        }
        .products-grid-store {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 25px;
          margin-top: 30px;
        }
        .product-card-store {
          background: white;
          border: 1px solid #e0e0e0;
          border-radius: 8px;
          overflow: hidden;
          transition: all 0.3s ease;
          display: flex;
          flex-direction: column;
        }
        .product-card-store:hover {
          box-shadow: 0 10px 30px rgba(0, 0, 0, 0.15);
          transform: translateY(-4px);
          border-color: #0066ff;
        }
        .product-image-wrapper {
          position: relative;
          width: 100%;
          height: 350px;
          background: linear-gradient(135deg, #fcfcfc 0%, #f5f5f5 100%);
          display: flex;
          align-items: center;
          justify-content: center;
          overflow: visible;
          border-bottom: 1px solid #ececec;
        }
        .product-image-placeholder {
          width: 100%;
          height: 100%;
          display: flex;
          align-items: center;
          justify-content: center;
          background: linear-gradient(135deg, #f0f0f0 0%, #e8e8e8 100%);
          color: #999;
          font-size: 14px;
          font-weight: 600;
        }
        .discount-badge {
          position: absolute;
          top: 10px;
          right: 10px;
          background: #ff6600;
          color: white;
          padding: 6px 10px;
          border-radius: 4px;
          font-weight: 700;
          font-size: 13px;
        }
        .product-info {
          padding: 15px;
          flex-grow: 1;
          display: flex;
          flex-direction: column;
        }
        .brand-name {
          color: #0066ff;
          font-size: 12px;
          font-weight: 700;
          margin: 0 0 8px 0;
          text-transform: uppercase;
          letter-spacing: 0.5px;
        }
        .product-title {
          font-size: 13px;
          font-weight: 600;
          margin: 0 0 10px 0;
          line-height: 1.4;
          color: #333;
          min-height: 32px;
          display: -webkit-box;
          -webkit-line-clamp: 2;
          -webkit-box-orient: vertical;
          overflow: hidden;
        }
        .rating {
          display: flex;
          align-items: center;
          gap: 5px;
          margin-bottom: 10px;
          font-size: 13px;
        }
        .rating span {
          color: #ffc107;
        }
        .reviews {
          color: #999;
          font-size: 12px;
        }
        .price-section {
          display: flex;
          gap: 10px;
          margin-bottom: 10px;
        }
        .original-price {
          text-decoration: line-through;
          color: #999;
          font-size: 12px;
        }
        .current-price {
          font-size: 18px;
          font-weight: 700;
          color: #0066ff;
        }
        .availability {
          font-size: 12px;
          color: #00aa00;
          font-weight: 600;
          margin: 5px 0;
        }
        .installments {
          font-size: 11px;
          color: #666;
          margin: 5px 0 10px 0;
        }
        .btn-add-cart-store {
          background: white;
          border: 1px solid #ddd;
          padding: 10px;
          border-radius: 4px;
          font-weight: 600;
          font-size: 13px;
          cursor: pointer;
          transition: all 0.3s ease;
          margin-top: auto;
        }
        .btn-add-cart-store:hover {
          background: #f0f0f0;
          border-color: #0066ff;
          color: #0066ff;
        }
        .view-more-container {
          display: flex;
          justify-content: center;
          margin-top: 50px;
          padding: 30px 0;
        }
        .btn-view-more {
          display: inline-block;
          text-decoration: none;
          text-align: center;
          background: white;
          border: 2px solid #0066ff;
          color: #0066ff;
          padding: 12px 50px;
          border-radius: 6px;
          font-weight: 700;
          font-size: 15px;
          cursor: pointer;
          transition: all 0.3s ease;
          text-transform: uppercase;
          letter-spacing: 1px;
        }
        .btn-view-more:hover {
          background: #0066ff;
          color: white;
          transform: translateY(-2px);
          box-shadow: 0 5px 20px rgba(0, 102, 255, 0.3);
        }
        @media (max-width: 1024px) {
          .products-grid-store { grid-template-columns: repeat(2, 1fr); }
        }
        @media (max-width: 768px) {
          .products-grid-store { grid-template-columns: 1fr; gap: 20px; }
          .products-header { flex-direction: column; align-items: flex-start; gap: 15px; }
          .sort-container { width: 100%; }
          .sort-select { flex: 1; }
        }
      `}</style>
    </section>
  );
};

export default Productos;