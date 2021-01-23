import React, { CSSProperties, useEffect, useState } from "react";
import { observer } from "mobx-react";
import { useStore } from "../../store/StoreProvider";
import mapComponent from "../../utils/mapComponent";
import { Ishow } from "tvmaze-api-ts";
import { useShowItemStyles, useShowCarouselStyles } from "./styles";
import KeyboardArrowLeftIcon from "@material-ui/icons/KeyboardArrowLeft";
import KeyboardArrowRightIcon from "@material-ui/icons/KeyboardArrowRight";
import {
    Card,
    CardActionArea,
    CardContent,
    CardMedia,
    IconButton,
    Typography,
} from "@material-ui/core";

const ShowDashboard = observer(() => {
    const { show: showStore } = useStore();

    useEffect(() => {
        showStore.fetchIndexShows();
    }, []);

    return (
        <>{showStore.dashboardShowsByGenre.map(mapComponent(ShowCarousel))}</>
    );
});

const ShowCarousel: React.FC<{ genre: string; shows: Ishow[] }> = ({
    genre,
    shows,
}) => {
    const classes = useShowCarouselStyles();

    const transitionTime = 400;
    const elastic = `transform ${transitionTime}ms cubic-bezier(0.68, -0.55, 0.265, 1.55)`;
    const smooth = `transform ${transitionTime}ms ease`;

    const [idx, setIdx] = useState<number>(0);
    const [style, setStyle] = useState<CSSProperties>({});

    useEffect(() => {}, []);

    return (
        <div key={genre} className={classes.container}>
            <Typography className={classes.title} variant="h5">
                {genre}
            </Typography>

            <div className={classes.carouselContainer}>
                <IconButton aria-label="Left carousel paddle">
                    <KeyboardArrowLeftIcon />
                </IconButton>

                <div className={classes.sliderContainer} style={style}>
                    <div className={classes.slider}>
                        {shows.map(mapComponent(ShowItem))}
                    </div>
                </div>

                <IconButton aria-label="Right carousel paddle">
                    <KeyboardArrowRightIcon />
                </IconButton>
            </div>
        </div>
    );
};

const ShowItem: React.FC<Ishow> = ({ name, image: { medium: image } }) => {
    const classes = useShowItemStyles();

    return (
        <Card className={classes.container}>
            <CardActionArea>
                <CardMedia
                    className={classes.media}
                    image={image}
                    title={name}
                />
                <CardContent>
                    <Typography gutterBottom variant="body2" component="p">
                        {name}
                    </Typography>
                </CardContent>
            </CardActionArea>
        </Card>
    );
};

export default ShowDashboard;
