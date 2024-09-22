import axios from 'axios';

const BASE_URL = 'https://api.github.com/search/users?q=';

/**
 * Fetches user data from the GitHub API based on search criteria.
 * @param {string} username - The GitHub username to search for.
 * @param {string} [location=''] - Optional location to filter users.
 * @param {string} [minRepos=''] - Optional minimum number of repositories to filter users.
 * @param {number} [perPage=30] - Number of results per page.
 * @param {number} [page=1] - Page number to fetch.
 * @returns {Promise<Object>} - A promise that resolves to an object containing total count and user data.
 */
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
