import { useNavigate } from "react-router-dom";

function Home() {
  const navigate = useNavigate();

  return (
    <div className="home">
      <h2>Connect & Chat Freely</h2>
      <p>Bondary lets you bond in a safe, anonymous space.</p>
      <button className="anonymous-btn" onClick={() => navigate("/anonymous")}>
        Try Anonymous Chat
      </button>
      <button className="register-btn" onClick={() => navigate("/register")}>
        Register & Chat
      </button>
    </div>
  );
}

export default Home;
