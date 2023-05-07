import "./App.css";
import { useEffect, useState, useCallback } from "react";
import { Routes, Route, Link } from "react-router-dom";
import Landing from "./Components/Landing";
import UserDetail from "./Components/UserDetail";

//This is a React application that fetches data from the GitHub API and displays it in a list view. The main component is called App and it sets up the routing for the application. It also fetches data for the landing page and passes it to a child component called Landing, which renders a list of contributors with UserCard components.

//Each UserCard component contains data for a single user and a link to a UserDetail component that displays more detailed information about that user. The UserDetail component fetches additional data from the GitHub API based on the user ID passed in the URL parameter, and displays it in a detailed view.
//The application also includes a navigation bar with a link to the landing page and a button to navigate back to the previous page. Pagination is achieved by passing a currentPage prop to the UserDetail component, which is used to determine the current page number and fetch the appropriate data from the GitHub API.


function App() {
  const [collabData, setCollabData] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);

  const fetchData = useCallback(async () => {
    const pageRes = await fetch(
      `https://api.github.com/repos/facebook/react/contributors?per_page=100&page=${currentPage}`
    );
    const pageData = await pageRes.json();
    setCollabData(pageData);
  }, [currentPage]);

  useEffect(() => {
    try {
      fetchData();
    } catch (err) {
      console.error(err);
    }
  }, [currentPage, fetchData]);

  return (
    <div className="App">
      <h1 className="title" onClick={() => setCurrentPage(1)}>
        <Link to="/">Contributors of the React Repository </Link>
      </h1>
      <Routes>
        <Route path="/" element={<Landing data={collabData} />} />
        <Route
          path="/user-detail/:userId"
          element={<UserDetail currentPage={currentPage} />}
        />
      </Routes>
    </div>
  );
}

export default App;
