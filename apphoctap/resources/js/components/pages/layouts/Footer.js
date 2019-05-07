import React, { Component } from "react";

export default class Footer extends Component {
    render() {
        return (
            <footer className="main-footer">
                <div className="pull-right hidden-xs">
                    <b>Phiên bản</b> demo
                </div>
                <strong>
                    Copyright © 2019 <a href="#">vanmanh</a>.
                </strong>
            </footer>
        );
    }
}
