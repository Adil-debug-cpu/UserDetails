import React from "react";
import UserCard from "./UserCard";
function Landing(props) {
  const { data } = props;

  // Renders
  return (
    <>
      <ul>
        {data.map((user) => (
          <UserCard
            userId={user.id}
            avatar={user.avatar_url}
            login={user.login}
            contributions={user.contributions}
            key={user.id}
          />
        ))}
      </ul>
    </>
  );
}

export default Landing;
