import { Link, useLocation } from "react-router-dom";
import { useEffect, useState, useCallback } from "react";

function UserDetail(props) {
  // Grab data from state in Link. Store data in 'userData'. Grab 'currentPage' from props for button.
  const { currentPage } = props;
  const location = useLocation();
  const data = location.state;
  const { login } = data;
  const [userData, setUserData] = useState([]);

  // Async function to fetch detailed data on user with login id via github api and then sets user data for detail view
  const fetchDetailData = useCallback(async () => {
    const detailRes = await fetch(`https://api.github.com/users/${login}`);
    const detailData = await detailRes.json();
    setUserData(detailData);
  }, [login]);

  useEffect(() => {
    // Fetch data for user via login id number and sets 'userData'.
    try {
      fetchDetailData();
    } catch (err) {
      console.error(err);
    }
  }, [login, fetchDetailData]);

  // Renders
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
