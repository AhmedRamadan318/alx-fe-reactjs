import WelcomeMessage from './components/WelcomeMessage';
import Header from './components/Header';
import MainContent from './components/MainContent';
import Footer from './components/Footer';
import UserProfile from './components/UserProfile';
import './App.css'

function App() {
  return (
      <div className="App">
          <WelcomeMessage />
          <Header />
          <MainContent />
          <Footer />
          <UserProfile name="Alice" age="25" bio="Loves hiking and photography" />
      </div>
  );
}


export default App
