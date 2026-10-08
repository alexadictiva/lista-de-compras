function App() {
  return (
    <main className="shopping-app">
      <header className="app-header">
        <a className="brand" href="#" aria-label="Mercadito, inicio">
          mercadito<span>.</span>
        </a>
        <span className="header-caption">LO QUE FALTA EN CASA</span>
      </header>

      <section className="shopping-panel" aria-labelledby="shopping-title">
        <header className="list-header">
          <div>
            <p className="eyebrow">MI LISTA</p>
            <h1 id="shopping-title">La próxima compra.</h1>
            <p className="list-description">
              Anota lo que necesitas y márcalo cuando lo tengas.
            </p>
          </div>

          <span className="basket-icon" aria-hidden="true">
            🧺
          </span>
        </header>

        <form className="add-form">
          <label htmlFor="product-name">¿Qué hace falta?</label>

          <div className="input-group">
            <input
              id="product-name"
              name="producto"
              type="text"
              placeholder="Ej. Tomates"
              maxLength={60}
              autoComplete="off"
            />
            <button className="add-button" type="submit">
              <span aria-hidden="true">+</span>
              Agregar
            </button>
          </div>
        </form>

        <div className="list-summary">
          <h2>Productos</h2>
          <span className="pending-count">2 pendientes</span>
        </div>

        <ul className="shopping-list">
          <li className="shopping-item">
            <label className="product-label">
              <input type="checkbox" />
              <span className="product-name">Tomates</span>
            </label>

            <button
              className="delete-button"
              type="button"
              aria-label="Eliminar Tomates"
            >
              Eliminar
            </button>
          </li>

          <li className="shopping-item">
            <label className="product-label">
              <input type="checkbox" />
              <span className="product-name">Pan integral</span>
            </label>

            <button
              className="delete-button"
              type="button"
              aria-label="Eliminar Pan integral"
            >
              Eliminar
            </button>
          </li>

          <li className="shopping-item is-purchased">
            <label className="product-label">
              <input type="checkbox" defaultChecked />
              <span className="product-name">Café</span>
            </label>

            <button
              className="delete-button"
              type="button"
              aria-label="Eliminar Café"
            >
              Eliminar
            </button>
          </li>
        </ul>

        <footer className="list-footer">
          <span className="footer-dot" aria-hidden="true" />
          Marca cada producto cuando lo pongas en la cesta.
        </footer>
      </section>

      <p className="page-footer">Menos vueltas. Todo en tu lista.</p>
    </main>
  );
}

export default App;