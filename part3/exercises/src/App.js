import logo from './logo.svg';
import HobbyIntroduction from './components/Introduction.js'
import MyProjects from './components/Projects';
import './App.css';

function App() {
  return (
    <div className="App">
      <h1>My Hobby: Gardening</h1>
      <HobbyIntroduction />
      <MyProjects />
    </div>
  );
}

export default App;
