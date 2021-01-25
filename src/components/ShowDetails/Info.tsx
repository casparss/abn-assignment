import {
    Avatar,
    List,
    ListItem,
    ListItemAvatar,
    ListItemText,
} from "@material-ui/core";
import React from "react";
import Card from "./Card";
import { useInfoStyles } from "./styles";
import { ShowDetails } from "./types";
import ImageIcon from "@material-ui/icons/Image";
import TimerIcon from "@material-ui/icons/Timer";
import LanguageIcon from "@material-ui/icons/Language";
import CategoryIcon from "@material-ui/icons/Category";
import CalendarTodayIcon from "@material-ui/icons/CalendarToday";
import HouseIcon from "@material-ui/icons/House";

export const Info: React.FC<ShowDetails> = ({ showModel }) => {
    const classes = useInfoStyles();

    const { language, genres, runtime, premiered, network } = showModel.show;

    return (
        <Card title="Info">
            <List className={classes.listContaier}>
                <ListItem>
                    <ListItemAvatar>
                        <Avatar>
                            <TimerIcon />
                        </Avatar>
                    </ListItemAvatar>
                    <ListItemText primary="Runtime" secondary={runtime} />
                </ListItem>

                <ListItem>
                    <ListItemAvatar>
                        <Avatar>
                            <LanguageIcon />
                        </Avatar>
                    </ListItemAvatar>
                    <ListItemText primary="Language" secondary={language} />
                </ListItem>

                <ListItem>
                    <ListItemAvatar>
                        <Avatar>
                            <CategoryIcon />
                        </Avatar>
                    </ListItemAvatar>
                    <ListItemText
                        primary="Genres"
                        secondary={genres.join(", ")}
                    />
                </ListItem>

                <ListItem>
                    <ListItemAvatar>
                        <Avatar>
                            <CalendarTodayIcon />
                        </Avatar>
                    </ListItemAvatar>
                    <ListItemText primary="Premiered" secondary={premiered} />
                </ListItem>

                <ListItem>
                    <ListItemAvatar>
                        <Avatar>
                            <HouseIcon />
                        </Avatar>
                    </ListItemAvatar>
                    <ListItemText primary="Network" secondary={network?.name} />
                </ListItem>
            </List>
        </Card>
    );
};

export default Info;
