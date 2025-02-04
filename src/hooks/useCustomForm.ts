import { ChangeEvent, useState } from "react";

export const useCustomForm = <T extends object>(initialForm: T) => {
  const [formSate, setFormState] = useState(initialForm);

  const onInputChange = ({
    target,
  }: ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = target;
    setFormState({
      ...formSate,
      [name]: value,
    });
  };

  const onResetForm = () => {
    setFormState(initialForm);
  };

  return {
    ...formSate,
    formSate,
    onInputChange,
    onResetForm,
  };
};
