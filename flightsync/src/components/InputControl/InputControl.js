import React from "react";
import styles from "./InputControl.module.css";

function InputControl({ label, textarea, ...props }) {
  return (
    <div className={styles.container}>
      <div className={styles.inputtitle}>
        {label && <span>{label}</span>}
        &nbsp;
        {props.imp === "true" && (
          <span style={{ fontWeight: "bold", color: "red" }}>*</span>
        )}
      </div>
      {textarea !== "1" && <input type={props.type} {...props} />}
      {textarea === "1" && <textarea type={props.type} {...props} />}
    </div>
  );
}

export default InputControl;
