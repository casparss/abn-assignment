import {
    Card,
    CardActionArea,
    CardContent,
    CardMedia,
    Typography,
} from "@material-ui/core";
import { observer } from "mobx-react";
import React from "react";
import { Link } from "react-router-dom";
import { Ishow } from "tvmaze-api-ts";
import Rating from "../Rating/Rating";
import { useShowItemStyles } from "./styles";

export const ShowItem: React.FC<Ishow> = observer(
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

export default ShowItem;
