import "./App.css";
import data from "./data/data.json";
import Carousel from "./carousel/carousel.component";

function App() {
  return (
    <div className="App">
      <div className="container">
        <Carousel slides={data.banner.start} />
      </div>
    </div>
  );
}

export default App;
