// ButtonComponent.tsx
import React from "react";
import "./Button.scss";

interface ButtonComponentProps {
  onClick: () => void;
  children?: string;
  isClicked?: boolean; // Prop to indicate if the button has been clicked
}

const ButtonComponent: React.FC<ButtonComponentProps> = ({
  children,
  ...props
}) => {
  // Handle click events
  const handleClick = () => {
    props.onClick(); // Call the passed onClick function
  };

  // Use the isClicked prop to conditionally apply a class
  const buttonClass = props.isClicked ? "clicked" : ""; // Apply 'clicked' class if isClicked is true

  return (
    <button
      {...props}
      className={`button-style ${buttonClass}`} // Combine base class with conditional class
      onClick={handleClick}
    >
      {children}
    </button>
  );
};

export default ButtonComponent;
