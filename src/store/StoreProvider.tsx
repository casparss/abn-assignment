import React, { createContext, useContext } from "react";
import rootStore from "./RootStore";

const StoreContext = createContext(rootStore);

export const useStore = () => useContext(StoreContext);

export const StoreProvider: React.FC<{ value?: any }> = ({
    children,
    value,
}) => (
    <StoreContext.Provider value={value ?? rootStore}>
        {children}
    </StoreContext.Provider>
);

export default StoreProvider;
