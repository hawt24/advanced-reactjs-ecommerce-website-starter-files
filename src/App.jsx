import { Outlet } from "react-router-dom";
import "./App.css";
import NavItems from "./component/NavItems";

function App() {
  return (
    <>
    <NavItems/>
    <Outlet/>
    </>
  );
}

export default App;
