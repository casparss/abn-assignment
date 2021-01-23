import {
    AppBar,
    IconButton,
    InputBase,
    Toolbar,
    Typography,
} from "@material-ui/core";
import { ArrowBack } from "@material-ui/icons";
import SearchIcon from "@material-ui/icons/Search";
import React from "react";
import { Route, useHistory } from "react-router-dom";
import { useStore } from "../../store/StoreProvider";
import { useSearchInputStyles } from "./styles";

export const HeaderBar = () => {
    const history = useHistory();

    return (
        <AppBar position="static">
            <Toolbar>
                <Route path="/stores/user/:userId">
                    <IconButton
                        edge="start"
                        color="inherit"
                        aria-label="menu"
                        onClick={() => history.goBack()}
                    >
                        <ArrowBack />
                    </IconButton>
                </Route>

                <Typography variant="h6">ABN Amro assignment</Typography>

                <SearchInput />
            </Toolbar>
        </AppBar>
    );
};

const SearchInput = () => {
    const classes = useSearchInputStyles();
    const { show: showStore } = useStore();

    return (
        <div className={classes.search}>
            <div className={classes.searchIcon}>
                <SearchIcon />
            </div>
            <InputBase
                placeholder="Search…"
                classes={{
                    root: classes.inputRoot,
                    input: classes.inputInput,
                }}
                inputProps={{ "aria-label": "search" }}
                onChange={({ target: { value } }) =>
                    showStore.searchShows(value)
                }
            />
        </div>
    );
};

export default HeaderBar;
