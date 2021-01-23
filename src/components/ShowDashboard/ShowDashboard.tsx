import {
    Card,
    CardActionArea,
    CardContent,
    CardMedia,
    Typography,
} from "@material-ui/core";
import { observer } from "mobx-react";
import React, { useEffect } from "react";
import { Ishow } from "tvmaze-api-ts";
import { useStore } from "../../store/StoreProvider";
import mapComponent from "../../utils/mapComponent";
import Carousel from "../Carousel";
import { useShowCarouselStyles, useShowItemStyles } from "./styles";

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

            <Carousel Item={ShowItem} items={shows} />
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
