import React from "react";

//@TODO: add generics to this to give proper typing for components
// https://wanago.io/2020/03/09/functional-react-components-with-generic-props-in-typescript/
export const mapComponent = (Component: React.FunctionComponent<any>) => (
    data: unknown,
    idx: number
) => <Component key={idx} {...data} />;

export default mapComponent;
