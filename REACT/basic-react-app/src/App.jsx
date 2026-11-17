import "./App.css"
import "./Description.jsx"
import Description from "./Description.jsx";

function Title(){
  return <h1>I am the title</h1>;
}

function App() {
  return (
  <div>
    <Description/>
    <Title/>
  </div>
  );
}

export default App
