import { useParams } from "react-router-dom";

const dummyChats = {
  1: {
    name: "Aditi",
    messages: [
      { text: "Hey!", from: "them", time: "10:00" },
      { text: "Hi Aditi!", from: "me", time: "10:01" },
    ],
  },
  2: {
    name: "Rohan",
    messages: [
      { text: "See you at 6", from: "them", time: "9:00" },
      { text: "Sure!", from: "me", time: "9:02" },
    ],
  },
  3: {
    name: "Zara",
    messages: [
      { text: "Long time!", from: "them", time: "8:00" },
      { text: "Yeah! Let’s catch up.", from: "me", time: "8:05" },
    ],
  },
};

export default function Chat() {
  const { id } = useParams();
  const chat = dummyChats[id];

  if (!chat) return <p>Chat not found</p>;

  return (
    <div style={{ padding: "1rem" }}>
      <h2>Chat with {chat.name}</h2>
      <div>
        {chat.messages.map((msg, index) => (
          <div
            key={index}
            style={{
              alignSelf: msg.from === "me" ? "flex-end" : "flex-start",
              background: msg.from === "me" ? "#d1f5d3" : "#f1f0f0",
              padding: "8px",
              margin: "6px 0",
              maxWidth: "60%",
              borderRadius: "8px",
            }}
          >
            {msg.text}
            <div style={{ fontSize: "10px", textAlign: "right" }}>
              {msg.time}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
