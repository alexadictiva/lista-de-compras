export function HeaderCard(){
    return(
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
    )
}