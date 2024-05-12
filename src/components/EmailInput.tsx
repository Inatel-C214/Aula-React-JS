import React, { useEffect } from "react";

type Props = {
  email: string;
  setEmail: React.Dispatch<React.SetStateAction<string>>;
};

export default function EmailInput({ email, setEmail }: Props) {
  useEffect(() => {
    console.log("Página atualizada!");
  }, []);

  useEffect(() => {
    console.log("Email modificado!");
  }, [email]);

  return (
    <div style={styles.textFieldContainer}>
      <input
        placeholder="E-mail"
        className="auth-form-input"
        style={styles.textInput}
        value={email}
        onChange={(e) => {
          setEmail(e.target.value);
        }}
      ></input>
      <label className="auth-form-label">Endereço de e-mail</label>
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
