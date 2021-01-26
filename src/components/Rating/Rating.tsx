import React from "react";
import { Paper } from "@material-ui/core";
import StarIcon from "@material-ui/icons/Star";
import { useRatingStyles } from "./styles";

export interface RatingProps {
    rating?: number;
}

export const Rating: React.FC<RatingProps> = ({ rating }) => {
    const classes = useRatingStyles();

    return (
        <Paper elevation={0} className={classes.container}>
            <StarIcon color={rating ? "secondary" : "disabled"} />
            {rating && rating}
        </Paper>
    );
};

export default Rating;
