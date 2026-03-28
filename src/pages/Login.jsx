import { useState, useContext} from "react";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
import { UserContext } from "../context/UserContext";
import "./Login.css";

function Login() {
  const [username, setUsername] = useState("");
  const { login } = useContext(UserContext);
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();

    if (username.length < 3) {
      toast.error("Username must be at least 3 characters");
      return;
    }

    if (!/^[a-zA-Z0-9]+$/.test(username)) {
      toast.error("Username must be alphanumeric");
      return;
    }

    // ✅ call context login
    login(username);

    toast.success("Login Successful!");

    // ✅ redirect after 1 second
    setTimeout(() => {
      navigate("/");
    }, 1000);
  };

  return (
   <div className="login-container">
    <form onSubmit={handleLogin} className="login-form">
      <h2>Login</h2>
      <input
        type="text"
        placeholder="Enter username"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
      />
      <button type="submit">Login</button>
    </form>
  </div>
  );
}

export default Login;