import { Outlet } from "react-router-dom";
import NavBar from "./NavBar";
import "../App.css";

const Layout = () => {
  return (
    <>
      <NavBar />
      <Outlet />
      <footer>
        <span className="geeks__logo--footer">
          <i>Geeks</i> 2023
        </span>
      </footer>
    </>
  );
};

export default Layout;
