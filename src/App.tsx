import { Outlet } from "react-router-dom";
import "./App.css";
import Footer from "./components/footer/Footer";
import { useState } from "react";

const App = () => {
  const [enableCamera, setEnableCamera] = useState(false);
  const [enableControls, setEnableControls] = useState(false);
  const [enableSkyBox, setEnableSkyBox] = useState(false);

  const context = {
    enableCamera,
    enableControls,
    enableSkyBox,
    setEnableCamera,
    setEnableControls,
    setEnableSkyBox,
  };

  return (
    <div className="appWrapper">
      <main className="appContent">
        <Outlet context={context} />
      </main>
      <Footer context={context} />
    </div>
  );
};

export default App;
