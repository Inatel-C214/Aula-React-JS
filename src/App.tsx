import React, { useEffect } from "react";
import { colors } from "./assets/colors";
import Background from "./assets/background.png";
import C214Logo from "./assets/c214logo.jpeg";
import "./style.css";
import UserInput from "./components/UserInput";
import { PageContextProvider } from "./context/AppContext";

export default function Authorization() {
  const login = () => {
    console.log("Autenticando");
  };

  useEffect(() => {
    console.log("Página atualizada!");
  }, []);

  return (
    <PageContextProvider>
      <div style={styles.mainBox}>
        <div style={styles.authBox}>
          <form style={styles.formBox}>
            <img src={C214Logo} style={{ width: 300 }} />

            <UserInput
              placeholder="E-mail"
              type="text"
              label="Endereço de e-mail"
            />

            <UserInput placeholder="Senha" type="password" label="Senha" />

            <button
              style={{ ...styles.button, ...styles.buttonLogin }}
              onClick={(e) => {
                e.preventDefault();
                login();
              }}
            >
              LOGIN
            </button>
            <p style={styles.forgetPassword}>Esqueceu a senha?</p>
          </form>
        </div>
        <div style={styles.imageBox}></div>
      </div>
    </PageContextProvider>
  );
}

const styles = {
  mainBox: {
    display: "flex",
    width: "100vw",
    height: "100vh",
    maxWidth: "100%",
    maxHeight: "100%",
  } as React.CSSProperties,

  authBox: {
    height: " 100%",
    alignItems: "center",
    justifyContent: "center",
    alignContent: "center",
    display: "flex",
    flexDirection: "column",
    flex: 4,
    margin: "auto 0",
  } as React.CSSProperties,

  imageBox: {
    flex: 6,
    backgroundImage: `url(${Background})`,
    backgroundSize: "160%",
  } as React.CSSProperties,

  formBox: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    height: "100%",
    width: "80%",
    alignContent: "center",
  } as React.CSSProperties,

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

  button: {
    margin: 10,
    borderRadius: "5px",
    height: "3rem",
    border: "none",
    cursor: "pointer",
    color: "white",
    fontSize: "20px",
    boxShadow: "rgba(0, 0, 0, 0.25) 0px 25px 20px -20px",
  } as React.CSSProperties,

  buttonLogin: {
    width: "70%",
    background: `linear-gradient(0.25turn, ${colors.darkBlue}, ${colors.darkBlueOpacity})`,
  } as React.CSSProperties,

  buttonRegister: {
    width: "50%",
    alignItems: "center",
    justifyContent: "center",
    background: `linear-gradient(0.25turn, ${colors.lightOrange}, ${colors.lightOrangeOpacity})`,
  } as React.CSSProperties,

  forgetPassword: {
    textDecoration: "underline",
    boxShadow: "rgba(0, 0, 0, 0.25) 0px 25px 20px -20px",
    cursor: "pointer",
  } as React.CSSProperties,
};
