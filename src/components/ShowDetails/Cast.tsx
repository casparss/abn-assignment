import React from "react";
import { ShowDetails } from "./types";
import { observer } from "mobx-react";
import { CircularProgress, Paper, Typography } from "@material-ui/core";

export const Cast: React.FC<ShowDetails> = observer(
    ({ showModel: { cast, isFetchCastInFlight } }) => {
        if (isFetchCastInFlight) {
            return <CircularProgress />;
        }

        return (
            <Paper>
                <Typography>Cast</Typography>

                {cast.map(({ person }) => {
                    return (
                        <div>
                            <Typography>{person.country.name}</Typography>
                        </div>
                    );
                })}
            </Paper>
        );
    }
);

export default Cast;
