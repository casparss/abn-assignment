import React from "react";

//@TODO: add generics to this to give proper typing for components
export const mapComponent = (Component: React.FunctionComponent<any>) => (
    data: unknown
) => <Component {...data} />;

export default mapComponent;
