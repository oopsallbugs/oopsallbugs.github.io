import { Outlet, useLocation } from "react-router-dom";
import "./App.css";
import Footer from "./components/footer/Footer";
import { useState } from "react";
import type { FooterOutletContext } from "./components/footer/Footer";
import BlackHolePageLayout from "./components/pageLayouts/BlackHolePageLayout";

const App = () => {
  const location = useLocation();
  const [enableCamera, setEnableCamera] = useState(false);
  const [enableControls, setEnableControls] = useState(false);
  const [enableSkyBox, setEnableSkyBox] = useState(false);
  const [disableOverlay, setDisableOverlay] = useState(false);

  // Pages that use the black hole layout
  const blackHolePages = ["/", "/home", "/contact"];
  const useBlackHoleLayout = blackHolePages.includes(location.pathname);

  const getPageContext = (): FooterOutletContext => {
    if (useBlackHoleLayout) {
      return {
        enableCamera,
        enableControls,
        enableSkyBox,
        disableOverlay,
        setEnableCamera,
        setEnableControls,
        setEnableSkyBox,
        setDisableOverlay,
      };
    }
    // Default empty context for other pages
    return {};
  };

  const currentPageContext = getPageContext();

  return (
    <div className="appWrapper">
      <main className="appContent">
        {useBlackHoleLayout ? (
          <BlackHolePageLayout
            enableCamera={enableCamera}
            enableControls={enableControls}
            enableSkyBox={enableSkyBox}
            disableOverlay={disableOverlay}
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
