import axios from 'axios';

const BASE_URL = 'https://api.github.com/search/users?q=';

// Function to fetch user data from GitHub API
export const fetchUserData = async (username, location = '', minRepos = '', perPage = 30, page = 1) => {
    let query = `user:${username}`;

    if (location) {
        query += `+location:${location}`;
    }

    if (minRepos) {
        query += `+repos:>=${minRepos}`;
    }

    try {
        const response = await axios.get(`${BASE_URL}${query}&per_page=${perPage}&page=${page}`);
        const users = response.data.items;

        return {
            total_count: response.data.total_count,
            users,
        };
    } catch (err) {
        throw err;
    }
};
