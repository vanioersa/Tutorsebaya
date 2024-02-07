import { BrowserRouter, Route, Switch } from "react-router-dom/cjs/react-router-dom.min";
import './App.css';
import Navbar from './components/navbar';
import List from './page/list';
import About from './page/about';
import Daftar from './page/tugas2';
import ProductDetail from './page/ProductDetail';
import Map from "./page/tugas1"
// import TesJson from "./page/json";
function App() {
  return (
    <div className="App">
      <Navbar />  
      {/* <TesJson />   */}
      <BrowserRouter>
        <main>
          <Switch>
            <Route path="/" component={Map} exact />
            <Route path="/List" component={List} exact />
            <Route path="/Daftar" component={Daftar} exact />
            <Route path="/Daftar" component={Daftar} exact />
            <Route path="/About" component={About} exact />
            <Route path="/detail/:id_product" component={ProductDetail} />
          </Switch>
        </main>
      </BrowserRouter>
    </div>
  );
}

export default App;