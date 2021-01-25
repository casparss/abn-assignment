import { Paper, Typography } from "@material-ui/core";
import parse from "html-react-parser";
import { observer } from "mobx-react";
import React from "react";
import { ShowDetails } from "./types";
import Rating from "../Rating";
import { useCoverStyles } from "./styles";
import Card from "./Card";

export const Cover: React.FC<ShowDetails> = observer(
    ({
        showModel: {
            show: { name, rating, summary, image },
        },
    }) => {
        const classes = useCoverStyles();

        const titleBar = (
            <>
                <Typography variant="h2">{name}</Typography>
                <Rating rating={rating && rating.average} />
            </>
        );

        return (
            <Card titleBarStyle={classes.titleBar} customTitleBar={titleBar}>
                <img
                    className={classes.cover}
                    src={image && image.original}
                    alt="Show cover"
                />

                <Typography variant="body2" color="textSecondary" component="p">
                    {parse(summary)}
                </Typography>
            </Card>
        );
    }
);

export default Cover;
