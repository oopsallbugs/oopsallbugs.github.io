import styles from "./BlackHolePageLayout.module.css";
import BlackHoleCanvas from "../components/blackhole/BlackHoleCanvas";
import Navigation from "../components/Navigation";

interface BlackHolePageLayoutProps {
  children: React.ReactNode;
  enableCamera?: boolean;
  enableControls?: boolean;
  enableSkyBox?: boolean;
}
// TODO: add prop types
const BlackHolePageLayout = ({
  children,
  enableCamera = false,
  enableControls = false,
  enableSkyBox = false,
}: BlackHolePageLayoutProps) => {
  return (
    <div className={styles.pageWrapper}>
      <div className={styles.pageContentContainer}>
        <BlackHoleCanvas
          controls={enableControls}
          camera={enableCamera}
          skyBox={enableSkyBox}
        />
        {/* Title + Navigation (Defaults absolute top left) */}
        {!enableControls && (
          <div className={styles.topLeft}>
            <Navigation />
          </div>
        )}

        {/* Dynamic Content (Bottom Right) */}
        {!enableControls && (
          <div className={styles.bottomRight}>{children}</div>
        )}
      </div>
    </div>
  );
};

export default BlackHolePageLayout;
