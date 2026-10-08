export function Listado({lista, onChangeCambioDeEstado, onClickEliminar}) {
    return(
        <ul className="shopping-list">
          {lista.length > 0
            ? lista.map((producto) => {
                return (
                  <li
                    className={`shopping-item ${producto.estado == 1 ? "is-purchased" : ""}`}
                    key={producto.id}
                  >
                    <label className="product-label">
                      <input
                        type="checkbox"
                        checked={producto.estado == 1 ? "defaultChecked" : ""}
                        onChange={(evento) => {
                          onChangeCambioDeEstado(
                            producto.id,
                            evento.target.checked,
                          );
                        }}
                      />
                      <span className="product-name">{producto.nombre}</span>
                    </label>

                    <button
                      className="delete-button"
                      type="button"
                      aria-label={`Eliminar ${producto.nombre}`}
                      onClick={() => {
                        onClickEliminar(producto.id);
                      }}
                    >
                      Eliminar
                    </button>
                  </li>
                );
              })
            : "Agrega productos a la lista"}
        </ul>
    )
}