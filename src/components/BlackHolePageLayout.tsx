import styles from "./BlackHolePageLayout.module.css";
import BlackHoleCanvas from "../components/blackhole/BlackHoleCanvas";
import Navigation from "../components/Navigation";
import { useOutletContext } from "react-router-dom";

interface BlackHolePageLayoutOutletContext {
  enableCamera: boolean;
  enableControls: boolean;
  enableSkyBox: boolean;
}

interface BlackHolePageLayoutProps {
  children: React.ReactNode;
}

const BlackHolePageLayout = ({ children }: BlackHolePageLayoutProps) => {
  const { enableCamera, enableControls, enableSkyBox } =
    useOutletContext<BlackHolePageLayoutOutletContext>();

  return (
    <div className={styles.pageWrapper}>
      <div className={styles.pageContentContainer}>
        <BlackHoleCanvas
          controls={enableControls}
          camera={enableCamera}
          skyBox={enableSkyBox}
        />
        {/* Title + Navigation (Defaults absolute top left) */}
        {!enableControls && <Navigation />}

        {/* Dynamic Content (Bottom Right) */}
        {!enableControls && (
          <div className={styles.bottomRight}>{children}</div>
        )}
      </div>
    </div>
  );
};

export default BlackHolePageLayout;
