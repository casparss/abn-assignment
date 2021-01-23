import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
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
                    <Route path="/">
                        <ShowDashboard />
                    </Route>

                    <Route path="/show-details">
                        <ShowDetails />
                    </Route>
                </Switch>
            </main>

            <footer></footer>
        </Router>
    );
};

export default App;
