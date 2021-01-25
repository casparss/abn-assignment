import { Paper, Typography } from "@material-ui/core";
import React, { ReactNode } from "react";
import { useCardStyles } from "./styles";

export interface CardProps {
    title?: string;
    mainStyle?: string;
    titleBarStyle?: string;
    customTitleBar?: React.ReactElement;
    children: ReactNode;
}

export const Card: React.FC<CardProps> = ({
    title,
    children,
    customTitleBar,
    titleBarStyle,
    mainStyle,
}) => {
    const classes = useCardStyles();

    return (
        <Paper>
            <div className={[classes.titleBar, titleBarStyle].join(" ")}>
                {customTitleBar ? (
                    customTitleBar
                ) : (
                    <Typography className={classes.title} variant="h6">
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
