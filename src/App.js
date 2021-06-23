import logo from "./logo.svg";
import "./App.css";
import Navbar from "./components/Navbar";
import Home from "./screens/Home";
import Services from "./screens/Services";
import "./assets/css/globalStyle.css";
import { BrowserRouter, Switch, Route } from "react-router-dom"; //npm install react-router-dom

const data = {
  nama: "evan",
  umur: 17,
};

function App() {
  const { nama, umur } = data;

  return (
    <BrowserRouter> {/* BrowserRouter harus membungkus Switch, Route, Link */}
      <Navbar />
      {/* <Home/>
      <Services/> */}
      <Switch> 
        <Route component={Services} path="/services" />
        <Route component={Home} path="/" exact />
        <Route component={Services} path="/about" />
        <Route component={Services} path="*" />
      </Switch>

      {/* <Footer/> */}
      {/* self closing tag */}
    </BrowserRouter>
  );
}

export default App;
