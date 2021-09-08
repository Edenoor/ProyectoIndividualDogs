import React from "react";
import { Route, Switch } from "react-router";
import CreateDog from "../components/Form/CreateDog";
import Home from "../views/Home";
import Landing from "../views/Landing";
import Nav from "../components/Nav/Nav"


const index = ({ dog }) => {
    return(
            <div>
                <Route path='/main' component={Nav} />
                <Switch >
                    <Route exact path='/' component={Landing} />
                    <Route exact path='/main' component={Home} />
                    <Route path='/main/create_dog' component={CreateDog}/>
                </Switch>
            </div>
    );
};
export default index;