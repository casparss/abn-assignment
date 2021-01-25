import { FormControl, InputLabel, MenuItem, Select } from "@material-ui/core";
import React from "react";
import { FeedType } from "./constants";
import { useDashboardControlStyles } from "./styles";

export const DashboardControls: React.FC<{
    feedTypeSelectChanged: (feedType: FeedType) => void;
    feedType: FeedType;
}> = ({ feedTypeSelectChanged, feedType }) => {
    const classes = useDashboardControlStyles();

    return (
        <div className={classes.container}>
            <FormControl variant="outlined">
                <InputLabel id="feed-type">Feed type</InputLabel>
                <Select
                    labelId="feed-type"
                    value={feedType}
                    onChange={({ target: { value } }) =>
                        feedTypeSelectChanged(value as FeedType)
                    }
                    label="Feed type"
                >
                    <MenuItem value={FeedType.GENRE}>Genre</MenuItem>
                    <MenuItem value={FeedType.RATING}>Rating</MenuItem>
                </Select>
            </FormControl>
        </div>
    );
};

export default DashboardControls;
