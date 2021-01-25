import {
    Card,
    CardActionArea,
    CardContent,
    CardMedia,
    CircularProgress,
    FormControl,
    InputLabel,
    MenuItem,
    Select,
    Typography,
} from "@material-ui/core";
import { observer } from "mobx-react";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Ishow } from "tvmaze-api-ts";
import { useStore } from "../../store/StoreProvider";
import mapComponent from "../../utils/mapComponent";
import Carousel from "../Carousel";
import Rating from "../Rating/Rating";
import {
    useDashboardControlStyles,
    useShowCarouselStyles,
    useShowDashboardStyles,
    useShowItemStyles,
} from "./styles";

enum FeedType {
    RATING = "rating",
    GENRE = "genre",
    SEARCH = "search",
}

const ShowDashboard = observer(() => {
    const classes = useShowDashboardStyles();
    const { show: showStore } = useStore();
    const [feedType, setFeedType] = useState<FeedType>(FeedType.GENRE);

    useEffect(() => {
        showStore.fetchIndexShows();
    }, []);

    useEffect(() => {
        setFeedType(
            showStore.searchedShows.length > 0 || showStore.searchIsInFlight
                ? FeedType.SEARCH
                : FeedType.GENRE
        );
    }, [showStore.searchedShows.length]);

    const dashboardControls = (
        <DashboardControls
            feedTypeSelectChanged={setFeedType}
            feedType={feedType}
        />
    );

    if (showStore.isLoading) {
        return (
            <div className={classes.loadingContainer}>
                <CircularProgress size={60} className={classes.spinner} />
                <Typography variant="body1">Loading shows...</Typography>
            </div>
        );
    }

    switch (feedType) {
        case FeedType.SEARCH:
            return (
                <div className={classes.itemListWrappedRowContainer}>
                    {showStore.searchedShows.map(mapComponent(ShowItem))}
                </div>
            );
        case FeedType.RATING:
            return (
                <>
                    {dashboardControls}
                    <div className={classes.itemListWrappedRowContainer}>
                        {showStore.dashboardShowsByRank.map(
                            mapComponent(ShowItem)
                        )}
                    </div>
                </>
            );
        case FeedType.GENRE:
        default:
            return (
                <>
                    {dashboardControls}
                    {showStore.dashboardShowsByGenre.map(
                        mapComponent(ShowCarousel)
                    )}
                </>
            );
    }
});

const DashboardControls: React.FC<{
    feedTypeSelectChanged: (feedType: FeedType) => void;
    feedType: FeedType;
}> = ({ feedTypeSelectChanged, feedType }) => {
    const classes = useDashboardControlStyles();

    return (
        <div className={classes.container}>
            <FormControl variant="outlined">
                <InputLabel id="feed-type">Feed type</InputLabel>
                <Select
                    labelId="feed-type"
                    value={feedType}
                    onChange={({ target: { value } }) =>
                        feedTypeSelectChanged(value as FeedType)
                    }
                    label="Feed type"
                >
                    <MenuItem value={FeedType.GENRE}>Genre</MenuItem>
                    <MenuItem value={FeedType.RATING}>Rating</MenuItem>
                </Select>
            </FormControl>
        </div>
    );
};

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

const ShowItem: React.FC<Ishow> = observer(
    ({
        id,
        name,
        image,
        // @ts-ignore
        rating: { average: showRating },
    }) => {
        const classes = useShowItemStyles();

        return (
            <Link to={`/show-details/${id}`}>
                <Card className={classes.container}>
                    <CardActionArea>
                        <CardMedia
                            className={classes.media}
                            image={image && (image.medium || image.original)}
                            title={name}
                        />
                        <CardContent>
                            <Typography
                                gutterBottom
                                variant="body2"
                                component="p"
                            >
                                {name}
                            </Typography>

                            <Rating rating={showRating} />
                        </CardContent>
                    </CardActionArea>
                </Card>
            </Link>
        );
    }
);

export default ShowDashboard;
