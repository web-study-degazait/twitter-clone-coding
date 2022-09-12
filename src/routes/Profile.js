import React from "react";
import { authService } from "../fbase";
import { useHistory } from "react-router-dom";

const Profile = () => {
  const history = useHistory();
  const onLogOutClick = () => {
    authService.signOut();
    history.push("/");
  };
  return (
    <>
      <button onClick={onLogOutClick}>Log out</button>
      <div>Profile 페이지입니다</div>;
    </>
  );
};

export default Profile;
