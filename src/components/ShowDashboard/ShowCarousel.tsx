import { Typography } from "@material-ui/core";
import { observer } from "mobx-react";
import React from "react";
import { Ishow } from "tvmaze-api-ts";
import Carousel from "../Carousel";
import ShowItem from "./ShowItem";
import { useShowCarouselStyles } from "./styles";

const ShowCarousel: React.FC<{ genre: string; shows: Ishow[] }> = observer(
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
