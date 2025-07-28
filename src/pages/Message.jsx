import { useNavigate } from "react-router-dom";

const friends = [
  { id: 1, name: "Aditi", lastMessage: "Hey! 😊" },
  { id: 2, name: "Rohan", lastMessage: "See you soon!" },
  { id: 3, name: "Zara", lastMessage: "What's new?" },
];

export default function Message() {
  const navigate = useNavigate();

  return (
    <div style={{ padding: "1rem" }}>
      <h2>Messages</h2>
      <ul style={{ listStyle: "none", padding: 0 }}>
        {friends.map((friend) => (
          <li
            key={friend.id}
            onClick={() => navigate(`/chat/${friend.id}`)}
            style={{
              padding: "10px",
              borderBottom: "1px solid #ccc",
              cursor: "pointer",
            }}
          >
            <strong>{friend.name}</strong>
            <p style={{ margin: 0, color: "#666" }}>{friend.lastMessage}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}
