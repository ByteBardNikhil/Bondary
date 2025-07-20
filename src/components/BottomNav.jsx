import { useNavigate, useLocation } from "react-router-dom";
import homelogo from "../assets/images/home.svg";
import chatlogo from "../assets/images/chat.svg";
import profilelogo from "../assets/images/profile.svg";

function BottomNav() {
  const navigate = useNavigate();
  const location = useLocation();

  const isActive = (path) => location.pathname === path;

  return (
    <nav className="bottom-nav">
      <button
        className={isActive("/") ? "active" : ""}
        onClick={() => navigate("/")}
      >
        <img className="logo" src={homelogo} alt="Home" />
      </button>
      <button
        className={isActive("/chat") ? "active" : ""}
        onClick={() => navigate("/chat")}
      >
        <img className="logo" src={chatlogo} alt="Chat" />
      </button>
      <button
        className={isActive("/profile") ? "active" : ""}
        onClick={() => navigate("/profile")}
      >
        <img className="logo" src={profilelogo} alt="Profile" />
      </button>
    </nav>
  );
}

export default BottomNav;
