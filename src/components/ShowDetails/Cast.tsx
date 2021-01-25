import React from "react";
import { ShowDetails } from "./types";
import { observer } from "mobx-react";
import {
    Avatar,
    Chip,
    CircularProgress,
    Paper,
    Typography,
} from "@material-ui/core";
import { useCastStyles } from "./styles";
import Card from "./Card";

export const Cast: React.FC<ShowDetails> = observer(
    ({ showModel: { cast, isFetchCastInFlight } }) => {
        const classes = useCastStyles();

        if (isFetchCastInFlight) {
            return <CircularProgress />;
        }

        return (
            <Card title="Cast" mainStyle={classes.main}>
                {cast.map(({ person, person: { image } }) => {
                    // @ts-ignore
                    const name = person.name;
                    return (
                        <CastItem
                            name={name}
                            image={image?.medium || image?.original}
                        />
                    );
                })}
            </Card>
        );
    }
);

const CastItem: React.FC<{ name: string; image: string }> = ({
    name,
    image,
}) => {
    const classes = useCastStyles();

    return (
        <Chip
            avatar={<Avatar alt="Remy Sharp" src={image} />}
            label={name}
            variant="outlined"
        />
    );
};

export default Cast;
