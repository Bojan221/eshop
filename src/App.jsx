import { Outlet } from "react-router-dom";
import axios from "axios";
import HeaderComponent from "./components/HeaderComponent.jsx";
import NavbarComponent from "./components/NavbarComponent.jsx";
import CategoryComponent from "./components/CategoryComponent.jsx";

axios.defaults.baseURL = "https://dummyjson.com/";

function App() {
  return (
    <div>
      <HeaderComponent />
      <NavbarComponent />
      <CategoryComponent />
      <Outlet />
    </div>
  );
}

export default App;
