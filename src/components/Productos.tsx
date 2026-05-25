import React, { useEffect, useState, useCallback } from "react";
import axios from "axios";

const CATEGORIES = ["Todo", "Laptops", "Smartphones", "Audio", "Gaming", "Accesorios", "Tablets"];

const SORT_OPTIONS = [
  { value: "recommended", label: "Destacados" },
  { value: "price_asc", label: "Precio: menor a mayor" },
  { value: "price_desc", label: "Precio: mayor a menor" },
  { value: "rating", label: "Mejor valorados" },
  { value: "newest", label: "Más nuevos" },
];

// ─── Cart Drawer ──────────────────────────────────────────────────────────────
const CartDrawer = ({ cart, onRemove, onUpdateQty, onClose, isOpen }) => {
  const total = cart.reduce((s, i) => s + i.price * i.quantity, 0);
  const count = cart.reduce((s, i) => s + i.quantity, 0);
  return (
    <>
      <div className={`drawer-backdrop ${isOpen ? "active" : ""}`} onClick={onClose} />
      <aside className={`cart-drawer ${isOpen ? "open" : ""}`} aria-label="Carrito de compras">
        <div className="drawer-head">
          <div>
            <p className="drawer-eyebrow">Mi Bolsa</p>
            <p className="drawer-count">{count} {count === 1 ? "artículo" : "artículos"}</p>
          </div>
          <button className="drawer-close" onClick={onClose} aria-label="Cerrar carrito">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none"><line x1="18" y1="6" x2="6" y2="18" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/><line x1="6" y1="6" x2="18" y2="18" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/></svg>
          </button>
        </div>

        <div className="drawer-body">
          {cart.length === 0 ? (
            <div className="drawer-empty">
              <div className="drawer-empty-icon">
                <svg width="40" height="40" viewBox="0 0 24 24" fill="none"><path d="M6 2L3 6v14a2 2 0 002 2h14a2 2 0 002-2V6l-3-4z" stroke="currentColor" strokeWidth="1" strokeLinejoin="round"/><line x1="3" y1="6" x2="21" y2="6" stroke="currentColor" strokeWidth="1"/><path d="M16 10a4 4 0 01-8 0" stroke="currentColor" strokeWidth="1"/></svg>
              </div>
              <p className="drawer-empty-title">Tu bolsa está vacía</p>
              <p className="drawer-empty-sub">Agrega productos para comenzar</p>
              <button className="btn-outline" onClick={onClose}>Explorar productos</button>
            </div>
          ) : (
            <>
              <ul className="drawer-list">
                {cart.map(item => (
                  <li key={item.id} className="drawer-item">
                    <div className="drawer-item-thumb">
                      <span>{item.name.slice(0,2).toUpperCase()}</span>
                    </div>
                    <div className="drawer-item-body">
                      <p className="drawer-item-name">{item.name}</p>
                      <p className="drawer-item-price">S/ {parseFloat(item.price).toFixed(2)}</p>
                      <div className="qty-control">
                        <button className="qty-btn" onClick={() => onUpdateQty(item.id, item.quantity - 1)} aria-label="Reducir cantidad">−</button>
                        <span className="qty-num">{item.quantity}</span>
                        <button className="qty-btn" onClick={() => onUpdateQty(item.id, item.quantity + 1)} aria-label="Aumentar cantidad">+</button>
                      </div>
                    </div>
                    <button className="drawer-remove" onClick={() => onRemove(item.id)} aria-label="Eliminar producto">
                      <svg width="14" height="14" viewBox="0 0 24 24" fill="none"><polyline points="3 6 5 6 21 6" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/><path d="M19 6l-1 14H6L5 6" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round"/><path d="M10 11v6M14 11v6" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/><path d="M9 6V4a1 1 0 011-1h4a1 1 0 011 1v2" stroke="currentColor" strokeWidth="1.5"/></svg>
                    </button>
                  </li>
                ))}
              </ul>

              <div className="drawer-summary">
                <div className="summary-line"><span>Subtotal</span><span>S/ {total.toFixed(2)}</span></div>
                <div className="summary-line muted"><span>Envío</span><span>Gratis</span></div>
                <div className="summary-divider" />
                <div className="summary-line total"><span>Total</span><span>S/ {total.toFixed(2)}</span></div>
                <button className="btn-primary full">Pagar ahora →</button>
                <button className="btn-ghost full" onClick={onClose}>Seguir comprando</button>
              </div>
            </>
          )}
        </div>
      </aside>
    </>
  );
};

// ─── Skeleton ─────────────────────────────────────────────────────────────────
const SkeletonGrid = () => (
  <div className="skeleton-wrap">
    {[...Array(6)].map((_, i) => (
      <div key={i} className="skeleton-card">
        <div className="sk sk-img" />
        <div className="sk sk-tag" />
        <div className="sk sk-title" />
        <div className="sk sk-price" />
        <div className="sk sk-btn" />
      </div>
    ))}
  </div>
);

// ─── Main Component ───────────────────────────────────────────────────────────
const Productos = () => {
  const [productos, setProductos] = useState([]);
  const [loading, setLoading] = useState(true);
  const [search, setSearch] = useState("");
  const [category, setCategory] = useState("Todo");
  const [sortBy, setSortBy] = useState("recommended");
  const [cart, setCart] = useState([]);
  const [cartOpen, setCartOpen] = useState(false);
  const [wishlist, setWishlist] = useState([]);
  const [addedId, setAddedId] = useState(null);
  const [viewMode, setViewMode] = useState("grid"); // grid | list
  const [filterOpen, setFilterOpen] = useState(false);
  const [maxPrice, setMaxPrice] = useState(5000);

  useEffect(() => {
    axios.get("http://localhost:3006/productos")
      .then(res => { setProductos(res.data); setLoading(false); })
      .catch(() => setLoading(false));
  }, []);

  const addToCart = useCallback((product) => {
    setCart(prev => {
      const ex = prev.find(i => i.id === product.id);
      if (ex) return prev.map(i => i.id === product.id ? { ...i, quantity: i.quantity + 1 } : i);
      return [...prev, { id: product.id, name: product.name, price: product.price, quantity: 1 }];
    });
    setAddedId(product.id);
    setTimeout(() => setAddedId(null), 1400);
  }, []);

  const removeFromCart = id => setCart(prev => prev.filter(i => i.id !== id));
  const updateQty = (id, qty) => {
    if (qty < 1) { removeFromCart(id); return; }
    setCart(prev => prev.map(i => i.id === id ? { ...i, quantity: qty } : i));
  };
  const toggleWishlist = id => setWishlist(prev => prev.includes(id) ? prev.filter(x => x !== id) : [...prev, id]);

  const filtered = productos.filter(p => {
    const matchSearch = p.name?.toLowerCase().includes(search.toLowerCase());
    const matchPrice = parseFloat(p.price) <= maxPrice;
    return matchSearch && matchPrice;
  });

  const sorted = [...filtered].sort((a, b) => {
    if (sortBy === "price_asc") return parseFloat(a.price) - parseFloat(b.price);
    if (sortBy === "price_desc") return parseFloat(b.price) - parseFloat(a.price);
    return 0;
  });

  const cartCount = cart.reduce((s, i) => s + i.quantity, 0);

  return (
    <>
      <div className="store-root">
        {/* ── NAV ── */}
        <nav className="store-nav">
          <div className="nav-inner">
            <a className="nav-logo" href="#">
              <svg width="22" height="22" viewBox="0 0 24 24" fill="none"><path d="M12 2a7 7 0 110 14A7 7 0 0112 2z" stroke="currentColor" strokeWidth="1.5"/><path d="M8.5 22c.5-2 2-3.5 3.5-3.5s3 1.5 3.5 3.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/></svg>
              <span>SOLUCIONES</span>
            </a>

            <ul className="nav-links">
              {CATEGORIES.slice(1).map(c => (
                <li key={c}><a href="#" className={`nav-link ${category === c ? "active" : ""}`} onClick={e => { e.preventDefault(); setCategory(c); }}>{c}</a></li>
              ))}
            </ul>

            <div className="nav-actions">
              <button className="nav-search-btn" aria-label="Buscar">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none"><circle cx="11" cy="11" r="8" stroke="currentColor" strokeWidth="1.5"/><path d="M21 21l-4.35-4.35" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/></svg>
              </button>
              <button className="nav-cart-btn" onClick={() => setCartOpen(true)} aria-label="Abrir carrito">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none"><path d="M6 2L3 6v14a2 2 0 002 2h14a2 2 0 002-2V6l-3-4z" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round"/><line x1="3" y1="6" x2="21" y2="6" stroke="currentColor" strokeWidth="1.5"/><path d="M16 10a4 4 0 01-8 0" stroke="currentColor" strokeWidth="1.5"/></svg>
                {cartCount > 0 && <span className="nav-badge">{cartCount}</span>}
              </button>
            </div>
          </div>
        </nav>

        {/* ── HERO STRIP ── */}
        <header className="store-hero">
          <p className="hero-eyebrow">Colección Primavera 2025</p>
          <h1 className="hero-title">Tecnología.<br/>Redefinida.</h1>
          <p className="hero-sub">Los mejores dispositivos, entregados con cuidado.</p>
        </header>

        {/* ── TOOLBAR ── */}
        <div className="store-toolbar">
          <div className="toolbar-inner">
            <div className="search-box">
              <svg className="search-ico" width="16" height="16" viewBox="0 0 24 24" fill="none"><circle cx="11" cy="11" r="8" stroke="currentColor" strokeWidth="1.5"/><path d="M21 21l-4.35-4.35" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/></svg>
              <input
                className="search-input"
                type="text"
                placeholder="Buscar productos…"
                value={search}
                onChange={e => setSearch(e.target.value)}
                aria-label="Buscar productos"
              />
              {search && <button className="search-clear-btn" onClick={() => setSearch("")} aria-label="Limpiar búsqueda">×</button>}
            </div>

            <div className="toolbar-right">
              <span className="results-label">{sorted.length} {sorted.length === 1 ? "producto" : "productos"}</span>

              <select className="sort-select" value={sortBy} onChange={e => setSortBy(e.target.value)} aria-label="Ordenar por">
                {SORT_OPTIONS.map(o => <option key={o.value} value={o.value}>{o.label}</option>)}
              </select>

              <button
                className={`filter-btn ${filterOpen ? "active" : ""}`}
                onClick={() => setFilterOpen(f => !f)}
                aria-expanded={filterOpen}
              >
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none"><line x1="4" y1="6" x2="20" y2="6" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/><line x1="8" y1="12" x2="16" y2="12" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/><line x1="12" y1="18" x2="12" y2="18" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/></svg>
                Filtrar
              </button>

              <div className="view-toggle" role="group" aria-label="Modo de vista">
                <button className={`view-btn ${viewMode === "grid" ? "active" : ""}`} onClick={() => setViewMode("grid")} aria-label="Vista cuadrícula">
                  <svg width="15" height="15" viewBox="0 0 24 24" fill="none"><rect x="3" y="3" width="7" height="7" rx="1" stroke="currentColor" strokeWidth="1.5"/><rect x="14" y="3" width="7" height="7" rx="1" stroke="currentColor" strokeWidth="1.5"/><rect x="3" y="14" width="7" height="7" rx="1" stroke="currentColor" strokeWidth="1.5"/><rect x="14" y="14" width="7" height="7" rx="1" stroke="currentColor" strokeWidth="1.5"/></svg>
                </button>
                <button className={`view-btn ${viewMode === "list" ? "active" : ""}`} onClick={() => setViewMode("list")} aria-label="Vista lista">
                  <svg width="15" height="15" viewBox="0 0 24 24" fill="none"><line x1="3" y1="6" x2="21" y2="6" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/><line x1="3" y1="12" x2="21" y2="12" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/><line x1="3" y1="18" x2="21" y2="18" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/></svg>
                </button>
              </div>
            </div>
          </div>

          {/* Filter Drawer */}
          {filterOpen && (
            <div className="filter-strip">
              <div className="filter-inner">
                <div className="filter-group">
                  <span className="filter-label">Categoría</span>
                  <div className="filter-pills">
                    {CATEGORIES.map(c => (
                      <button key={c} className={`pill ${category === c ? "pill-active" : ""}`} onClick={() => setCategory(c)}>{c}</button>
                    ))}
                  </div>
                </div>
                <div className="filter-group">
                  <span className="filter-label">Precio máximo: <strong>S/ {maxPrice.toLocaleString()}</strong></span>
                  <input
                    className="price-range"
                    type="range" min="0" max="5000" step="50"
                    value={maxPrice}
                    onChange={e => setMaxPrice(+e.target.value)}
                    aria-label="Precio máximo"
                  />
                </div>
                <button className="filter-reset-btn" onClick={() => { setCategory("Todo"); setMaxPrice(5000); }}>Limpiar</button>
              </div>
            </div>
          )}
        </div>

        {/* ── MAIN ── */}
        <main className="store-main">
          {loading ? (
            <SkeletonGrid />
          ) : sorted.length === 0 ? (
            <div className="empty-state">
              <p className="empty-icon">○</p>
              <h2 className="empty-title">Sin resultados</h2>
              <p className="empty-sub">Prueba con otros términos o ajusta los filtros.</p>
              <button className="btn-outline" onClick={() => { setSearch(""); setCategory("Todo"); setMaxPrice(5000); }}>Ver todo</button>
            </div>
          ) : (
            <div className={`product-grid ${viewMode === "list" ? "list-mode" : ""}`}>
              {sorted.map((product, idx) => {
                const price = parseFloat(product.price);
                const original = (price * 1.2).toFixed(2);
                const inWishlist = wishlist.includes(product.id);
                const justAdded = addedId === product.id;
                const initials = product.name?.slice(0, 2).toUpperCase() || "PR";
                const hue = ((product.id * 47) % 360);

                return (
                  <article
                    key={product.id}
                    className={`product-card ${justAdded ? "card-added" : ""}`}
                    style={{ animationDelay: `${idx * 30}ms` }}
                  >
                    {/* Image */}
                    <div className="card-media" style={{ "--hue": hue }}>
                      <div className="card-media-inner">
                        <div className="card-initials">{initials}</div>
                      </div>

                      <div className="card-badges">
                        {idx < 3 && <span className="badge badge-new">Nuevo</span>}
                        <span className="badge badge-sale">−20%</span>
                      </div>

                      <button
                        className={`wishlist-btn ${inWishlist ? "wished" : ""}`}
                        onClick={() => toggleWishlist(product.id)}
                        aria-label={inWishlist ? "Quitar de favoritos" : "Añadir a favoritos"}
                      >
                        <svg width="16" height="16" viewBox="0 0 24 24" fill={inWishlist ? "currentColor" : "none"}><path d="M20.84 4.61a5.5 5.5 0 00-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 00-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 000-7.78z" stroke="currentColor" strokeWidth="1.5"/></svg>
                      </button>
                    </div>

                    {/* Info */}
                    <div className="card-body">
                      <div className="card-meta">
                        <span className="card-brand">{product.code || "SOLUCIONES"}</span>
                        <div className="card-stars">
                          {"★★★★★".split("").map((s, i) => (
                            <span key={i} className={`star ${i < 4 ? "star-on" : "star-off"}`}>{s}</span>
                          ))}
                          <span className="card-reviews">{Math.floor(60 + (product.id * 37) % 200)}</span>
                        </div>
                      </div>

                      <h2 className="card-title">{product.name}</h2>

                      <div className="card-pricing">
                        <div className="card-prices">
                          <span className="price-original">S/ {original}</span>
                          <span className="price-current">S/ {price.toFixed(2)}</span>
                        </div>
                        <span className="price-monthly">18× S/ {(price / 18).toFixed(0)}</span>
                      </div>

                      <div className="card-perks">
                        <span className="perk">Envío gratis</span>
                        <span className="perk">Devolución 30 días</span>
                      </div>

                      <button
                        className={`btn-add ${justAdded ? "btn-add-done" : ""}`}
                        onClick={() => addToCart(product)}
                        disabled={justAdded}
                      >
                        {justAdded ? (
                          <>
                            <svg width="15" height="15" viewBox="0 0 24 24" fill="none"><polyline points="20 6 9 17 4 12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg>
                            Agregado
                          </>
                        ) : (
                          "Agregar al carrito"
                        )}
                      </button>
                    </div>
                  </article>
                );
              })}
            </div>
          )}

          {/* Load more */}
          {!loading && sorted.length > 0 && (
            <div className="load-more-area">
              <div className="load-progress">
                <div className="load-bar" style={{ width: `${Math.min(100, (12 / Math.max(productos.length, 1)) * 100)}%` }} />
              </div>
              <p className="load-label">Mostrando {Math.min(sorted.length, 12)} de {productos.length}</p>
              <button className="btn-load">Ver más productos</button>
            </div>
          )}
        </main>

        {/* ── FOOTER STRIP ── */}
        <footer className="store-footer">
          <div className="footer-inner">
            <span className="footer-logo">SOLUCIONES</span>
            <div className="footer-links">
              <a href="#" className="footer-link">Privacidad</a>
              <a href="#" className="footer-link">Términos</a>
              <a href="#" className="footer-link">Soporte</a>
            </div>
            <span className="footer-copy">© 2025 APEX. Todos los derechos reservados.</span>
          </div>
        </footer>
      </div>

      <CartDrawer cart={cart} onRemove={removeFromCart} onUpdateQty={updateQty} onClose={() => setCartOpen(false)} isOpen={cartOpen} />

      <style>{styles}</style>
    </>
  );
};

const styles = `
@import url('https://fonts.googleapis.com/css2?family=Playfair+Display:wght@400;500;600;700&family=Geist:wght@300;400;500;600&display=swap');

:root {
  --white: #ffffff;
  --off-white: #f8f7f5;
  --gray-50: #f4f3f0;
  --gray-100: #e8e6e2;
  --gray-200: #d4d0cb;
  --gray-400: #a09c95;
  --gray-600: #6b6660;
  --gray-800: #2c2926;
  --black: #1a1816;
  --accent: #1d1d1f;
  --blue: #0071e3;
  --blue-hover: #0077ed;
  --green: #1a9e5a;
  --red: #d93025;
  --font-display: 'Playfair Display', Georgia, serif;
  --font-body: 'Geist', -apple-system, BlinkMacSystemFont, sans-serif;
  --nav-h: 52px;
  --max-w: 1240px;
  --px: clamp(20px, 5vw, 64px);
  --radius: 14px;
  --radius-sm: 8px;
  --shadow-sm: 0 1px 3px rgba(0,0,0,.06), 0 1px 2px rgba(0,0,0,.04);
  --shadow: 0 4px 24px rgba(0,0,0,.07), 0 1px 4px rgba(0,0,0,.04);
  --shadow-lg: 0 12px 48px rgba(0,0,0,.12), 0 2px 8px rgba(0,0,0,.06);
  --transition: 0.22s cubic-bezier(0.4, 0, 0.2, 1);
}

*, *::before, *::after { box-sizing: border-box; margin: 0; padding: 0; }

.store-root {
  font-family: var(--font-body);
  background: var(--white);
  color: var(--black);
  min-height: 100vh;
}

/* ── NAV ── */
.store-nav {
  position: sticky;
  top: 0;
  z-index: 100;
  background: rgba(255,255,255,0.88);
  backdrop-filter: saturate(180%) blur(20px);
  border-bottom: 1px solid var(--gray-100);
  height: var(--nav-h);
}
.nav-inner {
  max-width: var(--max-w);
  margin: 0 auto;
  padding: 0 var(--px);
  height: 100%;
  display: flex;
  align-items: center;
  gap: 48px;
}
.nav-logo {
  display: flex;
  align-items: center;
  gap: 8px;
  text-decoration: none;
  color: var(--black);
  font-family: var(--font-display);
  font-size: 17px;
  font-weight: 600;
  letter-spacing: -0.3px;
  flex-shrink: 0;
}
.nav-links {
  display: flex;
  align-items: center;
  gap: 32px;
  list-style: none;
  flex: 1;
}
.nav-link {
  text-decoration: none;
  font-size: 13px;
  font-weight: 400;
  color: var(--gray-600);
  transition: color var(--transition);
  letter-spacing: 0.1px;
}
.nav-link:hover { color: var(--black); }
.nav-link.active { color: var(--black); font-weight: 500; }
.nav-actions {
  display: flex;
  align-items: center;
  gap: 8px;
}
.nav-search-btn, .nav-cart-btn {
  width: 36px;
  height: 36px;
  border: none;
  border-radius: 50%;
  background: transparent;
  color: var(--gray-800);
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: background var(--transition);
  position: relative;
}
.nav-search-btn:hover, .nav-cart-btn:hover { background: var(--gray-50); }
.nav-badge {
  position: absolute;
  top: 3px; right: 3px;
  min-width: 16px;
  height: 16px;
  padding: 0 4px;
  background: var(--blue);
  color: white;
  font-size: 9px;
  font-weight: 600;
  border-radius: 100px;
  display: flex;
  align-items: center;
  justify-content: center;
  border: 2px solid white;
}

/* ── HERO ── */
.store-hero {
  background: var(--off-white);
  padding: clamp(60px, 10vw, 120px) var(--px) clamp(50px, 8vw, 96px);
  text-align: center;
  border-bottom: 1px solid var(--gray-100);
}
.hero-eyebrow {
  font-size: 12px;
  font-weight: 500;
  letter-spacing: 2.5px;
  text-transform: uppercase;
  color: var(--gray-400);
  margin-bottom: 20px;
}
.hero-title {
  font-family: var(--font-display);
  font-size: clamp(2.8rem, 7vw, 5.5rem);
  font-weight: 500;
  line-height: 1.05;
  letter-spacing: -2px;
  color: var(--black);
  margin-bottom: 20px;
}
.hero-sub {
  font-size: 17px;
  color: var(--gray-600);
  font-weight: 300;
  max-width: 380px;
  margin: 0 auto;
  line-height: 1.6;
}

/* ── TOOLBAR ── */
.store-toolbar {
  border-bottom: 1px solid var(--gray-100);
  position: sticky;
  top: var(--nav-h);
  z-index: 90;
  background: rgba(255,255,255,0.95);
  backdrop-filter: blur(12px);
}
.toolbar-inner {
  max-width: var(--max-w);
  margin: 0 auto;
  padding: 14px var(--px);
  display: flex;
  align-items: center;
  gap: 16px;
}
.search-box {
  flex: 1;
  max-width: 360px;
  position: relative;
  display: flex;
  align-items: center;
  background: var(--gray-50);
  border: 1px solid var(--gray-100);
  border-radius: 100px;
  padding: 0 16px;
  transition: all var(--transition);
}
.search-box:focus-within {
  background: white;
  border-color: var(--gray-200);
  box-shadow: 0 0 0 3px rgba(0,113,227,.1);
}
.search-ico { color: var(--gray-400); flex-shrink: 0; }
.search-input {
  flex: 1;
  border: none;
  background: transparent;
  font-family: var(--font-body);
  font-size: 14px;
  color: var(--black);
  padding: 10px 10px;
  outline: none;
}
.search-input::placeholder { color: var(--gray-400); }
.search-clear-btn {
  border: none;
  background: none;
  font-size: 18px;
  color: var(--gray-400);
  cursor: pointer;
  line-height: 1;
}
.toolbar-right {
  display: flex;
  align-items: center;
  gap: 12px;
  margin-left: auto;
}
.results-label {
  font-size: 13px;
  color: var(--gray-400);
  white-space: nowrap;
}
.sort-select {
  border: 1px solid var(--gray-100);
  background: transparent;
  font-family: var(--font-body);
  font-size: 13px;
  color: var(--gray-600);
  padding: 8px 14px;
  border-radius: 100px;
  cursor: pointer;
  outline: none;
  transition: border-color var(--transition);
  -webkit-appearance: none;
  min-width: 180px;
  background-image: url("data:image/svg+xml,%3Csvg width='10' height='6' viewBox='0 0 10 6' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M1 1l4 4 4-4' stroke='%23a09c95' stroke-width='1.5' stroke-linecap='round' stroke-linejoin='round'/%3E%3C/svg%3E");
  background-repeat: no-repeat;
  background-position: right 12px center;
  padding-right: 32px;
}
.sort-select:hover { border-color: var(--gray-200); }
.filter-btn {
  display: flex;
  align-items: center;
  gap: 6px;
  border: 1px solid var(--gray-100);
  background: transparent;
  font-family: var(--font-body);
  font-size: 13px;
  color: var(--gray-600);
  padding: 8px 16px;
  border-radius: 100px;
  cursor: pointer;
  transition: all var(--transition);
}
.filter-btn:hover { border-color: var(--gray-200); color: var(--black); }
.filter-btn.active { border-color: var(--black); color: var(--black); background: var(--gray-50); }
.view-toggle {
  display: flex;
  border: 1px solid var(--gray-100);
  border-radius: 8px;
  overflow: hidden;
}
.view-btn {
  width: 34px;
  height: 34px;
  border: none;
  background: transparent;
  color: var(--gray-400);
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: all var(--transition);
}
.view-btn.active { background: var(--gray-50); color: var(--black); }
.view-btn:hover:not(.active) { color: var(--gray-600); }

/* FILTER STRIP */
.filter-strip {
  border-top: 1px solid var(--gray-100);
  background: var(--off-white);
  animation: slideDown 0.18s ease;
}
@keyframes slideDown { from { opacity:0; transform: translateY(-6px); } to { opacity:1; transform:none; } }
.filter-inner {
  max-width: var(--max-w);
  margin: 0 auto;
  padding: 18px var(--px);
  display: flex;
  align-items: center;
  gap: 40px;
  flex-wrap: wrap;
}
.filter-group { display: flex; align-items: center; gap: 12px; }
.filter-label {
  font-size: 12px;
  color: var(--gray-600);
  white-space: nowrap;
  min-width: 80px;
}
.filter-label strong { color: var(--black); }
.filter-pills { display: flex; gap: 6px; flex-wrap: wrap; }
.pill {
  padding: 5px 14px;
  border-radius: 100px;
  border: 1px solid var(--gray-200);
  background: white;
  font-family: var(--font-body);
  font-size: 12px;
  color: var(--gray-600);
  cursor: pointer;
  transition: all var(--transition);
}
.pill:hover { border-color: var(--black); color: var(--black); }
.pill-active { border-color: var(--black) !important; background: var(--black) !important; color: white !important; }
.price-range {
  -webkit-appearance: none;
  width: 180px;
  height: 3px;
  background: var(--gray-200);
  border-radius: 2px;
  outline: none;
  cursor: pointer;
}
.price-range::-webkit-slider-thumb {
  -webkit-appearance: none;
  width: 18px;
  height: 18px;
  border-radius: 50%;
  background: var(--black);
  border: 3px solid white;
  box-shadow: 0 0 0 1px var(--gray-200);
  cursor: pointer;
}
.filter-reset-btn {
  border: none;
  background: none;
  font-size: 13px;
  color: var(--blue);
  cursor: pointer;
  margin-left: auto;
}
.filter-reset-btn:hover { text-decoration: underline; }

/* ── MAIN ── */
.store-main {
  max-width: var(--max-w);
  margin: 0 auto;
  padding: 48px var(--px) 80px;
}

/* SKELETON */
.skeleton-wrap {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 24px;
}
.skeleton-card {
  border-radius: var(--radius);
  overflow: hidden;
}
.sk {
  background: linear-gradient(90deg, var(--gray-50) 25%, var(--gray-100) 50%, var(--gray-50) 75%);
  background-size: 200% 100%;
  animation: shimmer 1.6s infinite;
  border-radius: 6px;
  margin-bottom: 12px;
}
.sk-img { height: 240px; border-radius: var(--radius); margin-bottom: 16px; }
.sk-tag { height: 10px; width: 30%; }
.sk-title { height: 16px; width: 85%; }
.sk-price { height: 22px; width: 50%; }
.sk-btn { height: 44px; border-radius: 100px; margin-top: 16px; }
@keyframes shimmer { to { background-position: -200% 0; } }

/* EMPTY */
.empty-state {
  text-align: center;
  padding: 100px 20px;
}
.empty-icon { font-size: 40px; color: var(--gray-200); margin-bottom: 20px; }
.empty-title { font-family: var(--font-display); font-size: 1.8rem; font-weight: 500; margin-bottom: 8px; }
.empty-sub { font-size: 15px; color: var(--gray-400); margin-bottom: 28px; }

/* GRID */
.product-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 28px;
}
.product-grid.list-mode {
  grid-template-columns: 1fr;
  gap: 1px;
  border: 1px solid var(--gray-100);
  border-radius: var(--radius);
  overflow: hidden;
}
.product-grid.list-mode .product-card {
  flex-direction: row;
  border-radius: 0;
  border: none;
  border-bottom: 1px solid var(--gray-100);
  box-shadow: none;
}
.product-grid.list-mode .product-card:last-child { border-bottom: none; }
.product-grid.list-mode .card-media { width: 200px; flex-shrink: 0; }
.product-grid.list-mode .card-body { padding: 24px 28px; display: flex; flex-direction: column; justify-content: center; }

/* CARD */
.product-card {
  display: flex;
  flex-direction: column;
  border-radius: var(--radius);
  border: 1px solid var(--gray-100);
  overflow: hidden;
  background: white;
  animation: cardFadeIn 0.4s ease both;
  transition: border-color var(--transition), transform var(--transition), box-shadow var(--transition);
}
@keyframes cardFadeIn { from { opacity:0; transform: translateY(10px); } to { opacity:1; transform:none; } }
.product-card:hover {
  border-color: var(--gray-200);
  transform: translateY(-3px);
  box-shadow: var(--shadow-lg);
}
.product-card.card-added {
  border-color: var(--green) !important;
}

/* CARD MEDIA */
.card-media {
  position: relative;
  height: 240px;
  background: hsl(var(--hue, 220), 12%, 96%);
  display: flex;
  align-items: center;
  justify-content: center;
  overflow: hidden;
}
.card-media-inner {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100%;
}
.card-initials {
  font-family: var(--font-display);
  font-size: 48px;
  font-weight: 500;
  color: hsl(var(--hue, 220), 15%, 75%);
  letter-spacing: -2px;
  user-select: none;
}
.card-badges {
  position: absolute;
  top: 14px;
  left: 14px;
  display: flex;
  flex-direction: column;
  gap: 5px;
}
.badge {
  font-family: var(--font-body);
  font-size: 10px;
  font-weight: 600;
  letter-spacing: 0.5px;
  padding: 3px 9px;
  border-radius: 4px;
  text-transform: uppercase;
}
.badge-new { background: var(--black); color: white; }
.badge-sale { background: var(--red); color: white; }
.wishlist-btn {
  position: absolute;
  top: 12px;
  right: 12px;
  width: 34px;
  height: 34px;
  border-radius: 50%;
  border: 1px solid var(--gray-200);
  background: rgba(255,255,255,0.85);
  backdrop-filter: blur(8px);
  color: var(--gray-400);
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  opacity: 0;
  transition: all var(--transition);
}
.product-card:hover .wishlist-btn { opacity: 1; }
.wishlist-btn.wished {
  opacity: 1;
  color: var(--red);
  border-color: var(--red);
  background: rgba(255,255,255,0.95);
}
.wishlist-btn:hover { border-color: var(--gray-400); color: var(--gray-800); }

/* CARD BODY */
.card-body {
  padding: 20px;
  display: flex;
  flex-direction: column;
  gap: 12px;
  flex: 1;
}
.card-meta {
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.card-brand {
  font-size: 10px;
  font-weight: 600;
  letter-spacing: 2px;
  text-transform: uppercase;
  color: var(--gray-400);
}
.card-stars { display: flex; align-items: center; gap: 2px; }
.star { font-size: 12px; }
.star-on { color: #f5a623; }
.star-off { color: var(--gray-200); }
.card-reviews {
  font-size: 11px;
  color: var(--gray-400);
  margin-left: 5px;
}
.card-title {
  font-family: var(--font-display);
  font-size: 16px;
  font-weight: 500;
  color: var(--black);
  line-height: 1.4;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;
}
.card-pricing {
  display: flex;
  justify-content: space-between;
  align-items: flex-end;
  gap: 10px;
}
.card-prices { display: flex; flex-direction: column; gap: 2px; }
.price-original {
  font-size: 12px;
  color: var(--gray-400);
  text-decoration: line-through;
}
.price-current {
  font-family: var(--font-display);
  font-size: 22px;
  font-weight: 600;
  color: var(--black);
  letter-spacing: -0.5px;
}
.price-monthly {
  font-size: 11px;
  color: var(--gray-400);
  text-align: right;
  line-height: 1.4;
}
.card-perks {
  display: flex;
  gap: 8px;
  flex-wrap: wrap;
}
.perk {
  font-size: 11px;
  color: var(--gray-600);
  background: var(--gray-50);
  border: 1px solid var(--gray-100);
  padding: 3px 9px;
  border-radius: 100px;
}
.btn-add {
  width: 100%;
  padding: 12px 20px;
  border-radius: 100px;
  border: none;
  background: var(--black);
  color: white;
  font-family: var(--font-body);
  font-size: 13px;
  font-weight: 500;
  cursor: pointer;
  transition: all var(--transition);
  margin-top: auto;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 8px;
  letter-spacing: 0.2px;
}
.btn-add:hover { background: #333; transform: translateY(-1px); }
.btn-add-done { background: var(--green) !important; }
.btn-add:disabled { cursor: default; }

/* LOAD MORE */
.load-more-area {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 14px;
  padding: 64px 0 0;
}
.load-progress {
  width: 280px;
  height: 2px;
  background: var(--gray-100);
  border-radius: 2px;
  overflow: hidden;
}
.load-bar {
  height: 100%;
  background: var(--black);
  border-radius: 2px;
  transition: width 0.6s ease;
}
.load-label {
  font-size: 12px;
  color: var(--gray-400);
  letter-spacing: 0.3px;
}
.btn-load {
  padding: 12px 32px;
  border-radius: 100px;
  border: 1px solid var(--gray-200);
  background: transparent;
  font-family: var(--font-body);
  font-size: 14px;
  font-weight: 400;
  color: var(--black);
  cursor: pointer;
  transition: all var(--transition);
}
.btn-load:hover { background: var(--black); color: white; border-color: var(--black); }

/* ── BUTTONS ── */
.btn-primary {
  padding: 14px 28px;
  border-radius: 100px;
  border: none;
  background: var(--blue);
  color: white;
  font-family: var(--font-body);
  font-size: 14px;
  font-weight: 500;
  cursor: pointer;
  transition: all var(--transition);
}
.btn-primary:hover { background: var(--blue-hover); transform: translateY(-1px); }
.btn-primary.full { width: 100%; }
.btn-ghost {
  padding: 12px 28px;
  border-radius: 100px;
  border: 1px solid var(--gray-200);
  background: transparent;
  color: var(--black);
  font-family: var(--font-body);
  font-size: 13px;
  cursor: pointer;
  transition: all var(--transition);
}
.btn-ghost:hover { background: var(--gray-50); }
.btn-ghost.full { width: 100%; }
.btn-outline {
  padding: 10px 24px;
  border-radius: 100px;
  border: 1px solid var(--gray-200);
  background: transparent;
  color: var(--black);
  font-family: var(--font-body);
  font-size: 13px;
  cursor: pointer;
  transition: all var(--transition);
  display: inline-block;
}
.btn-outline:hover { border-color: var(--black); }

/* ── CART DRAWER ── */
.drawer-backdrop {
  position: fixed;
  inset: 0;
  background: rgba(0,0,0,0.25);
  backdrop-filter: blur(2px);
  z-index: 200;
  opacity: 0;
  pointer-events: none;
  transition: opacity 0.3s ease;
}
.drawer-backdrop.active { opacity: 1; pointer-events: all; }
.cart-drawer {
  position: fixed;
  top: 0; right: 0; bottom: 0;
  width: 400px;
  background: white;
  border-left: 1px solid var(--gray-100);
  z-index: 201;
  display: flex;
  flex-direction: column;
  transform: translateX(100%);
  transition: transform 0.35s cubic-bezier(0.4, 0, 0.2, 1);
}
.cart-drawer.open { transform: none; }
.drawer-head {
  padding: 28px 28px 20px;
  border-bottom: 1px solid var(--gray-100);
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
}
.drawer-eyebrow {
  font-size: 10px;
  font-weight: 600;
  letter-spacing: 2.5px;
  text-transform: uppercase;
  color: var(--gray-400);
  margin-bottom: 4px;
}
.drawer-count {
  font-family: var(--font-display);
  font-size: 22px;
  font-weight: 500;
  color: var(--black);
  letter-spacing: -0.5px;
}
.drawer-close {
  width: 32px; height: 32px;
  border: none;
  border-radius: 50%;
  background: var(--gray-50);
  color: var(--gray-600);
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: background var(--transition);
  flex-shrink: 0;
}
.drawer-close:hover { background: var(--gray-100); }
.drawer-body {
  flex: 1;
  overflow-y: auto;
  display: flex;
  flex-direction: column;
}
.drawer-empty {
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 40px;
  text-align: center;
  gap: 12px;
}
.drawer-empty-icon {
  width: 64px; height: 64px;
  border-radius: 50%;
  background: var(--gray-50);
  display: flex;
  align-items: center;
  justify-content: center;
  color: var(--gray-400);
  margin-bottom: 8px;
}
.drawer-empty-title {
  font-family: var(--font-display);
  font-size: 18px;
  font-weight: 500;
  color: var(--black);
}
.drawer-empty-sub { font-size: 13px; color: var(--gray-400); margin-bottom: 8px; }
.drawer-list {
  list-style: none;
  padding: 20px 24px;
  display: flex;
  flex-direction: column;
  gap: 12px;
  flex: 1;
}
.drawer-item {
  display: flex;
  align-items: center;
  gap: 14px;
  padding: 16px;
  background: var(--gray-50);
  border-radius: var(--radius-sm);
  border: 1px solid var(--gray-100);
}
.drawer-item-thumb {
  width: 48px; height: 48px;
  border-radius: 8px;
  background: var(--gray-200);
  display: flex;
  align-items: center;
  justify-content: center;
  font-family: var(--font-display);
  font-size: 13px;
  font-weight: 600;
  color: var(--gray-600);
  flex-shrink: 0;
}
.drawer-item-body { flex: 1; min-width: 0; display: flex; flex-direction: column; gap: 4px; }
.drawer-item-name { font-size: 13px; font-weight: 500; color: var(--black); overflow: hidden; white-space: nowrap; text-overflow: ellipsis; }
.drawer-item-price { font-size: 13px; color: var(--blue); font-weight: 500; }
.qty-control {
  display: flex;
  align-items: center;
  gap: 10px;
  margin-top: 4px;
}
.qty-btn {
  width: 24px; height: 24px;
  border-radius: 50%;
  border: 1px solid var(--gray-200);
  background: white;
  color: var(--gray-800);
  font-size: 14px;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: all var(--transition);
  line-height: 1;
}
.qty-btn:hover { border-color: var(--black); }
.qty-num { font-size: 14px; font-weight: 500; min-width: 18px; text-align: center; }
.drawer-remove {
  border: none;
  background: none;
  color: var(--gray-400);
  cursor: pointer;
  padding: 4px;
  transition: color var(--transition);
  flex-shrink: 0;
}
.drawer-remove:hover { color: var(--red); }
.drawer-summary {
  padding: 20px 24px 28px;
  border-top: 1px solid var(--gray-100);
  display: flex;
  flex-direction: column;
  gap: 10px;
  background: white;
}
.summary-line {
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-size: 14px;
  color: var(--black);
}
.summary-line.muted span { color: var(--gray-400); }
.summary-line.muted span:last-child { color: var(--green); font-weight: 500; }
.summary-line.total { padding-top: 4px; }
.summary-line.total span { font-family: var(--font-display); font-size: 20px; font-weight: 600; }
.summary-divider { height: 1px; background: var(--gray-100); margin: 2px 0; }

/* ── FOOTER ── */
.store-footer {
  border-top: 1px solid var(--gray-100);
  background: var(--off-white);
}
.footer-inner {
  max-width: var(--max-w);
  margin: 0 auto;
  padding: 32px var(--px);
  display: flex;
  align-items: center;
  gap: 32px;
}
.footer-logo {
  font-family: var(--font-display);
  font-size: 16px;
  font-weight: 600;
  color: var(--black);
}
.footer-links {
  display: flex;
  gap: 24px;
}
.footer-link {
  font-size: 13px;
  color: var(--gray-400);
  text-decoration: none;
  transition: color var(--transition);
}
.footer-link:hover { color: var(--black); }
.footer-copy {
  margin-left: auto;
  font-size: 12px;
  color: var(--gray-400);
}

/* ── RESPONSIVE ── */
@media (max-width: 1024px) {
  .product-grid { grid-template-columns: repeat(2, 1fr); }
  .skeleton-wrap { grid-template-columns: repeat(2, 1fr); }
  .nav-links { display: none; }
}
@media (max-width: 640px) {
  .product-grid { grid-template-columns: 1fr; gap: 16px; }
  .skeleton-wrap { grid-template-columns: 1fr; }
  .toolbar-inner { flex-wrap: wrap; }
  .search-box { max-width: 100%; order: -1; width: 100%; flex-basis: 100%; }
  .cart-drawer { width: 100vw; }
  .footer-inner { flex-direction: column; text-align: center; gap: 16px; }
  .footer-copy { margin-left: 0; }
  .product-grid.list-mode .card-media { width: 120px; height: 120px; }
  .hero-title { letter-spacing: -1px; }
  .nav-links { display: none; }
}
`;

export default Productos;