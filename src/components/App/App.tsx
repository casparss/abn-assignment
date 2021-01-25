import React from "react";
import {
    BrowserRouter as Router,
    Redirect,
    Route,
    Switch,
} from "react-router-dom";
import HeaderBar from "../HeaderBar";
import ShowDashboard from "../ShowDashboard";
import ShowDetails from "../ShowDetails";
import useStyles from "./styles";

const App = () => {
    const styles = useStyles();

    return (
        <Router>
            <HeaderBar />

            <main className={styles.main}>
                <Switch>
                    <Route exact path="/">
                        <Redirect to="/dashboard" />
                    </Route>

                    <Route path="/dashboard">
                        <ShowDashboard />
                    </Route>

                    <Route path="/show-details/:showId">
                        <ShowDetails />
                    </Route>
                </Switch>
            </main>

            <footer></footer>
        </Router>
    );
};

export default App;
