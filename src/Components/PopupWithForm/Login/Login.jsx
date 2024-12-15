import { useState } from "react";
import PopupWithForm from "../PopupWithForm";
import { loginAdmin } from "../../../Utils/api";
import { usePopup } from "../../Hooks/PopupHook";
import "./Login.css";

function Login() {
  const { close } = usePopup();

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const { token } = await loginAdmin(username, password);
      localStorage.setItem("token", token);
      // Redirect or perform any other action after successful login
      close();
    } catch (error) {
      setError("Invalid credentials. Please try again.");
    }
  };

  return (
    <div>
      <PopupWithForm
        popupName="login"
        title="Login"
        buttonText="Login"
        onSubmit={handleSubmit}
      >
        <label className="popup__label">
          Username:
          <input
            className="popup__input"
            type="text"
            name="username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
        </label>
        <br />
        <label className="popup__label">
          Password:
          <input
            className="popup__input"
            type="password"
            name="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </label>
        <br />
        {error && <p className="error">{error}</p>}
      </PopupWithForm>
    </div>
  );
}

export default Login;
