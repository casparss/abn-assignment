import { AppBar, IconButton, Toolbar, Typography } from "@material-ui/core";
import { ArrowBack } from "@material-ui/icons";
import React from "react";
import { Route, useHistory } from "react-router-dom";

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
            </Toolbar>
        </AppBar>
    );
};

export default HeaderBar;
