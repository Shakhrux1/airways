import "./style.css";
import logo from "../icon/photo_2024-09-20_21-43-40.jpg";
import { Outlet } from "react-router-dom";
export default function Navbar() {
  return (
    <>
      <main>
        <div className="nav-bgcround">
          <nav>
            <div className="container">
              <img src={logo} alt="" style={{ width: "200px" }} />
              <ul>
                <li>home</li>
                <li>about</li>
                <li>info</li>
                <li>register</li>
                <li>contact</li>
              </ul>
              <button>sent</button>
            </div>
          </nav>
        </div>
      </main>
      <header>
        <Outlet />
      </header>
      <footer></footer>
    </>
  );
}
