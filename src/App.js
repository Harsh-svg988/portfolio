import logo from './logo.svg';
import './App.css';
import Header from './Header';
import HomePage from './HomePage.js';
import Footer from './Footer.js';
import Typing from './Typing.js';

function App() {
  return (
    <div className="App">
      <Header />
      <HomePage/>
      <Typing
        text={[
          "FULL Stack Developer",
          "React Developer"
        ]}
        typingSpeed = {100}
        deletingSpeed = {50}
        />
    </div>
  );
}

export default App;
