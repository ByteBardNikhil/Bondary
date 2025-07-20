import { useState, useEffect } from "react";

function Chat() {
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState("");
  const [user, setUser] = useState(null);

  useEffect(() => {
    const saved = localStorage.getItem("bondary_user");
    if (saved) setUser(JSON.parse(saved));
  }, []);

  const sendMessage = () => {
    if (input.trim()) {
      setMessages([...messages, { text: input, type: "sent", status: "sent" }]);
      setInput("");
    }
  };

  const generatePrompt = () => {
    const prompts = [
      "What's something you'd never do again?",
      "If today was your last day, what would you say?",
    ];
    const random = prompts[Math.floor(Math.random() * prompts.length)];
    setMessages([...messages, { text: random, type: "sent", status: "sent" }]);
  };

  // simulate seen
  useEffect(() => {
    const lastIndex = messages.length - 1;
    if (messages[lastIndex]?.type === "sent") {
      setTimeout(() => {
        setMessages((prev) =>
          prev.map((msg, i) =>
            i === lastIndex ? { ...msg, status: "seen" } : msg
          )
        );
      }, 2000);
    }
  }, [messages]);

  return (
    <div className="chat-page">
      {user && <p>Hello, {user.name} 👋</p>}

      <div className="messages">
        {messages.map((msg, idx) => (
          <div key={idx} className={`message ${msg.type}`}>
            {msg.text}
            {msg.type === "sent" && (
              <span className={`tick ${msg.status}`}></span>
            )}
          </div>
        ))}
      </div>

      <button className="icebreaker-btn" onClick={generatePrompt}>
        ❄️ Icebreaker
      </button>

      <div className="chat-input">
        <input
          type="text"
          value={input}
          placeholder="Type a message..."
          onChange={(e) => setInput(e.target.value)}
          onKeyDown={(e) => e.key === "Enter" && sendMessage()}
        />
        <button onClick={sendMessage}>Send</button>
      </div>
    </div>
  );
}

export default Chat;
