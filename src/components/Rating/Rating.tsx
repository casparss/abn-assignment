import React from "react";
import { Paper } from "@material-ui/core";
import StarIcon from "@material-ui/icons/Star";
import { useRatingStyles } from "./styles";

export const Rating: React.FC<{ rating: number }> = ({ rating }) => {
    const classes = useRatingStyles();

    return (
        <Paper elevation={0} className={classes.container}>
            <StarIcon />
            {rating}
        </Paper>
    );
};

export default Rating;
