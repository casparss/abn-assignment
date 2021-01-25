import { Paper, Typography } from "@material-ui/core";
import React from "react";
import { useCardStyles } from "./styles";

export const Card: React.FC<{
    title?: string;
    mainStyle?: string;
    titleBarStyle?: string;
    customTitleBar?: React.ReactElement;
}> = ({ title, children, customTitleBar, titleBarStyle, mainStyle }) => {
    const classes = useCardStyles();

    return (
        <Paper>
            <div className={[classes.titleBar, titleBarStyle].join(" ")}>
                {customTitleBar ? (
                    customTitleBar
                ) : (
                    <Typography className={classes.title} variant="h4">
                        {title}
                    </Typography>
                )}
            </div>

            <main className={[classes.main, mainStyle].join(" ")}>
                {children}
            </main>
        </Paper>
    );
};

export default Card;
