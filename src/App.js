import logo from "./logo.svg";
import "./App.css";
import HomeView from "./components/HomeView/HomeView";
import { Provider } from "react-redux";
import { store } from "./state/store";
import { Router } from "./router/router";

function App() {
  return (
    <Provider store={store}>
      <Router />
    </Provider>
  );
}

export default App;
