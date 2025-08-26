import { Outlet } from "react-router-dom";
import axios from "axios";
import HeaderComponent from "./components/HeaderComponent.jsx";
import NavbarComponent from "./components/NavbarComponent.jsx";

axios.defaults.baseURL = "https://dummyjson.com/";

function App() {
  return (
    <div>
      <HeaderComponent />
      <NavbarComponent />

      <Outlet />
    </div>
  );
}

export default App;
