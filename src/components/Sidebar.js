import "../styles/Sidebar.css";
import { Link } from "react-router-dom";
import { selectConnectuser } from "../redux/slices/userSlice";
import { useSelector } from "react-redux";

export default function Sidebar() {
  const [connectUser, error] = useSelector(selectConnectuser);

  return (
    <>
      {connectUser.role === "user" ? (
        <div id="bodysidebar">
          <div className="navigation">
            <ul>
              <li>
                <Link to="/homeuser">
                  <span className="icon">
                    <i className="fa fa-home"></i>
                  </span>
                  <span className="title">Home</span>
                </Link>
              </li>
              <li>
                <a href="#">
                  <span className="icon">
                    <i className="fa fa-user"></i>
                  </span>
                  <span className="title">Profile</span>
                </a>
              </li>
              <li>
                <a href="#">
                  <span className="icon">
                    <i className="fa fa-comment"></i>
                  </span>
                  <span className="title">Messages</span>
                </a>
              </li>
              <li>
                <a href="#">
                  <span className="icon">
                    <i className="fa fa-question"></i>
                  </span>
                  <span className="title">Help</span>
                </a>
              </li>
              <li>
                <a href="#">
                  <span className="icon">
                    <i className="fa fa-cog"></i>
                  </span>
                  <span className="title">Setting</span>
                </a>
              </li>
              <li>
                <a href="#">
                  <span className="icon">
                    <i className="fa fa-lock"></i>
                  </span>
                  <span className="title">Password</span>
                </a>
              </li>
              <li>
                <a href="#">
                  <span className="icon">
                    <i className="fa fa-sign-out"></i>
                  </span>
                  <span className="title">sign out</span>
                </a>
              </li>
            </ul>
          </div>
        </div>
      ) : (
        <></>
      )}
      {connectUser.role === "admin" ? (
        <div id="bodysidebar">
          <div className="navigation">
            <ul>
              <li>
                <Link to="/homeuser">
                  <span className="icon">
                    <i className="fa fa-home"></i>
                  </span>
                  <span className="title">Dashboard</span>
                </Link>
              </li>
              <li>
                <Link to="/homeuser/admin/profile">
                  <span className="icon">
                    <i className="fa fa-user"></i>
                  </span>
                  <span className="title">Profile</span>
                </Link>
              </li>
              <li>
                <Link to="/homeuser/admin/users">
                  <span className="icon">
                    <i className="fa fa-users"></i>
                  </span>
                  <span className="title">Users</span>
                </Link>
              </li>
              <li>
                <Link to="/homeuser/admin/company">
                  <span className="icon">
                    <i className="fa fa-building"></i>
                  </span>
                  <span className="title">Company</span>
                </Link>
              </li>
              <li>
                <Link to="/homeuser/admin/delivery">
                  <span className="icon">
                    <i className="fa fa-archive"></i>
                  </span>
                  <span className="title">Delivery</span>
                </Link>
              </li>
            </ul>
          </div>
        </div>
      ) : (
        <></>
      )}
      {connectUser.role === "company" ? (
        <div id="bodysidebar">
          <div className="navigation">
            <ul>
              <li>
                <Link to="/homeuser">
                  <span className="icon">
                    <i className="fa fa-home"></i>
                  </span>
                  <span className="title">Home</span>
                </Link>
              </li>
              <li>
                <Link to="/homuser/company/profile">
                  <span className="icon">
                    <i className="fa fa-user"></i>
                  </span>
                  <span className="title">Profile</span>
                </Link>
              </li>
              <li>
                <Link to="/homuser/company/deliveryman">
                  <span className="icon">
                    <i className="fa fa-users"></i>
                  </span>
                  <span className="title">Delivery_Man</span>
                </Link>
              </li>
              <li>
                <Link to="/homuser/company/vehicle">
                  <span className="icon">
                    <i className="fa fa-truck"></i>
                  </span>
                  <span className="title">Vehicle</span>
                </Link>
              </li>
              <li>
                <Link to="/homuser/company/delivery">
                  <span className="icon">
                    <i className="fa fa-archive"></i>
                  </span>
                  <span className="title">Delivery</span>
                </Link>
              </li>
            </ul>
          </div>
        </div>
      ) : (
        <></>
      )}
    </>
  );
}
