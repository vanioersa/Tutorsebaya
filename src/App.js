import { BrowserRouter, Route, Switch } from "react-router-dom/cjs/react-router-dom.min";
import './App.css';
import Navbar from './components/navbar';
import Detail from "./page/detail";
import List from './page/list';
import About from './page/about';
import Data from './page/list'
import Daftar from './page/tugas2';
import Tambah from './crud/tambah';
import EditProduct from "./crud/editproduk";
import Edit from "./crud/edit";
import Login from './auth/login';
import Register from './auth/register'
import ProductDetail from './page/ProductDetail';
import Map from "./page/tugas1"
function App() {
  return (
    <div className="App">
      <Navbar />  
      <BrowserRouter>
        <main>
          <Switch>
            <Route path="/" component={Map} exact />
            <Route path="/data" component={Data} exact />
            <Route path="/login" component={Login} exact />
            <Route path="/register" component={Register} exact />
            <Route path="/List" component={List} exact />
            <Route path="/Daftar" component={Daftar} exact />
            <Route path="/tambah" component={Tambah} exact />
            <Route path="/edit/:Id_saja" component={Edit} exact />
            <Route path="/EditProduct/:productId" component={EditProduct} exact />
            <Route path="/About" component={About} exact />
            <Route path="/detail/:Id" component={Detail} />
            <Route path="/detailproduct/:Id" component={ProductDetail} exact />
          </Switch>
        </main>
      </BrowserRouter>
    </div>
  );
}

export default App;