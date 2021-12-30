import "./App.css";
import DisplayTheme from "./components/DisplayTheme";
import Navbar from "./components/Navbar";
import Reducer from "./components/Reducer";
import Setting from "./components/Setting";
import ToggleTheme from "./components/ToggleTheme";
import { AppProvider } from "./context/AppContext";

function App() {
  return (
    <div className="App">
      <AppProvider>
        <Navbar />
        <hr />
        <Setting />
        <hr />
        <DisplayTheme />
        <ToggleTheme />
      </AppProvider>
      <hr />
      <Reducer />
    </div>
  );
}

export default App;
