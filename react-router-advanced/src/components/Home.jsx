

const Home = () => {
  const login = () => localStorage.setItem('auth', 'true');
  const logout = () => localStorage.removeItem('auth');

  return (
    <div>
      <h2>Home Page</h2>
      <button onClick={login}>Login</button>
      <button onClick={logout}>Logout</button>
    </div>
  );
};

export default Home;
