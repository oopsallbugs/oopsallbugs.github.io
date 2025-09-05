import { Outlet, useLocation } from "react-router-dom";
import "./App.css";
import Footer from "./components/footer/Footer";
import { useState } from "react";
import type { FooterOutletContext } from "./components/footer/Footer";

const App = () => {
  const location = useLocation();
  const [enableCamera, setEnableCamera] = useState(false);
  const [enableControls, setEnableControls] = useState(false);
  const [enableSkyBox, setEnableSkyBox] = useState(false);

  const getPageContext = (): FooterOutletContext => {
    switch (location.pathname) {
      case "/":
      case "/home":
        return {
          enableCamera,
          enableControls,
          enableSkyBox,
          setEnableCamera,
          setEnableControls,
          setEnableSkyBox,
        };
      case "/projects":
        return {
          // Projects page might want some controls in the future
          // For now, empty object means no footer controls
        };
      case "/resume":
        return {
          // Resume page context - add any needed controls here
        };
      case "/contact":
        return {
          // Contact page context - add any needed controls here
        };
      default:
        return {};
    }
  };

  const currentPageContext = getPageContext();

  return (
    <div className="appWrapper">
      <main className="appContent">
        <Outlet context={currentPageContext} />
      </main>
      <Footer context={currentPageContext} />
    </div>
  );
};

export default App;
