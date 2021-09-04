import React from "react";
import { Route, Switch } from "react-router";
import Home from "../views/Home";
import Landing from "../views/Landing";


const index = ({ dog }) => {
    return(
        <Switch >
            <Route exact path='/' component={Landing} />
           <Route exact path='/main' component={Home} />
        </Switch>
    );
};
export default index;