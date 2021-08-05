import "./App.css";
import star from "./images/star.png";

function App() {
  return (
    <div className="App">
      <header>
        <img className="stars" src={star} />
        <div className="sun">
          <h1 id="title">
            <span id="first-name">Jordan</span>
            <span id="last-name">Renaud</span>
            <span id="emphasis-text">Developer</span>
          </h1>
        </div>
      </header>
    </div>
  );
}

export default App;
