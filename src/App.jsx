import "./App.css";
import ListaCancionesPreferidas from "./components/listacancionespreferidas/listacancionespreferidas";
import Analitica from "./components/analitica/Analitica";

function App() {

  return (
    <>
    <main>
      <ListaCancionesPreferidas />
      <Analitica />
      <ContactForm />
    </main>
    </>
  );
}

export default App;
