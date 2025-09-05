import { useState } from "react";
import styles from "./CheckBox.module.css";

export interface CheckBoxProps {
  label?: string;
  initialChecked?: boolean;
  onChange?: (checked: boolean) => void;
}

const Checkbox = ({ label, initialChecked, onChange }: CheckBoxProps) => {
  const [isChecked, setIsChecked] = useState(initialChecked);

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const newCheckedState = event.target.checked;
    setIsChecked(newCheckedState);
    if (onChange) {
      onChange(newCheckedState);
    }
  };

  return (
    <label className={styles.checkboxContainer}>
      <input
        type="checkbox"
        checked={isChecked}
        onChange={handleChange}
        className={styles.nativeCheckboxHidden}
      />
      <span className={styles.checkboxVisual} />
      {label && <span className={styles.checkboxLabel}>{label}</span>}
    </label>
  );
};

export default Checkbox;
