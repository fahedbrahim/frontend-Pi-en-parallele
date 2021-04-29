import "../styles/Sidebar.css";
import { NavLink } from "react-router-dom";
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
                <NavLink exact to="/homeuser">
                  <span className="icon">
                    <i className="fa fa-home"></i>
                  </span>
                  <span className="title">Home</span>
                </NavLink >
              </li>
              <li>
                <NavLink to="/homeuser/user/profile">
                  <span className="icon">
                    <i className="fa fa-user"></i>
                  </span>
                  <span className="title">Profile</span>
                </NavLink>
              </li>
              <li>
                <NavLink to="/homeuser/user/company">
                  <span className="icon">
                    <i className="fa fa-building"></i>
                  </span>
                  <span className="title">Company</span>
                </NavLink>
              </li>
              <li>
                <NavLink to="/homeuser/user/delivery">
                  <span className="icon">
                    <i className="fa fa-archive"></i>
                  </span>
                  <span className="title">Delivery</span>
                </NavLink>
              </li>
              <li>
                <NavLink to="/homeuser/user/vehicletour">
                  <span className="icon">
                    <i className="fa fa-map-marker"></i>
                  </span>
                  <span className="title">Vehicle Tour</span>
                </NavLink>
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
                <NavLink exact to="/homeuser">
                  <span className="icon">
                    <i className="fa fa-home"></i>
                  </span>
                  <span className="title">Dashboard</span>
                </NavLink>
              </li>
              <li>
                <NavLink to="/homeuser/admin/profile">
                  <span className="icon">
                    <i className="fa fa-user"></i>
                  </span>
                  <span className="title">Profile</span>
                </NavLink>
              </li>
              <li>
                <NavLink to="/homeuser/admin/users">
                  <span className="icon">
                    <i className="fa fa-users"></i>
                  </span>
                  <span className="title">Users</span>
                </NavLink>
              </li>
              <li>
                <NavLink to="/homeuser/admin/company">
                  <span className="icon">
                    <i className="fa fa-building"></i>
                  </span>
                  <span className="title">Company</span>
                </NavLink>
              </li>
              <li>
                <NavLink to="/homeuser/admin/delivery">
                  <span className="icon">
                    <i className="fa fa-archive"></i>
                  </span>
                  <span className="title">Delivery</span>
                </NavLink>
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
                <NavLink exact to="/homeuser">
                  <span className="icon">
                    <i className="fa fa-home"></i>
                  </span>
                  <span className="title">Home</span>
                </NavLink>
              </li>
              <li>
                <NavLink to="/homeuser/company/profile">
                  <span className="icon">
                    <i className="fa fa-user"></i>
                  </span>
                  <span className="title">Profile</span>
                </NavLink>
              </li>
              <li>
                <NavLink to="/homeuser/company/deliveryman">
                  <span className="icon">
                    <i className="fa fa-users"></i>
                  </span>
                  <span className="title">Delivery_Man</span>
                </NavLink>
              </li>
              <li>
                <NavLink to="/homeuser/company/vehicle">
                  <span className="icon">
                    <i className="fa fa-truck"></i>
                  </span>
                  <span className="title">Vehicle</span>
                </NavLink>
              </li>
              <li>
                <NavLink to="/homeuser/company/delivery">
                  <span className="icon">
                    <i className="fa fa-archive"></i>
                  </span>
                  <span className="title">Delivery</span>
                </NavLink>
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
