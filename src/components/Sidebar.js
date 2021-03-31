import "../styles/Sidebar.css";
import {Link} from "react-router-dom"

export default function Sidebar(){
    return(
        <>
        <div id="bodysidebar">
            <div className="navigation">
                <ul>
                    <li>
                        <Link to="/homeuser">
                            <span className="icon"><i className="fa fa-home"></i></span>
                            <span className="title">Home</span>
                        </Link>
                    </li>
                    <li>
                        <a href="#">
                            <span className="icon"><i className="fa fa-user"></i></span>
                            <span className="title">Profile</span>
                        </a>
                    </li>
                    <li>
                        <a href="#">
                            <span className="icon"><i className="fa fa-comment"></i></span>
                            <span className="title">Messages</span>
                        </a>
                    </li>
                    <li>
                        <a href="#">
                            <span className="icon"><i className="fa fa-question"></i></span>
                            <span className="title">Help</span>
                        </a>
                    </li>
                    <li>
                        <a href="#">
                            <span className="icon"><i className="fa fa-cog"></i></span>
                            <span className="title">Setting</span>
                        </a>
                    </li>
                    <li>
                        <a href="#">
                            <span className="icon"><i className="fa fa-lock"></i></span>
                            <span className="title">Password</span>
                        </a>
                    </li>
                    <li>
                        <a href="#">
                            <span className="icon"><i className="fa fa-sign-out"></i></span>
                            <span className="title">sign out</span>
                        </a>
                    </li>
                </ul>
            </div>
        </div>
        </>
    )
}
