import logoImg from "./img/FerreteriaLeal.jpg";
import NavBar from "./components/NavBar/NavBar";
import ItemListContainer from "./components/ItemListContainer/ItemListContainer";
import "./app.css";

function App() {
  const stylesH1 = {
    color: "lightblue",
  };
  //Los componentes siempre con mayus Inicial
  // dentro de NavBar importamos y mostramos CartWidget
  
  return (
    <div className="App">
      <header className="App-header">
        <NavBar />
        <h1 style={stylesH1}>Ferreteria Leal</h1>
        <img alt="logo coder" src={logoImg} />
        
        <ItemListContainer prop="Bienvenido a Ferreteria Leal" /> 
      </header>
    </div>
  );
}

export default App;
