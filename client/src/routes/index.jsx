import React from "react";
import { Route, Switch } from "react-router";
import CreateDog from "../components/Form/CreateDog";
import Home from "../views/Home";
import Landing from "../views/Landing";
import Nav from "../components/Nav/Nav"
import DogDetail from "../components/DogDetail";


const index = ({ dog }) => {
    // console.log(dog)
    return(
            <div>
                <Route path='/main' component={Nav} />
                <Switch >
                    <Route exact path='/' component={Landing} />
                    <Route exact path='/main' component={Home} />
                    <Route path='/main/create_dog' component={CreateDog}/>
                    <Route path='/main/detail/:id' component={DogDetail}/>
                </Switch>
            </div>
    );
};
export default index;