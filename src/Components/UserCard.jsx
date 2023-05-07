import React from "react";
import { Link } from "react-router-dom";

//UserCard

//This is a React functional component that renders a user card. It takes in props such as userId, avatar, login, and contributions to display relevant user data.

//It uses the Link component from react-router-dom to link to a specific user's detail page based on the userId prop.

//The component then returns a list item with an image container and an information container, which displays the user's login and contributions.

function UserCard(props) {
  const { userId, avatar, login, contributions } = props;

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
