import { StrictMode, useState } from "react";
import ReactDOM from "react-dom";
import { ReactFlowProvider } from "react-flow-renderer";

import Toolbar from "./components/Toolbar";
import CampaignProfile from "./CampaignProfile";
import "./styles.css";

import steps from "./campaign";

const App = () => {
  const [mode, setMode] = useState("profile");

  return (
    <ReactFlowProvider>
      {mode === "profile" && <CampaignProfile steps={steps} />}
      <Toolbar currentMode={mode} changeMode={setMode} />
    </ReactFlowProvider>
  );
};

const rootElement = document.getElementById("root");
ReactDOM.render(
  <StrictMode>
    <App />
  </StrictMode>,
  rootElement,
);
