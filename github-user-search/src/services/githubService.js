import axios from 'axios';

const BASE_URL = 'https://api.github.com/search/users?q=john+location:San+Francisco+repos:%3E=10';

// Function to fetch GitHub users with advanced search parameters
export const fetchUserData = async ({ username = '', location = '', minRepos = 0 }) => {
    // Construct the search query for the API request
    let query = `q=${username ? username : ''}`;
    
    if (location) {
        query += `+location:${location}`;
    }
    
    if (minRepos > 0) {
        query += `+repos:>=${minRepos}`;
    }

    try {
        const response = await axios.get(`${BASE_URL}/search/users?${query}`);
        return response.data;
    } catch (error) {
        console.error('Error fetching user data:', error);
        throw error;
    }
};
