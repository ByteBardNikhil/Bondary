import { useState } from "react";
import { useNavigate } from "react-router-dom";

function Register() {
  const navigate = useNavigate();
  const [name, setName] = useState("");
  const [gender, setGender] = useState("");
  const [email, setEmail] = useState("");

  const handleSubmit = () => {
    const tempDomains = ["tempmail", "10minutemail", "mailinator", "yopmail"];
    const emailDomain = email.split("@")[1]?.toLowerCase() || "";

    const isTemp = tempDomains.some((domain) => emailDomain.includes(domain));

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!name.trim() || !gender || !email.trim()) {
      alert("Please fill all fields");
    } else if (!emailRegex.test(email)) {
      alert("Invalid email format");
    } else if (isTemp) {
      alert("Temporary email addresses are not allowed");
    } else {
      localStorage.setItem(
        "bondary_user",
        JSON.stringify({ name, gender, email })
      );
      navigate("/chat");
    }
  };

  return (
    <div className="register-page">
      <h2>Register</h2>

      <input
        type="text"
        placeholder="Your Name"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />

      <input
        className="emailCSS"
        type="email"
        placeholder="Email Address"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />

      <div className="gender-select">
        <label>
          <input
            type="radio"
            name="gender"
            value="male"
            onChange={() => setGender("male")}
          />
          &nbsp;Male
        </label>
        <label>
          <input
            type="radio"
            name="gender"
            value="female"
            onChange={() => setGender("female")}
          />
          &nbsp; Female
        </label>
      </div>

      <button onClick={handleSubmit}>Continue</button>
    </div>
  );
}

export default Register;
