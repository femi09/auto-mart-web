import React from "react";
import PropTypes from "prop-types";
type InputFieldProps = {
  placeholder: string;
  type: string;
  value: string;
  name: string;
  label: string;
  handleChange: React.ChangeEventHandler<HTMLInputElement>;
};
const InputField = ({
  placeholder,
  type,
  value,
  label,
  name,
  handleChange,
}: InputFieldProps) => {
  return (
    <div>
      <label htmlFor="" className="block font-semibold my-2">
        {label}
      </label>
      <input
        type={type === "password" ? "password" : type}
        required
        placeholder={placeholder}
        name={name}
        onChange={handleChange}
        value={value}
        className="block border-2 px-4 py-2 rounded-lg w-full"
      />
    </div>
  );
};

InputField.propTypes = {
  handleChange: PropTypes.func.isRequired,
  value: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  placeholder: PropTypes.string,
  type: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
};

export default InputField;
