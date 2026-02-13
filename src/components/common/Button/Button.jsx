import React from "react";
import "./Button.css";

const Button = ({
  children,
  onClick,
  type = "button",
  variant = "primary", // primary, secondary, outline, ghost
  size = "md", // sm, md, lg
  disabled = false,
  isLoading = false,
  fullWidth = false,
  icon: Icon,
  iconPosition = "left",
  className = "",
  ...props
}) => {
  const classNames = [
    "btn",
    `btn-${variant}`,
    `btn-${size}`,
    fullWidth ? "btn-full" : "",
    className,
  ]
    .filter(Boolean)
    .join(" ");

  return (
    <button
      type={type}
      className={classNames}
      onClick={onClick}
      disabled={disabled || isLoading}
      {...props}
    >
      {isLoading && <span className="btn-loader"></span>}
      {!isLoading && Icon && iconPosition === "left" && <Icon size={20} />}
      <span className="btn-content">{children}</span>
      {!isLoading && Icon && iconPosition === "right" && <Icon size={20} />}
    </button>
  );
};

export default Button;
