import React from "react";
import "./App.css";
import Login from "./components/login";
import Main from "./components/main";

function App() {
  const [screen, setScreen] = React.useState<number>(0);

  if (screen) {
    return <Main />;
  }

  return <Login setScreen={setScreen} />;
}

export default App;
