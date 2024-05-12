import React, { useEffect } from "react";

type Props = {
  password: string;
  setPassword: React.Dispatch<React.SetStateAction<string>>;
};

export default function PasswordInput({ password, setPassword }: Props) {
  useEffect(() => {
    console.log("Página atualizada!");
  }, []);

  useEffect(() => {
    console.log("Senha modificada!");
  }, [password]);

  return (
    <div style={styles.textFieldContainer}>
      <input
        placeholder="Senha"
        className="auth-form-input"
        type="password"
        style={styles.textInput}
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      ></input>
      <label className="auth-form-label">Senha</label>
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
