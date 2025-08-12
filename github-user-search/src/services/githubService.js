import axios from "axios";

export const fetchUserData = async (username, location = "", minRepos = "") => {
  try {
    // If extra filters are given, use search endpoint
    if (location || minRepos) {
      let query = username ? `${username} in:login` : "";
      if (location) query += ` location:${location}`;
      if (minRepos) query += ` repos:>=${minRepos}`;

      const response = await axios.get(`https://api.github.com/search/users?q=${query}`);
      return response.data.items; // returns multiple users
    }

    // Default single-user endpoint
    const response = await axios.get(`https://api.github.com/users/${username}`);
    return response.data; // returns one user object
  } catch (error) {
    throw new Error("User not found");
  }
};
