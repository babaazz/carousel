import "./App.css";
import data from "./data/data.json";
import Carousel from "./carousel/carousel.component";

function App() {
  return (
    <div className="App">
      <div className="container">
        <Carousel slides={data.banner.start} interval={5000} width={1500} />
      </div>
    </div>
  );
}

export default App;
