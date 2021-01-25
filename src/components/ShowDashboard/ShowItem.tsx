import {
    Card,
    CardActionArea,
    CardContent,
    CardMedia,
    Typography,
} from "@material-ui/core";
import { observer } from "mobx-react";
import React from "react";
import { Link, useHistory } from "react-router-dom";
import { Ishow } from "../../services/ShowService/types";
import Rating from "../Rating/Rating";
import { useShowItemStyles } from "./styles";

export const ShowItem: React.FC<Ishow> = observer(
    ({ id, name, image, rating: { average: showRating } }) => {
        const classes = useShowItemStyles();
        const history = useHistory();

        return (
            <Card
                className={classes.container}
                onClick={() => history.push(`/show-details/${id}`)}
            >
                <CardActionArea>
                    <CardMedia
                        className={classes.media}
                        image={image && (image.medium || image.original)}
                        title={name}
                    />
                    <CardContent className={classes.cardContent}>
                        <Typography gutterBottom variant="body2" component="p">
                            {name}
                        </Typography>

                        <Rating rating={showRating} />
                    </CardContent>
                </CardActionArea>
            </Card>
        );
    }
);

export default ShowItem;
