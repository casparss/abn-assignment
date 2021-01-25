import { Typography } from "@material-ui/core";
import { observer } from "mobx-react";
import React from "react";
import { Ishow } from "../../services/ShowService/types";
import Carousel from "../Carousel";
import ShowItem from "./ShowItem";
import { useShowCarouselStyles } from "./styles";

export interface ShowCarouselProps {
    genre: string;
    shows: Ishow[];
}

export const ShowCarousel: React.FC<ShowCarouselProps> = observer(
    ({ genre, shows }) => {
        const classes = useShowCarouselStyles();

        return (
            <div key={genre} className={classes.container}>
                <Typography className={classes.title} variant="h5">
                    {genre}
                </Typography>

                <Carousel Item={ShowItem} items={shows} />
            </div>
        );
    }
);

export default ShowCarousel;
