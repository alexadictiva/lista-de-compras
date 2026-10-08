import { useState } from "react";
import { Header } from "./components/Header.jsx";
import { HeaderCard } from "./components/HeaderCard.jsx";
import { Form } from "./components/Form.jsx";
import { Listado } from "./components/Listado.jsx";
import { Footer } from "./components/Footer.jsx";

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
    if (textoInput == "") {
      alert("No puedes ingresar un producto vacio");
      return;
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
      if (producto.id == id) {
        //y q se ejecute cuando coincida con lo q quiero
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
    const listaSinElProducto = listaDeProductos.filter((producto) => {
      return producto.id != id;
    });

    setListaDeProductos(listaSinElProducto);
    setContadorDeProductos(listaDeProductos.length - 1);
  }

  return (
    <main className="shopping-app">
      <Header />

      <section className="shopping-panel" aria-labelledby="shopping-title">
        <HeaderCard />

        <Form
          onSetearForm={setearElNuevoProducto}
          valorDelInput={textoInput}
          onActualizarBorrador={onChangeQueActualizaElBorrador}
        />

        <div className="list-summary">
          <h2>Productos</h2>
          <span className="pending-count">{`${contadorDeProductos > 1 ? `${contadorDeProductos} pendientes` : `${contadorDeProductos} pendiente`}`}</span>
        </div>

        <Listado
          lista={listaDeProductos}
          onChangeCambioDeEstado={cambioEstadoDelProductoSeleccionado}
          onClickEliminar={eliminarProducto}
        />

        <Footer />
      </section>

      <p className="page-footer">Menos vueltas. Todo en tu lista.</p>
    </main>
  );
}

export default App;
