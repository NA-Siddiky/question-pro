// MyComponent.tsx
import React, { useState } from "react";
import ButtonComponent from "../Common/Button/Button";

const MyComponent: React.FC = () => {
  const [activeButton, setActiveButton] = useState<string | null>(null);
  const [count, setCount] = useState(0);
  const handleClick = (buttonId: string) => {
    setActiveButton(buttonId);
    if (buttonId === "countable") {
      setCount(count + 1);
    }
  };

  return (
    <>
      <div>
        <p>Only one button can be active at {count} time.</p>
        {/* Pass the button ID and check if it matches the activeButton state */}
        <ButtonComponent
          onClick={() => handleClick("countable")}
          isClicked={activeButton === "countable"}
        >
          Countable Button
        </ButtonComponent>
        <ButtonComponent
          onClick={() => handleClick("dump")}
          isClicked={activeButton === "dump"}
        >
          Dump Button
        </ButtonComponent>
      </div>
    </>
  );
};

export default MyComponent;
