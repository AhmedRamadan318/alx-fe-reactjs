import axios from 'axios';

// Base URL for GitHub API
const BASE_URL = 'https://api.github.com/users/';

// Function to fetch user data from GitHub API
export const fetchUserData = async (username) => {
    try {
        // Make an API call to fetch user data based on the username
        const response = await axios.get(`${BASE_URL}${username}`);
        return response.data; // Return the user data
    } catch (err) {
        // If an error occurs, throw it to be caught in the component
        throw err;
    }
};
