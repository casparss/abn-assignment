import {
    Avatar,
    List,
    ListItem,
    ListItemAvatar,
    ListItemText,
    Paper,
    Typography,
} from "@material-ui/core";
import ImageIcon from "@material-ui/icons/Image";
import React from "react";
import { ShowDetails } from "./types";
import { useInfoStyles } from "./styles";
import Card from "./Card";

export const Info: React.FC<ShowDetails> = ({ showModel }) => {
    const classes = useInfoStyles();

    const {
        language,
        genres,
        runtime,
        premiered,
        officialSite,
        //@ts-ignore
        network,
    } = showModel.show;

    return (
        <Card title="Info">
            <List className={classes.listContaier}>
                <ListItem>
                    <ListItemAvatar>
                        <Avatar>
                            <ImageIcon />
                        </Avatar>
                    </ListItemAvatar>
                    <ListItemText primary="Photos" secondary="Jan 9, 2014" />
                </ListItem>

                <ListItem>
                    <ListItemText primary="Runtime" secondary={runtime} />
                </ListItem>

                <ListItem>
                    <ListItemText primary="Language" secondary={language} />
                </ListItem>

                <ListItem>
                    <ListItemText
                        primary="Genres"
                        secondary={genres.join(", ")}
                    />
                </ListItem>

                <ListItem>
                    <ListItemText primary="Premiered" secondary={premiered} />
                </ListItem>

                <ListItem>
                    <ListItemText primary="Network" secondary={network.name} />
                </ListItem>

                <ListItem button component="a" href={officialSite}>
                    <ListItemText primary="Official site" />
                </ListItem>
            </List>
        </Card>
    );
};

export default Info;
