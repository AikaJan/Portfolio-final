import React, { useState, useEffect } from "react";
import axios from "axios";
import "./repos.css";
import logo from "./../../img/icons/logomark-orange@2x.png";

const Repos = ({ username, token }) => {
  const [repos, setRepos] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchRepos = async () => {
      try {
        const response = await axios.get(
          // `https://api.github.com/users/${username}/repos`,
          "https://api.github.com/users/AikaJan/repos",
          {
            headers: {
              Authorization: `token ${token}`,
              Accept: "application/vnd.github.v3+json",
            },
          }
        );
        console.log(response.data);
        setRepos(response.data);
      } catch (error) {
        setError(error);
        console.error(error);
      } finally {
        setLoading(false);
      }
    };

    fetchRepos();
  }, [username, token]);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error.message}</p>;

  return (
    <div className="repos-container">
      {repos.map((repo) => (
        <div className="repo-card" key={repo.id}>
          <div className="repo-content">
            <div className="repo-text">
              <h2 className="repo-title">{repo.name}</h2>
              <a
                className="repo-url"
                href={repo.html_url}
                target="_blank"
                rel="noopener noreferrer"
              >
                Repository Link
              </a>
            </div>
            <img className="repo-img" src={repo.img || logo} alt={repo.name} />
          </div>
        </div>
      ))}
    </div>
  );
};

export default Repos;
