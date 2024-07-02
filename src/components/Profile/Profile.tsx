import React, { useState } from "react";
import { useUser } from "../../utils/hook/useUser";

const Profile: React.FC = () => {
  const { name, email, setUser } = useUser();
  const [localName, setLocalName] = useState(name || "");
  const [localEmail, setLocalEmail] = useState(email || "");

  const handleNameChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const newName = event.target.value;
    setLocalName(newName);
    setUser({ name: newName, email });
  };

  const handleEmailChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const newEmail = event.target.value;
    setLocalEmail(newEmail);
    setUser({ name, email: newEmail });
  };

  return (
    <form autoComplete="off">
      <div className="mb-3">
        <label htmlFor="name" className="form-label">
          Name
        </label>
        <input
          type="text"
          className="form-control"
          id="name"
          value={localName}
          onChange={handleNameChange}
          placeholder="Enter name"
          autoComplete="off"
        />
      </div>
      <div className="mb-3">
        <label htmlFor="email" className="form-label">
          Email address
        </label>
        <input
          type="email"
          className="form-control"
          id="email"
          value={localEmail}
          onChange={handleEmailChange}
          placeholder="example@email.com"
          autoComplete="off"
        />
      </div>
    </form>
  );
};

export default Profile;
