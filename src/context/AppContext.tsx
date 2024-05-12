import {
  ReactNode,
  createContext,
  useCallback,
  useEffect,
  useState,
} from "react";

type Props = {
  children: ReactNode;
};

interface AppContextType {
  email: string;
  updateEmail: (email: string) => void;
  password: string;
  updatePassword: (password: string) => void;
}

export const AppContext = createContext<AppContextType>({
  email: "",
  updateEmail: () => {},
  password: "",
  updatePassword: () => {},
});

export function PageContextProvider({ children }: Props) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const updateEmail = useCallback((email: string) => {
    setEmail(email);
  }, []);

  const updatePassword = useCallback((password: string) => {
    setPassword(password);
  }, []);


  useEffect(() => {
    console.log("Email modificado!");
  }, [email]);

  useEffect(() => {
    console.log("Senha modificada!");
  }, [password]);

  return (
    <AppContext.Provider
      value={{
        email,
        updateEmail,
        password,
        updatePassword,
      }}
    >
      {children}
    </AppContext.Provider>
  );
}
