import React from "react";
import { useUser } from "../../utils/hook/useUser";

const Profile: React.FC = () => {
  const { user, setUser } = useUser();

  // console.log("user", user);

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setUser({ ...user, [event.target.name]: event.target.value });
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
          name="name"
          value={user.name}
          onChange={handleChange}
          placeholder="Enter name"
          autoComplete="off"
        />
      </div>
      <div className="mb-3">
        <label htmlFor="email" className="form-label">
          Email address
        </label>
        <input
          name="email"
          type="email"
          className="form-control"
          id="email"
          value={user?.email}
          onChange={handleChange}
          placeholder="example@email.com"
          autoComplete="off"
        />
      </div>
    </form>
  );
};

export default Profile;
