import React, { Component } from "react";

class header extends Component {

    render() {
        return (
            <header className="main-header">
                <a href="index2.html" className="logo">
                    <span className="logo-mini">
                        <b>app</b>
                    </span>
                    <span className="logo-lg">
                        <b>Thư viện</b>Học tập
                    </span>
                </a>
                <nav className="navbar navbar-static-top">
                    <a
                        href="#"
                        className="sidebar-toggle"
                        data-toggle="push-menu"
                        role="button"
                    >
                        <span className="sr-only">Toggle navigation</span>
                    </a>
                    <div className="navbar-custom-menu">
                        <ul className="nav navbar-nav">
                            <li>
                                <a
                                    href="#"
                                    data-toggle="control-sidebar"

                                >
                                    <i className="fa fa-sign-out" /> Đăng xuất
                                </a>
                            </li>
                        </ul>
                    </div>
                </nav>
            </header>
        );
    }
}
export default header;
