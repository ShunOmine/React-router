import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router, Route } from "react-router-dom"

import Layout from "./Layout"
import Featured from "./Featured"
import Archives from "./Archives"
import Settings from "./Settings"

const app = document.getElementById('root');

ReactDOM.render(
    <Router>
        <Layout>
            <Route exact path="/" component={Featured}></Route>
            <Route path="/archives/:article" name="archives" component={Archives}></Route>
            <Route path="/settings" name="settings" component={Settings}></Route>
        </Layout>
    </Router>,
app);
