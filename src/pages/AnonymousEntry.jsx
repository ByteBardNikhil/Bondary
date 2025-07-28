import { useNavigate } from "react-router-dom";

function AnonymousEntry() {
  const navigate = useNavigate();

  return (
    <div className="anon-entry">
      <h2>Start Chatting Anonymously</h2>
      <p>No sign-up required. Just tap and go!</p>
      <button onClick={() => navigate("/anonymous")}>Start Chat</button>
    </div>
  );
}

export default AnonymousEntry;
