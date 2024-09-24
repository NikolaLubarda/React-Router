import { Outlet } from "react-router-dom";
import "./App.css";
import NavBarComponent from "./Components/NavBarComponent";
import axios from "axios";

axios.defaults.baseURL = "https://dummyjson.com";

function App() {
  return (
    <>
      <div>
        <NavBarComponent />
      </div>
      <Outlet />
    </>
  );
}

export default App;
