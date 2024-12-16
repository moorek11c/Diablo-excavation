import PopupWithForm from "../PopupWithForm";
import { loginAdmin } from "../../../Utils/api";
import { usePopup } from "../../Hooks/PopupHook";
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
      const { token } = await loginAdmin(values.username, values.password);
      if (token) {
        login(token);
        close();
      } else {
        throw { general: "Invalid credentials. Please try again." };
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
