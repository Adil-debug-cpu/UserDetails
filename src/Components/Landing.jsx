import React from "react";
import UserCard from "./UserCard";
function Landing(props) {
  const { data } = props;

  // This is a functional React component named Landing. It imports React and a custom UserCard component. The component takes in props as a parameter, and from the props, it destructures data.

//The component then returns a fragment (<> and </>) that contains an unordered list (<ul> and </ul>) that is dynamically populated with data from the data prop. It maps over each user in the data array and creates a new UserCard component for each one, passing in various properties such as userId, avatar, login, and contributions.

//The key prop is also passed to each UserCard component to help React optimize the rendering process.

//Once all the UserCard components have been created, they are added to the unordered list and returned by the Landing component.
  
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
