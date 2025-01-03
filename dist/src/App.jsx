import "./App.css";
import InfoBox from "./infoBox";
import SearchBox from "./SearchBox";
import "@fontsource/roboto/400.css";
import WeatherApp from "./WeatherApp";
function App() {
  return (
    <>
      <div className="app-container"  style={{ fontFamily: "roboto" }}>
        <WeatherApp />
      </div>
    </>
  );
}

export default App;
