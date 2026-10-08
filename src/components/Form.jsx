export function Form({onSetearForm, valorDelInput, onActualizarBorrador}) {
    return(
        <form className="add-form" onSubmit={onSetearForm}>
          <label htmlFor="product-name">¿Qué hace falta?</label>

          <div className="input-group">
            <input
              id="product-name"
              name="producto"
              type="text"
              placeholder="Ej. Tomates"
              maxLength={60}
              autoComplete="off"
              value={valorDelInput}
              onChange={onActualizarBorrador}
            />
            <button className="add-button" type="submit">
              <span aria-hidden="true">+</span>
              Agregar
            </button>
          </div>
        </form>
    )
}