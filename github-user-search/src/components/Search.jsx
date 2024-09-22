import React, { useState } from 'react';
import { fetchUserData } from '../services/githubService'; // Import the API service

const Search = () => {
    const [username, setUsername] = useState('');
    const [location, setLocation] = useState('');
    const [minRepos, setMinRepos] = useState('');
    const [userData, setUserData] = useState(null);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(false);

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (username.trim() === '' && location.trim() === '' && minRepos.trim() === '') return;

        setLoading(true);
        setError(false);
        setUserData(null);

        try {
        const data = await fetchUserData(username, location, minRepos);
        setUserData(data);
        } catch (error) {
        setError(true);
        } finally {
        setLoading(false);
        }
    };

    return (
        <div className="max-w-md mx-auto mt-10">
        <form onSubmit={handleSubmit} className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
            <h2 className="text-xl font-bold mb-4">Search GitHub Users</h2>
            <input
            type="text"
            placeholder="Username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            className="border rounded w-full py-2 px-3 mb-4"
            />
            <input
            type="text"
            placeholder="Location"
            value={location}
            onChange={(e) => setLocation(e.target.value)}
            className="border rounded w-full py-2 px-3 mb-4"
            />
            <input
            type="number"
            placeholder="Minimum Repositories"
            value={minRepos}
            onChange={(e) => setMinRepos(e.target.value)}
            className="border rounded w-full py-2 px-3 mb-4"
            />
            <button type="submit" className="bg-blue-500 text-white rounded py-2 px-4 hover:bg-blue-700">
            Search
            </button>
        </form>

        {loading && <p>Loading...</p>}
        {error && <p>Looks like we can't find any users.</p>}

        {userData && userData.length > 0 && (
            <div className="user-results mt-4">
            {userData.map((user) => (
                <div key={user.id} className="flex items-center border p-4 mb-2 rounded shadow">
                <img src={user.avatar_url} alt={`${user.login}'s avatar`} className="w-16 h-16 rounded-full mr-4" />
                <div>
                    <h2 className="font-bold">{user.login}</h2>
                    <p>Location: {user.location || 'N/A'}</p>
                    <p>Repositories: {user.public_repos || 0}</p>
                    <a href={user.html_url} target="_blank" rel="noopener noreferrer" className="text-blue-500">
                    View Profile
                    </a>
                </div>
                </div>
            ))}
            </div>
        )}
        </div>
    );
};

export default Search;
