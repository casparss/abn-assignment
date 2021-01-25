import React from "react";
import { ShowDetails } from "./types";
import { observer } from "mobx-react";
import { Avatar, CircularProgress, Paper, Typography } from "@material-ui/core";
import { useCastStyles } from "./styles";

export const Cast: React.FC<ShowDetails> = observer(
    ({ showModel: { cast, isFetchCastInFlight } }) => {
        const classes = useCastStyles();

        if (isFetchCastInFlight) {
            return <CircularProgress />;
        }

        return (
            <Paper>
                <Typography variant="h1">Cast</Typography>

                <main className={classes.main}>
                    {cast.map(({ person, person: { image } }) => {
                        // @ts-ignore
                        const name = person.name;
                        return (
                            <div>
                                <Typography>{name}</Typography>
                                <Avatar
                                    alt="Remy Sharp"
                                    src={image?.medium || image?.original}
                                />
                            </div>
                        );
                    })}
                </main>
            </Paper>
        );
    }
);

export default Cast;
