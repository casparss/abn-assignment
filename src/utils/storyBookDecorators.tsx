import { makeStyles } from "@material-ui/core";
import React from "react";
import { BrowserRouter } from "react-router-dom";

export const useCenterStyles = makeStyles((theme) => ({
    center: {
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        width: "100%",
        height: "100%",
    },
}));

export const Center = (Story: any) => {
    const classes = useCenterStyles();

    return (
        <div className={classes.center}>
            <Story />
        </div>
    );
};

export const RouterDecorator = (Story: any) => (
    <BrowserRouter>
        <Story />
    </BrowserRouter>
);
