import styles from "./CheckBox.module.css";

export interface CheckBoxProps {
  label?: string;
  checked: boolean;
  onChange?: (checked: boolean) => void;
}

const Checkbox = ({ label, checked, onChange }: CheckBoxProps) => {
  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (onChange) onChange(event.target.checked);
  };

  return (
    <label className={styles.checkboxContainer}>
      <input
        type="checkbox"
        checked={checked}
        onChange={handleChange}
        className={styles.nativeCheckboxHidden}
      />
      <span className={styles.checkboxVisual} />
      {label && <span className={styles.checkboxLabel}>{label}</span>}
    </label>
  );
};

export default Checkbox;
