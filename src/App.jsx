import "./App.css";
import ListaCancionesPreferidas from "./components/ListaCancionesPreferidas/ListaCancionesPreferidas";
import Analitica from "./components/analitica/Analitica";
import ContactForm from "./components/ContactForm/ContactForm";

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
