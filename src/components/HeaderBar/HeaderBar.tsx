import {
    AppBar,
    IconButton,
    InputBase,
    Toolbar,
    Typography,
} from "@material-ui/core";
import { ArrowBack } from "@material-ui/icons";
import SearchIcon from "@material-ui/icons/Search";
import React, { useRef } from "react";
import { Route, useHistory } from "react-router-dom";
import { useStore } from "../../store/StoreProvider";
import { useSearchInputStyles } from "./styles";
import debounce from "lodash.debounce";

export const HeaderBar = () => {
    const history = useHistory();

    return (
        <AppBar position="static">
            <Toolbar>
                <Route path="/show-details/:showId">
                    <IconButton
                        edge="start"
                        color="inherit"
                        aria-label="menu"
                        onClick={() => history.goBack()}
                    >
                        <ArrowBack />
                    </IconButton>
                </Route>

                <Route path="/dashboard">
                    <SearchInput />
                </Route>

                <Typography variant="h6">ABN Amro assignment</Typography>
            </Toolbar>
        </AppBar>
    );
};

const SearchInput = () => {
    const classes = useSearchInputStyles();
    const { show: showStore } = useStore();
    const { current: searchShows } = useRef(
        debounce((searchTerm: string) => showStore.searchShows(searchTerm), 300)
    );

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
                onChange={({ target: { value } }) => searchShows(value)}
            />
        </div>
    );
};

export default HeaderBar;
