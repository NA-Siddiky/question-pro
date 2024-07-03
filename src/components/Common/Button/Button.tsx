// ButtonComponent.tsx
import React from "react";

interface ButtonComponentProps {
  onClick?: () => void;
  children?: string;
}

// ButtonComponent.tsx
const ButtonComponent: React.FC<ButtonComponentProps> = ({
  children,
  ...props
}) => {
  return (
    <button
      {...props}
      style={{ padding: "10px", margin: "5px", cursor: "pointer" }}
    >
      {children}
    </button>
  );
};

export default ButtonComponent;
