import axios from 'axios';

// Function to fetch user data from GitHub API
export const fetchUserData = async (username) => {
    try {
        // Make an API call to fetch user data based on the username
        const response = await axios.get(`https://api.github.com/users/${username}`);
        return response.data; // Return the user data
    } catch (err) {
        throw err; // Throw an error if the request fails
    }
};
