import "./style.css";
import logo from "../icon/photo_2024-09-20_21-43-40.jpg";
import { Link, Outlet } from "react-router-dom";
export default function Navbar() {
  return (
    <>
      <main>
        <div className="nav-bgcround">
          <nav>
            <div className="container">
             <Link to='/' > <img src={logo} alt="" style={{ width: "200px" }} /></Link>
              <ul>
                <Link to='/home' ><li>home</li></Link>
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
      <footer>
        
      </footer>
    </>
  );
}
