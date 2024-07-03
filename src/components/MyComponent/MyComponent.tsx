// file: src/components/MyComponent/MyComponent.tsx

import React, { useState } from "react";
import ButtonComponent from "../Common/Button/Button";

const MyComponent: React.FC = () => {
  const [count, setCount] = useState(0);

  const handleClick = () => {
    setCount(count + 1);
  };

  return (
    <>
      <h2>Welcome to My Component Page </h2>
      <div>
        <h1>Simple Click Counter {count}</h1>
        <ButtonComponent onClick={handleClick}>
          Countable Button
        </ButtonComponent>
        <ButtonComponent>Dump Button</ButtonComponent>
      </div>
    </>
  );
};

export default MyComponent;
