import React, { Component } from "react";

export default class LabelSuccess extends Component {
    render() {
        const paddingf = {
            padding: '0px 3px 0px 0px'
        };
        return (
            <span className="label label-success">
                <i className="fa fa-check" style={paddingf} />
                Kích hoạt
            </span>
        );
    }
}
