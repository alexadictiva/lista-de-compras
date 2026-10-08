import { useState } from "react";

function App() {
  const [textoInput, setTextoInput] = useState("");
  const [listaDeProductos, setListaDeProductos] = useState([]);
  const [contadorDeProductos, setContadorDeProductos] = useState(0);

  function onChangeQueActualizaElBorrador(evento) {
    setTextoInput(evento.target.value);
  }

  function setearElNuevoProducto(evento) {
    evento.preventDefault();
    
    //validar q no agregue un producto vacio
    if(textoInput == ''){
      alert("No puedes ingresar un producto vacio")
      return
    }
        
    //esto es para agregar un producto nuevo
    const nuevoProducto = {
      id: crypto.randomUUID(),
      nombre: textoInput,
      estado: 0,
    };

    setListaDeProductos([...listaDeProductos, nuevoProducto]);
    setContadorDeProductos(listaDeProductos.length + 1);
    setTextoInput("");
  }

  function cambioEstadoDelProductoSeleccionado(id, marcado) {
    //aqui si corresponde usar map porq es conservar la lista y cambiar un producto dentro de ella
    const lista = listaDeProductos.map((producto) => {
      if (producto.id == id) { //y q se ejecute cuando coincida con lo q quiero
        return {
          ...producto, //y dvuelvo una copia
          estado: marcado ? 1 : 0, //con el vamor cambiando
        };
      }

      //y si no coincide entonces q me de el resto como estaba
      return producto;
    });

    setListaDeProductos(lista);
  }

  function eliminarProducto(id) {

    //Dame los productos cuyo id sea distinto del que quiero eliminar
    const listaSinElProducto = listaDeProductos.filter((producto)=>{
      return producto.id != id
    })

    setListaDeProductos(listaSinElProducto)
    setContadorDeProductos(listaDeProductos.length -1);
  }

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

        <form className="add-form" onSubmit={setearElNuevoProducto}>
          <label htmlFor="product-name">¿Qué hace falta?</label>

          <div className="input-group">
            <input
              id="product-name"
              name="producto"
              type="text"
              placeholder="Ej. Tomates"
              maxLength={60}
              autoComplete="off"
              value={textoInput}
              onChange={onChangeQueActualizaElBorrador}
            />
            <button className="add-button" type="submit">
              <span aria-hidden="true">+</span>
              Agregar
            </button>
          </div>
        </form>

        <div className="list-summary">
          <h2>Productos</h2>
          <span className="pending-count">{`${contadorDeProductos > 1 ? `${contadorDeProductos} pendientes` : `${contadorDeProductos} pendiente`}`}</span>
        </div>

        <ul className="shopping-list">
          {listaDeProductos.length > 0
            ? listaDeProductos.map((producto) => {
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
                          cambioEstadoDelProductoSeleccionado(producto.id, evento.target.checked);
                        }}
                      />
                      <span className="product-name">{producto.nombre}</span>
                    </label>

                    <button
                      className="delete-button"
                      type="button"
                      aria-label={`Eliminar ${producto.nombre}`}
                      onClick={() => {
                        eliminarProducto(producto.id);
                      }}
                    >
                      Eliminar
                    </button>
                  </li>
                );
              })
            : "Agrega productos a la lista"}
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
