import { useState } from "react";
import PopupWithForm from "../PopupWithForm";
import { usePopup } from "../../Hooks/usePopup";
import { register } from "../../../Utils/auth";
import TextInput from "../TextInput";
import "./Signup.css";

const Signup = ({ popupName }) => {
  const { close } = usePopup(popupName);
  const [values, setValues] = useState({
    username: "",
    email: "",
    password: "",
  });

  const handleChange = (event) => {
    setValues({
      ...values,
      [event.target.name]: event.target.value,
    });
  };

  const handleSignup = async (event) => {
    event.preventDefault();
    try {
      await register(values);
      close();
    } catch (error) {
      console.error("Error signing up:", error);
    }
  };

  return (
    <PopupWithForm
      buttonText="Sign up"
      title="Sign up"
      popupName="signup"
      onSubmit={handleSignup}
    >
      <TextInput
        label="Username"
        popupName="signup"
        type="text"
        name="username"
        value={values.username}
        onChange={handleChange}
        placeholder="Username"
      />
      <TextInput
        label="Email"
        type="email"
        name="email"
        value={values.email}
        onChange={handleChange}
        placeholder="Email"
      />
      <TextInput
        label="Password"
        type="password"
        name="password"
        value={values.password}
        onChange={handleChange}
        placeholder="Password"
      />
      {/* <TextInput
        label="Confirm Password"
        type="password"
        name="confirmPassword"
        value={values.confirmPassword}
        onChange={handleChange}
        placeholder="Confirm Password"
      /> */}
    </PopupWithForm>
  );
};

export default Signup;
