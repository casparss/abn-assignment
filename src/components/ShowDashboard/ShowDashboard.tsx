import { CircularProgress, Typography } from "@material-ui/core";
import { observer } from "mobx-react";
import React, { useEffect, useState } from "react";
import { useStore } from "../../store/StoreProvider";
import mapComponent from "../../utils/mapComponent";
import { FeedType } from "./constants";
import DashboardControls from "./DashboardControls";
import ShowCarousel from "./ShowCarousel";
import ShowItem from "./ShowItem";
import { useShowDashboardStyles } from "./styles";

export interface ShowDashboardProps {
    defaultFeedType?: FeedType;
}

const ShowDashboard: React.FC<ShowDashboardProps> = observer(
    ({ defaultFeedType = FeedType.GENRE }) => {
        const classes = useShowDashboardStyles();
        const { show: showStore } = useStore();
        const [feedType, setFeedType] = useState<FeedType>(defaultFeedType);

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
                    <>
                        <Typography className={classes.searchResultsText}>
                            Showing {showStore.searchedShows.length} search
                            results
                        </Typography>
                        <div className={classes.itemListWrappedRowContainer}>
                            {showStore.searchedShows.map(
                                mapComponent(ShowItem)
                            )}
                        </div>
                    </>
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
    }
);

export default ShowDashboard;
