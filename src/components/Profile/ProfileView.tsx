import React from "react";
import { useNavigate } from "react-router-dom";
import { useUser } from "../../utils/hook/useUser";
import "./profile-view.scss";

const ProfileView: React.FC = () => {
  const { name, email } = useUser();
  const navigate = useNavigate();

  return (
    <div className="profile__view">
      <p onClick={() => navigate("/user")} className="name">
        {name || ""}
      </p>
      <p className="email"> {email || ""} </p>
    </div>
  );
};

export default ProfileView;
