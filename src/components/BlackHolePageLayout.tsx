import { Suspense, lazy, useRef } from "react";
import styles from "./BlackHolePageLayout.module.css";
import Navigation from "../components/Navigation";
import LoadingSpinner from "../components/LoadingSpinner";

// Lazy load the Three.js canvas component
const BlackHoleCanvas = lazy(
  () => import("../components/blackhole/BlackHoleCanvas")
);

interface BlackHolePageLayoutProps {
  children: React.ReactNode;
  enableCamera?: boolean;
  enableControls?: boolean;
  enableSkyBox?: boolean;
  disableOverlay?: boolean;
}

// Loading component for the 3D canvas
const CanvasLoader = () => (
  <div className={styles.canvasLoader}>
    <LoadingSpinner message="Loading 3D Scene..." size="large" />
  </div>
);

const BlackHolePageLayout = ({
  children,
  enableCamera = false,
  enableControls = false,
  enableSkyBox = false,
  disableOverlay = false,
}: BlackHolePageLayoutProps) => {
  const dynamicContentRef = useRef<HTMLDivElement>(null);

  return (
    <div className={styles.pageWrapper}>
      <div className={styles.pageContentContainer}>
        <Suspense fallback={<CanvasLoader />}>
          <BlackHoleCanvas
            controls={enableControls}
            camera={enableCamera}
            skyBox={enableSkyBox}
          />
        </Suspense>

        {/* Title + Navigation */}
        {!disableOverlay && !enableControls && (
          <div className={styles.navContainer}>
            <Navigation />
          </div>
        )}

        {/* Dynamic Content */}
        {!disableOverlay && !enableControls && (
          <div className={styles.dynamicContent} ref={dynamicContentRef}>
            {children}
          </div>
        )}
      </div>
    </div>
  );
};

export default BlackHolePageLayout;
