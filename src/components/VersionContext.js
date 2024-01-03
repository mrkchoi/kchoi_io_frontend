import { createContext } from "react";

export const VERSION = { V1: "V1", V2: "V2" };
export const VersionContext = createContext(VERSION.V1);
