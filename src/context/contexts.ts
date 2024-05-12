import { useContext } from "react";
import { AppContext } from "./AppContext";

export const usePageContext = () => useContext(AppContext)