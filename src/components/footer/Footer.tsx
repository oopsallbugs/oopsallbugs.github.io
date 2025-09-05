import styles from "./Footer.module.css";
import Checkbox from "../CheckBox";

interface OutletContext {
  enableCamera: boolean;
  enableControls: boolean;
  enableSkyBox: boolean;
  setEnableCamera: (value: boolean) => void;
  setEnableControls: (value: boolean) => void;
  setEnableSkyBox: (value: boolean) => void;
}

interface FooterProps {
  context: OutletContext;
}

const Footer = ({ context }: FooterProps) => {
  return (
    <footer className={styles.footer}>
      <div className={styles.pageControls} id="page-controls">
        <Checkbox
          label="Camera"
          initialChecked={context.enableCamera}
          onChange={context.setEnableCamera}
        />
        <Checkbox
          label="Controls"
          initialChecked={context.enableControls}
          onChange={context.setEnableControls}
        />
        <Checkbox
          label="Sky Box"
          initialChecked={context.enableSkyBox}
          onChange={context.setEnableSkyBox}
        />
      </div>
      <div className={styles.copyRight}>
        <p>&copy; 2025 Sam Humphries</p>
      </div>
    </footer>
  );
};

export default Footer;
