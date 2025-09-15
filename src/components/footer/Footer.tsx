import styles from "./Footer.module.css";
import Checkbox from "../CheckBox";

export interface FooterOutletContext {
  enableCamera?: boolean;
  enableControls?: boolean;
  enableSkyBox?: boolean;
  disableOverlay?: boolean;
  setEnableCamera?: (value: boolean) => void;
  setEnableControls?: (value: boolean) => void;
  setEnableSkyBox?: (value: boolean) => void;
  setDisableOverlay?: (value: boolean) => void;
}

interface FooterProps {
  context: FooterOutletContext;
}

const Footer = ({ context }: FooterProps) => {
  // Define the mapping between properties and their display labels
  const controlConfig = [
    {
      key: "enableCamera",
      setterKey: "setEnableCamera",
      label: "Camera",
    },
    {
      key: "enableControls",
      setterKey: "setEnableControls",
      label: "Controls",
    },
    {
      key: "enableSkyBox",
      setterKey: "setEnableSkyBox",
      label: "Sky Box",
    },
    {
      key: "disableOverlay",
      setterKey: "setDisableOverlay",
      label: "Hide Text",
    },
  ] as const;

  // Filter to only show controls that exist in the current context
  const availableControls = controlConfig.filter(
    (control) =>
      context[control.key] !== undefined &&
      context[control.setterKey] !== undefined
  );

  return (
    <footer className={styles.footer}>
      {availableControls.length > 0 && (
        <div className={styles.pageControls} id="page-controls">
          {availableControls.map((control) => (
            <Checkbox
              key={control.key}
              label={control.label}
              checked={Boolean(context[control.key])}
              onChange={context[control.setterKey]}
            />
          ))}
        </div>
      )}
      <div className={styles.copyRight}>
        <p>&copy; Sam Humphries</p>
      </div>
    </footer>
  );
};

export default Footer;
