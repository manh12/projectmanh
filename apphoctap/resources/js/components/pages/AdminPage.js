import React, { Component } from "react";
import { Route, Switch, Redirect } from "react-router-dom";
// layout
import Footer from "./layouts/Footer";
import Aside from "./layouts/Aside";
import Header from "./layouts/Header";
// Route Module

import MainUser from "../modules/user/MainUser";
import MainSlide from "../modules/slide/MainSlide";
import MainPage from "../modules/page/MainPage";
import Page from "../modules/page/components/CreatePage";
export default class AdminPage extends Component {
    render() {

        return (
            <React.Fragment>
                <Header />
                <div className="content-wrapper">
                    <section className="content-header">
                        <h1>|</h1>
                        <ol className="breadcrumb">
                            <li>
                                <a href="#">
                                    <i className="fa fa-dashboard" /> Trung tâm
                                </a>
                            </li>
                            <li className="active">Dashboard</li>
                        </ol>
                    </section>
                    <section className="content">
                        <Switch>

                            <Route path="/panel/user" component={MainUser} />
                            <Route path="/panel/slider" component={MainSlide}/>
                            <Route path="/panel/main-page" component={MainPage}/>
                            <Route
                                path="/panel/page"
                                component={Page}
                            />
                        </Switch>

                    </section>
                </div>
                <Aside />
                <Footer/>
            </React.Fragment>
        );
    }
}


