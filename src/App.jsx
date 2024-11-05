import ConfettiEffect from "./components/ConfettiEffect";
import ThemesSwitcher from "./components/ThemesSwitcher";
import Snowfall from "react-snowfall";
// npm install react-rainy-day

function App() {
  return (
    <div>
      <ThemesSwitcher />
      <ConfettiEffect />
      <Snowfall color="white" snowflakeCount={100} />
    </div>
  );
}

export default App;
