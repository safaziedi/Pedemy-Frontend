import "./sidebar.css";
import {
  LineStyle,

   MenuBook ,
  MailOutline,
  DynamicFeed,
  
} from "@material-ui/icons";
import { Link } from "react-router-dom";

export default function Sidebar() {
  return (
    <div className="sidebar">
      <div className="sidebarWrapper">
        <div className="sidebarMenu">
          <h3 className="sidebarTitle">Dashboard</h3>
          <ul className="sidebarList">
            <Link to="/dashboard/home" className="link">
            <li className="sidebarListItem active">
              <LineStyle className="sidebarIcon" />
              Home
            </li>
            </Link>
          
          </ul>
        </div>
        <div className="sidebarMenu">
          <h3 className="sidebarTitle">Quick Menu</h3>
          <ul className="sidebarList">
            <Link to="/mescoures" className="link">
              <li className="sidebarListItem">
                < MenuBook  className="sidebarIcon" />
                courses
              </li>
            </Link>

          </ul>
        </div>
        <div className="sidebarMenu">
          <h3 className="sidebarTitle">Notifications</h3>
          <ul className="sidebarList">
          <Link to="/contact" className="link">
            <li className="sidebarListItem">
              <MailOutline className="sidebarIcon" />
              contact us
            </li>
            </Link>
            <li className="sidebarListItem">
              <DynamicFeed className="sidebarIcon" />
              Feedback
            </li>
            
          </ul>
        </div>
      </div>
    </div>
  );
}