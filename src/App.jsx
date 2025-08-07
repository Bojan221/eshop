import { Outlet } from "react-router-dom"
import { useEffect } from "react"
import HeaderComponent from "./components/HeaderComponent.jsx"  
import NavbarComponent from "./components/NavbarComponent.jsx"
import CategoryComponent from "./components/CategoryComponent.jsx"

function App() {

  return (
    <div>
      <HeaderComponent/>
      <NavbarComponent/>
      <CategoryComponent/>
      <Outlet/>
    </div>
  )
}

export default App
