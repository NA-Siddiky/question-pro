import React from "react";
import { useNavigate } from "react-router-dom";
import { useUser } from "../../utils/hook/useUser";
import "./profile-view.scss";

const ProfileView: React.FC = () => {
  const { user } = useUser();
  const navigate = useNavigate();

  return (
    <div className="profile__view">
      <p onClick={() => navigate("/user")} className="name">
        {user.name || ""}
      </p>
      <p onClick={() => navigate("/user")} className="email">
        {" "}
        {user.email || ""}{" "}
      </p>
    </div>
  );
};

export default ProfileView;
