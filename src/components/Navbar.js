import "../styles/Navbar.css";
import logo from "../assets/logo1-removebg-preview.png";
import { useDispatch, useSelector } from "react-redux";
import { selectConnectuser } from "../redux/slices/userSlice";
import {Link} from "react-router-dom"

export default function Navbar() {
  const dispatch = useDispatch();
  const [connectUser, error] = useSelector(selectConnectuser);

  return (
    <nav className="navbar sticky-top navbar-light navbar-expand-md" id="mainnav">
      <div className="container-fluid">
        <a className="navbar-brand" href="#">
          <img id="logo" src={logo} alt="smart delivery" ></img>
          <strong style={{fontSize : 30}}>Smart delivery</strong>
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
        <div className="nav navbar-nav ml-auto">
          <Link className="nav-item nav-link" to="/">
            <strong>Home</strong>
          </Link>

          <Link className="nav-item nav-link" href="#">
            <strong>Services</strong>
          </Link>

          <Link className="nav-item nav-link" href="#">
            <strong>About</strong>
          </Link>

          <Link className="nav-item nav-link" href="#">
            <strong>Contact</strong>
          </Link>

          {connectUser.role === "visiteur" ? (
            <>
              <Link className="nav-item nav-link" to="/login" id="login">
                <u>
                  <i>
                    <strong>Login</strong>
                  </i>
                </u>
              </Link>

              <Link className="nav-item nav-link" to="/register" id="signup">
                <u>
                  <i>
                    <strong>Sign up</strong>
                  </i>
                </u>
              </Link>
            </>
          ) : (
            <></>
          )}
          {connectUser.role === "user" || connectUser.role === "admin" ? (
            <a className="nav-link" href="#" id="logout">
              <u>
                <i>
                  <strong>Logout</strong>
                </i>
              </u>
            </a>
          ) : (
            <></>
          )}
          </div>
        </div>
      </div>
    </nav>
  );
}
