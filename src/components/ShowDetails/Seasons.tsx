import { CircularProgress, Paper, Typography } from "@material-ui/core";
import { observer } from "mobx-react";
import React from "react";
import { useSeasonsStyles } from "./styles";
import { ShowDetails } from "./types";

export const Seasons: React.FC<ShowDetails> = observer(
    ({ showModel: { seasons, isFetchSeasonsInFlight } }) => {
        const classes = useSeasonsStyles();

        if (isFetchSeasonsInFlight) {
            return <CircularProgress />;
        }

        return (
            <Paper>
                <Typography variant="h2">Seasons</Typography>

                <main className={classes.main}>
                    {seasons.map(({ number, image, summary }) => {
                        return (
                            <div>
                                <Typography>Season {number}</Typography>
                                <img
                                    src={
                                        image &&
                                        (image.medium || image.original)
                                    }
                                    alt="Season cover"
                                />
                            </div>
                        );
                    })}
                </main>
            </Paper>
        );
    }
);

export default Seasons;
