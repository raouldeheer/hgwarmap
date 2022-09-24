
import { createContext, useContext } from "react";
import { WarState } from "./warmapEventHandler";

export const warState = new WarState();
export const warStateContext = createContext(warState);

export const useWarState = () => useContext(warStateContext);
