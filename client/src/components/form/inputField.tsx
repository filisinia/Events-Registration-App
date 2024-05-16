import { TextField } from "@mui/material";
import { ChangeEvent, useState } from "react";

interface InputFieldProps {
  label: string;
  name: string;
  validator: (_value: string) => string | boolean;
  onChange: (_isValid: boolean) => string | boolean;
}

export default function InputField({ label, name, validator, onChange }: InputFieldProps) {
  const [value, setValue] = useState('');
  const [error, setError] = useState<string | boolean>(false);

  function handleChange (e: ChangeEvent<HTMLInputElement>) {
    const newValue = e.target.value;
    const errorMessage = validator(newValue);
    setValue(newValue);
    setError(errorMessage);
    onChange(!errorMessage);
  }

  return (
    <TextField
      label={label}
      name={name}
      value={value}
      onChange={handleChange}
      error={!!error}
      helperText={error}
    />
  );
};
