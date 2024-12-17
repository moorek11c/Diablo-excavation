import PopupWithForm from "../PopupWithForm";
import { loginAdmin } from "../../../Utils/auth";
import { usePopup } from "../../Hooks/usePopup";
import { useAuth } from "../../Contexts/AuthContext";
import useForm from "../../Hooks/useForm";
import TextInput from "../TextInput";
import "./Login.css";

function Login() {
  const { close } = usePopup();
  const { login } = useAuth();

  const { values, errors, handleChange, handleSubmit } = useForm(
    { username: "", password: "" },
    async (values) => {
      try {
        const data = await loginAdmin(values.username, values.password);
        if (data.token) {
          login(data.token);
          close();
        } else {
          throw new Error("Invalid credentials. Please try again.");
        }
      } catch (error) {
        console.error("Error logging in:", error);
        throw { general: error.message };
      }
    }
  );

  return (
    <div>
      <PopupWithForm
        popupName="login"
        title="Login"
        buttonText="Login"
        onSubmit={handleSubmit}
      >
        <TextInput
          label="Username"
          name="username"
          value={values.username}
          onChange={handleChange}
          error={errors.username}
        />
        <TextInput
          label="Password"
          name="password"
          type="password"
          value={values.password}
          onChange={handleChange}
          error={errors.password}
        />
        {errors.general && <p className="form-error">{errors.general}</p>}
      </PopupWithForm>
    </div>
  );
}

export default Login;
