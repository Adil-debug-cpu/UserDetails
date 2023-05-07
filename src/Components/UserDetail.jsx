import { Link, useLocation } from "react-router-dom";
import { useEffect, useState, useCallback } from "react";

//This is a React component called UserDetail that renders detailed information about a user retrieved from the GitHub API. It imports Link and useLocation from react-router-dom and useEffect and useState from react.

// The component receives props, including the current page number and the user's login id. The login id is used to fetch the detailed user data from the GitHub API via an asynchronous function called fetchDetailData.

// The fetched data is stored in the userData state using the useState hook. The component then renders the user's avatar, name, username, location, follower and following count, and bio using the userData state. It also includes a button that links back to the previous page with the Link component.

// The useEffect hook is used to fetch the detailed user data when the component mounts or when the login or fetchDetailData dependencies change. The useCallback hook is used to memoize the fetchDetailData function and prevent unnecessary re-renders

function UserDetail(props) {
  const { currentPage } = props;
  const location = useLocation();
  const data = location.state;
  const { login } = data;
  const [userData, setUserData] = useState([]);

  const fetchDetailData = useCallback(async () => {
    const detailRes = await fetch(`https://api.github.com/users/${login}`);
    const detailData = await detailRes.json();
    setUserData(detailData);
  }, [login]);

  useEffect(() => {
    try {
      fetchDetailData();
    } catch (err) {
      console.error(err);
    }
  }, [login, fetchDetailData]);

  return (
    <div className="detail-container">
      <div className="image-container">
        <img
          src={userData.avatar_url}
          height="300px"
          width="300px"
          alt="Avatar"
        />
      </div>
      <div className="subcontainer">
        <div>Name: {userData.name}</div>
        <div>Username: {userData.login}</div>
        <div>Location: {userData.location}</div>
        <div>Follower Count: {userData.followers}</div>
        <div>Following Count: {userData.following}</div>
        <div>Bio:</div>
        <div className="bio">{userData.bio}</div>
      </div>
      <Link to="/">
        <button>Back to Page {currentPage}</button>
      </Link>
    </div>
  );
}

export default UserDetail;
