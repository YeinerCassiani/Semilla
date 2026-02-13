import React from "react";
import "./Input.css";

const Input = ({
  label,
  type = "text",
  placeholder,
  value,
  onChange,
  error,
  helper,
  icon: Icon,
  name,
  required = false,
  className = "",
  ...props
}) => {
  const isTextarea = type === "textarea";

  return (
    <div className={`input-group ${className}`}>
      {label && (
        <label className="input-label" htmlFor={name}>
          {label} {required && <span className="text-error">*</span>}
        </label>
      )}
      <div className="input-wrapper">
        {Icon && (
          <div className="input-icon">
            <Icon size={24} />
          </div>
        )}
        {isTextarea ? (
          <textarea
            id={name}
            name={name}
            className={`input-field ${error ? "error" : ""} ${Icon ? "with-icon" : ""}`}
            placeholder={placeholder}
            value={value}
            onChange={onChange}
            required={required}
            {...props}
          />
        ) : (
          <input
            id={name}
            name={name}
            type={type}
            className={`input-field ${error ? "error" : ""} ${Icon ? "with-icon" : ""}`}
            placeholder={placeholder}
            value={value}
            onChange={onChange}
            required={required}
            {...props}
          />
        )}
      </div>
      {error && <span className="input-error">{error}</span>}
      {!error && helper && <span className="input-helper">{helper}</span>}
    </div>
  );
};

export default Input;
