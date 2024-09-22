import React, { useState } from 'react';
import { fetchUserData } from '../services/githubService';

const Search = () => {
    const [username, setUsername] = useState('');
    const [location, setLocation] = useState('');
    const [minRepos, setMinRepos] = useState('');
    const [userData, setUserData] = useState([]);
    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(false);

    const handleChange = (e) => {
        const { name, value } = e.target;
        if (name === 'username') setUsername(value);
        if (name === 'location') setLocation(value);
        if (name === 'minRepos') setMinRepos(value);
    };

    const handleSearch = async (e) => {
        e.preventDefault();
        setLoading(true);
        setError(null);
        setUserData([]);
        try {
            const data = await fetchUserData(username, location, minRepos);
            setUserData(data.users);
        } catch (error) {
            setError("Looks like we can't find any users");
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
                    <label htmlFor="location" className="block text-sm font-medium text-gray-700">
                        Location
                    </label>
                    <input
                        id="location"
                        name="location"
                        type="text"
                        value={location}
                        onChange={handleChange}
                        className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3"
                        placeholder="Enter location"
                    />
                </div>
                <div>
                    <label htmlFor="minRepos" className="block text-sm font-medium text-gray-700">
                        Minimum Repositories
                    </label>
                    <input
                        id="minRepos"
                        name="minRepos"
                        type="number"
                        value={minRepos}
                        onChange={handleChange}
                        className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3"
                        placeholder="Enter minimum repositories"
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
            {userData.length > 0 && (
                <div className="mt-4">
                    <h3 className="text-xl font-bold">Search Results:</h3>
                    {userData.map((user) => (
                        <div key={user.id} className="mt-4">
                            <h4 className="text-lg font-bold">{user.name}</h4>
                            <p>{user.login}</p>
                            <p>Location: {user.location}</p>
                            <p>Repositories: {user.public_repos}</p>
                            <a href={user.html_url} target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">
                                View Profile
                            </a>
                        </div>
                    ))}
                </div>
            )}
        </div>
    );
};

export default Search;
