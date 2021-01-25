import {
    Avatar,
    List,
    ListItem,
    ListItemAvatar,
    ListItemText,
} from "@material-ui/core";
import CalendarTodayIcon from "@material-ui/icons/CalendarToday";
import CategoryIcon from "@material-ui/icons/Category";
import HouseIcon from "@material-ui/icons/House";
import LanguageIcon from "@material-ui/icons/Language";
import TimerIcon from "@material-ui/icons/Timer";
import React from "react";
import Card from "./Card";
import { useInfoStyles } from "./styles";
import { ShowDetails } from "./types";

export const Info: React.FC<ShowDetails> = ({ showModel }) => {
    const classes = useInfoStyles();

    const { language, genres, runtime, premiered, network } = showModel.show;

    return (
        <Card title="Info">
            <List className={classes.listContaier}>
                <ListItem>
                    <ListItemAvatar>
                        <Avatar className={classes.avatar}>
                            <TimerIcon />
                        </Avatar>
                    </ListItemAvatar>
                    <ListItemText primary="Runtime" secondary={runtime} />
                </ListItem>

                <ListItem>
                    <ListItemAvatar>
                        <Avatar className={classes.avatar}>
                            <LanguageIcon />
                        </Avatar>
                    </ListItemAvatar>
                    <ListItemText primary="Language" secondary={language} />
                </ListItem>

                <ListItem>
                    <ListItemAvatar>
                        <Avatar className={classes.avatar}>
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
                        <Avatar className={classes.avatar}>
                            <CalendarTodayIcon />
                        </Avatar>
                    </ListItemAvatar>
                    <ListItemText primary="Premiered" secondary={premiered} />
                </ListItem>

                <ListItem>
                    <ListItemAvatar>
                        <Avatar className={classes.avatar}>
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
