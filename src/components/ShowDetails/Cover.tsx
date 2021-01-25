import { Paper, Typography } from "@material-ui/core";
import parse from "html-react-parser";
import { observer } from "mobx-react";
import React from "react";
import { ShowDetails } from "./types";
import Rating from "../Rating";
import useShowDetailsStyles from "./styles";

export const Cover: React.FC<ShowDetails> = observer(
    ({
        showModel: {
            // @ts-ignore
            show: { name, rating, summary, image },
        },
    }) => {
        const classes = useShowDetailsStyles();

        return (
            <Paper elevation={2}>
                <Typography variant="h2">{name}</Typography>
                <Rating rating={rating && rating.average} />
                <img
                    className={classes.cover}
                    src={image && image.original}
                    alt="Show cover"
                />
                <Typography variant="body1">{parse(summary)}</Typography>
            </Paper>
        );
    }
);

export default Cover;
