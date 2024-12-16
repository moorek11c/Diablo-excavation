import { useState } from "react";

const useForm = (initialValues, onSubmit) => {
  const [values, setValues] = useState(initialValues);
  const [errors, setErrors] = useState({});

  const handleChange = (event) => {
    const { name, value } = event.target;
    setValues({
      ...values,
      [name]: value,
    });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    setErrors({});
    try {
      await onSubmit(values);
    } catch (error) {
      setErrors(error);
    }

    onSubmit(values, setErrors);
  };

  return { values, handleChange, handleSubmit, errors };
};

export default useForm;
