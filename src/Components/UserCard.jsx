import React from "react";
import { Link } from "react-router-dom";

function UserCard(props) {
  // Grab relevent data from props to display
  const { userId, avatar, login, contributions } = props;

  // Renders
  return (
    <Link to={`/user-detail/${userId}`} state={props}>
      <li>
        <div className="list-image-container">
          <img src={avatar} alt="Avatar" />
        </div>
        <div className="info-container">
          <div>User: {login}</div>
          <div>Contributions: {contributions}</div>
        </div>
      </li>
    </Link>
  );
}

export default UserCard;
