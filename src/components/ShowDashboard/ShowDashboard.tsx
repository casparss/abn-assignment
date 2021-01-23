import React, { useEffect } from "react";
import { observer } from "mobx-react";
import { useStore } from "../../store/StoreProvider";
import mapComponent from "../../utils/mapComponent";
import { Ishow } from "tvmaze-api-ts";
import { useShowItemStyles, useShowCarouselStyles } from "./styles";
import {
    Card,
    CardActionArea,
    CardContent,
    CardMedia,
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

    return (
        <div key={genre} className={classes.container}>
            <Typography className={classes.title} variant="h5">
                {genre}
            </Typography>
            <div className={classes.slidesContainer}>
                {shows.map(mapComponent(ShowItem))}
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
                    <Typography gutterBottom variant="h5" component="h2">
                        {name}
                    </Typography>
                    <Typography
                        variant="body2"
                        color="textSecondary"
                        component="p"
                    ></Typography>
                </CardContent>
            </CardActionArea>
        </Card>
    );
};

export default ShowDashboard;
