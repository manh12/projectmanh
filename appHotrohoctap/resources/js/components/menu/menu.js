import React, { Component } from 'react';
class menu extends Component {
    render() {
        return (

            <ul className="nav menu">
                <li className="active"><a href="index.html"><em className="fa fa-dashboard">&nbsp;</em> Dashboard</a></li>
                <li><a href="widgets.html"><em className="fa fa-calendar">&nbsp;</em> Widgets</a></li>
                <li><a href="charts.html"><em className="fa fa-bar-chart">&nbsp;</em> Charts</a></li>
                <li><a href="elements.html"><em className="fa fa-toggle-off">&nbsp;</em> UI Elements</a></li>
                <li><a href="panels.html"><em className="fa fa-clone">&nbsp;</em> Alerts &amp; Panels</a></li>
                <li className="parent "><a data-toggle="collapse" href="#sub-item-1">
                    <em className="fa fa-navicon">&nbsp;</em> Multilevel <span data-toggle="collapse" href="#sub-item-1" className="icon pull-right"><em className="fa fa-plus" /></span>
                </a>
                    <ul className="children collapse" id="sub-item-1">
                        <li><a className href="#">
                            <span className="fa fa-arrow-right">&nbsp;</span> Sub Item 1
                        </a></li>
                        <li><a className href="#">
                            <span className="fa fa-arrow-right">&nbsp;</span> Sub Item 2
                        </a></li>
                        <li><a className href="#">
                            <span className="fa fa-arrow-right">&nbsp;</span> Sub Item 3
                        </a></li>
                    </ul>
                </li>
                <li><a href="login.html"><em className="fa fa-power-off">&nbsp;</em> Logout</a></li>
            </ul>
        );
    }
}
export default menu;
