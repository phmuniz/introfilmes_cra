import Header from "./components/Header";
import Intro from "./components/Intro";
import Catalog from "./components/Catalog";

function App() {

  return (
    
    <div>

      <Header></Header>

      <div className="container">

        <Intro></Intro>

        <Catalog></Catalog>
      
      </div>

    </div>
  );
}

export default App;
