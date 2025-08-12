import { useState } from "react";
import { fetchUserData } from "../services/githubService";

const Search = () => {
  const [username, setUsername] = useState("");
  const [location, setLocation] = useState("");
  const [minRepos, setMinRepos] = useState("");
  const [results, setResults] = useState([]);
  const [singleUser, setSingleUser] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError("");
    setResults([]);
    setSingleUser(null);

    try {
      const data = await fetchUserData(username, location, minRepos);

      if (Array.isArray(data)) {
        // Advanced search returned multiple users
        if (data.length === 0) {
          setError("No users found matching your criteria.");
        } else {
          setResults(data);
        }
      } else {
        // Single user result
        setSingleUser(data);
      }
    } catch (err) {
      setError("Looks like we can't find the user");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="max-w-4xl mx-auto p-6">
      <h1 className="text-3xl font-bold text-center mb-6">GitHub User Search</h1>

      <form onSubmit={handleSubmit} className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-6">
        <input
          type="text"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          placeholder="Username"
          className="border rounded p-2 w-full"
        />
        <input
          type="text"
          value={location}
          onChange={(e) => setLocation(e.target.value)}
          placeholder="Location"
          className="border rounded p-2 w-full"
        />
        <input
          type="number"
          value={minRepos}
          onChange={(e) => setMinRepos(e.target.value)}
          placeholder="Min Repos"
          className="border rounded p-2 w-full"
        />
        <button type="submit" className="bg-blue-600 text-white rounded p-2 hover:bg-blue-700">
          Search
        </button>
      </form>

      {loading && <p className="text-center">Loading...</p>}
      {error && <p className="text-center text-red-500">{error}</p>}

      {/* Single user */}
      {singleUser && (
        <div className="bg-white shadow rounded p-4 flex flex-col items-center">
          <img src={singleUser.avatar_url} alt={singleUser.login} className="w-20 h-20 rounded-full mb-3" />
          <h3 className="font-semibold">{singleUser.name || singleUser.login}</h3>
          <p>{singleUser.location || "Location not available"}</p>
          <a href={singleUser.html_url} target="_blank" rel="noreferrer" className="text-blue-500 hover:underline">
            View Profile
          </a>
        </div>
      )}

      {/* Multiple users */}
      <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-4">
        {results.map((user) => (
          <div key={user.id} className="bg-white shadow rounded p-4 flex flex-col items-center">
            <img src={user.avatar_url} alt={user.login} className="w-20 h-20 rounded-full mb-3" />
            <h3 className="font-semibold">{user.login}</h3>
            <a href={user.html_url} target="_blank" rel="noreferrer" className="text-blue-500 hover:underline">
              View Profile
            </a>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Search;
