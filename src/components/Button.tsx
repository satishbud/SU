import React from "react";

interface ButtonProperties {
  children: React.ReactNode;
  styles?: object;
  onButtonClick: () => void;
}

const buttonStyles = {
  border: "0.1rem solid black",
  borderRadius: "10px",
  padding: "0.4rem 1.3rem",
  fontSize: "1.5rem",
  cursor: "pointer",
};

const Button = ({ children, styles = {}, onButtonClick }: ButtonProperties) => {
  return (
    <div style={{ ...buttonStyles, ...styles }} onClick={onButtonClick}>
      {children}
    </div>
  );
};

export default Button;
