import { CircularProgress, Typography } from "@material-ui/core";
import { observer } from "mobx-react";
import React from "react";
import Card from "./Card";
import { useSeasonsStyles } from "./styles";
import { ShowDetails } from "./types";

export const Seasons: React.FC<ShowDetails> = observer(
    ({
        showModel: {
            show: { image: showImage },
            seasons,
            isFetchSeasonsInFlight,
        },
    }) => {
        const classes = useSeasonsStyles();

        if (isFetchSeasonsInFlight) {
            return <CircularProgress />;
        }

        return (
            <Card title="Seasons" mainStyle={classes.main}>
                {seasons.map(({ number, image }) => (
                    <div>
                        <Typography>Season {number}</Typography>
                        <img
                            className={classes.image}
                            src={image?.medium ?? showImage.medium}
                            alt="Season cover"
                        />
                    </div>
                ))}
            </Card>
        );
    }
);

export default Seasons;
