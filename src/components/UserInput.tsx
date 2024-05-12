import React from "react";
import { usePageContext } from "../context/contexts";

type Props = {
  placeholder: string;
  type: string;
  label: string;
};

export default function UserInput({ placeholder, type, label }: Props) {
  const { email, updateEmail, password, updatePassword } = usePageContext();

  const setInput = type === 'password' ? updatePassword : updateEmail

  const input = type === 'password' ? password : email

  return (
    <div style={styles.textFieldContainer}>
      <input
        placeholder={placeholder}
        className="auth-form-input"
        style={styles.textInput}
        type={type}
        value={input}
        onChange={(e) => {
          setInput(e.target.value);
        }}
      ></input>
      <label className="auth-form-label">{label}</label>
    </div>
  );
}

const styles = {
  textFieldContainer: {
    display: "flex",
    flexDirection: "column",
    margin: 10,
    width: "70%",
    marginBottom: 20,
  } as React.CSSProperties,

  textInput: {
    height: "2rem",
    boxShadow: "rgba(0, 0, 0, 0.05) 0px 1px 2px 0px",
  } as React.CSSProperties,
};
