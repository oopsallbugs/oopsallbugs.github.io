import { Outlet, useLocation } from "react-router-dom";
import "./App.css";
import Footer from "./components/footer/Footer";
import { useState } from "react";
import type { FooterOutletContext } from "./components/footer/Footer";
import BlackHolePageLayout from "./components/BlackHolePageLayout";

const App = () => {
  const location = useLocation();
  const [enableCamera, setEnableCamera] = useState(false);
  const [enableControls, setEnableControls] = useState(false);
  const [enableSkyBox, setEnableSkyBox] = useState(false);

  const getPageContext = (): FooterOutletContext => {
    switch (location.pathname) {
      case "/":
      case "/home":
      case "/contact":
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
      default:
        return {};
    }
  };

  const currentPageContext = getPageContext();

  // Pages that should use the black hole layout
  const blackHolePages = ["/", "/home", "/contact"];
  const shouldUseBlackHoleLayout = blackHolePages.includes(location.pathname);

  return (
    <div className="appWrapper">
      <main className="appContent">
        {shouldUseBlackHoleLayout ? (
          <BlackHolePageLayout
            enableCamera={enableCamera}
            enableControls={enableControls}
            enableSkyBox={enableSkyBox}
          >
            <Outlet context={currentPageContext} />
          </BlackHolePageLayout>
        ) : (
          <Outlet context={currentPageContext} />
        )}
      </main>
      <Footer context={currentPageContext} />
    </div>
  );
};

export default App;
