import React, { useState } from 'react';
import { fetchUserData } from '../services/githubService';

const Search = () => {
    const [username, setUsername] = useState('');
    const [userData, setUserData] = useState(null);
    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(false);

    // Handle change in username input
    const handleChange = (e) => {
        setUsername(e.target.value);
    };

    // Handle form submission and API request
    const handleSearch = async (e) => {
        e.preventDefault();
        setLoading(true);
        setError(null);
        setUserData(null);
        try {
            const data = await fetchUserData(username);
            setUserData(data);
        } catch (error) {
            setError("Looks like we can't find the user");
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="p-4 max-w-lg mx-auto">
            <form onSubmit={handleSearch} className="space-y-4">
                <div>
                    <label htmlFor="username" className="block text-sm font-medium text-gray-700">
                        GitHub Username
                    </label>
                    <input
                        id="username"
                        name="username"
                        type="text"
                        value={username}
                        onChange={handleChange}
                        className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3"
                        placeholder="Enter GitHub username"
                    />
                </div>
                <div>
                    <button
                        type="submit"
                        className="w-full bg-blue-600 text-white py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium hover:bg-blue-700"
                    >
                        Search
                    </button>
                </div>
            </form>
            {loading && <p className="mt-4 text-center">Loading...</p>}
            {error && <p className="mt-4 text-center text-red-600">{error}</p>}
            {userData && (
                <div className="mt-4">
                    <h3 className="text-xl font-bold">{userData.name}</h3>
                    <p>{userData.bio}</p>
                    <p>Login: {userData.login}</p>
                    <p>Location: {userData.location}</p>
                    <p>Repositories: {userData.public_repos}</p>
                    <img src={userData.avatar_url} alt={userData.name} width="100" className="mt-2 rounded-full" />
                </div>
            )}
        </div>
    );
};

export default Search;
