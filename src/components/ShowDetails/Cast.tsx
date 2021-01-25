import { Avatar, Chip, CircularProgress } from "@material-ui/core";
import { observer } from "mobx-react";
import React from "react";
import Card from "./Card";
import { useCastStyles } from "./styles";
import { ShowDetails } from "./types";

export const Cast: React.FC<ShowDetails> = observer(
    ({ showModel: { cast, isFetchCastInFlight } }) => {
        const classes = useCastStyles();

        if (isFetchCastInFlight) {
            return <CircularProgress />;
        }

        return (
            <Card title="Cast" mainStyle={classes.main}>
                {cast.map(({ person: { name, image } }) => (
                    <CastItem
                        name={name}
                        image={image?.medium || image?.original}
                    />
                ))}
            </Card>
        );
    }
);

const CastItem: React.FC<{ name: string; image: string }> = ({
    name,
    image,
}) => (
    <Chip
        avatar={<Avatar alt="Remy Sharp" src={image} />}
        label={name}
        variant="outlined"
    />
);

export default Cast;
