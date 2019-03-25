import React, { Component } from 'react';
class search extends Component {
    render() {
        return (
            <div className="profile-sidebar">
                <div className="profile-userpic">
                    <img src="http://placehold.it/50/30a5ff/fff" className="img-responsive" alt />
                </div>
                <div className="profile-usertitle">
                    <div className="profile-usertitle-name">Username</div>
                    <div className="profile-usertitle-status"><span className="indicator label-success" />Online</div>
                </div>
                <div className="clear" />
            </div>

        );
    }
}
export default search;
