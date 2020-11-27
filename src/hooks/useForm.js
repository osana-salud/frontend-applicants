import { useState } from "react";

export const useForm = (initState = {}) => {
  const [formValues, setFormValues] = useState(initState);
  const handleInputChange = ({ target: { name, value } }) => {
    setFormValues((prev) => ({
      ...prev,
      [`${name}`]: value,
    }));
  };
  const resetFormValues = (state) => {
    setFormValues(state);
  };
  return [formValues, handleInputChange, resetFormValues];
};
