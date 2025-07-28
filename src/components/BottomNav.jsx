import { useNavigate, useLocation } from "react-router-dom";

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
        <i className="material-icons">home</i>
      </button>

      <button
        className={isActive("/anonymous") ? "active" : ""}
        onClick={() => navigate("/anonymous")}
      >
        <span className="material-symbols-outlined">domino_mask</span>
      </button>

      <button
        className={isActive("/messages") ? "active" : ""}
        onClick={() => navigate("/messages")}
      >
        <i className="material-icons">message</i>
      </button>

      <button
        className={isActive("/profile") ? "active" : ""}
        onClick={() => navigate("/profile")}
      >
        <i className="material-icons">person</i>
      </button>
    </nav>
  );
}

export default BottomNav;
