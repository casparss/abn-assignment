import React, { createContext, useContext } from "react";
import rootStore from "./RootStore";

const StoreContext = createContext(rootStore);

export const useStore = () => useContext(StoreContext);

export const StoreProvider: React.FC<{}> = ({ children }) => (
    <StoreContext.Provider value={rootStore}>{children}</StoreContext.Provider>
);

export default StoreProvider;
