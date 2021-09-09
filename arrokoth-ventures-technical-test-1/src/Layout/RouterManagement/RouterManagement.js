import React,{useState,useEffect} from 'react';
import { BrowserRouter as Router, Switch, Route} from 'react-router-dom';

import PageA from "../PageA/PageA"
import PageB from "../PageB/PageB"

const RouterManagement = (props) => {

    return(
        <div>
            <Switch>
                <Route path="/page-a">
                    <PageA/>
                </Route>
                <Route path="/page-b">
                    <PageB/>
                </Route>
            </Switch>
        </div>
    )
}

export default RouterManagement