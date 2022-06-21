import "./App.css";
import data from "./data/data.json";
import Carousel from "./carousel/carousel.component";

function App() {
  return (
    <div className="App">
      <Carousel slides={data.banner.start} />
    </div>
  );
}

export default App;
