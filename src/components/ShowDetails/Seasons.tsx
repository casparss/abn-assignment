import { ShowDetails } from "./types";
import React from "react";
import { observer } from "mobx-react";
import { CircularProgress, Paper, Typography } from "@material-ui/core";
import parse from "html-react-parser";

export const Seasons: React.FC<ShowDetails> = observer(
    ({ showModel: { seasons, isFetchSeasonsInFlight } }) => {
        if (isFetchSeasonsInFlight) {
            return <CircularProgress />;
        }

        return (
            <Paper>
                <Typography variant="h2">Seasons</Typography>

                {seasons.map(({ number, image, summary }) => {
                    return (
                        <div>
                            <Typography>Season {number}</Typography>
                            <img
                                src={image && (image.medium || image.original)}
                                alt="Season cover"
                            />
                            {parse(summary)}
                        </div>
                    );
                })}
            </Paper>
        );
    }
);

export default Seasons;
