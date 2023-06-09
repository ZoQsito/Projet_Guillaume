import React from "react";
const Field = ({
  name,
  label,
  value,
  onChange,
  placeholder = "",
  type = "text",
}) => (
  <div className="form-group">
    <label htmlFor={name}>{label}</label>&nbsp;
    <input
      value={value}
      onChange={onChange}
      type={type}
      placeholder={placeholder || label}
      name={name}
      id={name}
      className={"form-control"}
    />
  </div>
);

export default Field;
