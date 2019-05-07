import React, { Component } from "react";

class LoginPage extends Component {

    render() {
        return (
            <div className="login-box">
                <div className="login-logo">
                    <a href="../../index2.html">
                        <b>Admin</b>

                    </a>
                </div>
                <div className="login-box-body">
                    <p className="login-box-msg">Đăng nhập quản trị website</p>
                    <form>
                        <div className="form-group has-feedback">
                            <input

                                type="text"
                                className="form-control"
                                placeholder="Tên đăng nhập "
                                name="username"
                            />
                            <span className="glyphicon glyphicon-envelope form-control-feedback" />
                        </div>
                        <div className="form-group has-feedback">
                            <input

                                type="password"
                                className="form-control"
                                placeholder="Password"
                                name="password"
                            />
                            <span className="glyphicon glyphicon-lock form-control-feedback" />
                        </div>
                        <button

                            type="submit"
                            className="btn btn-primary btn-block btn-flat"
                        >
                            Đăng nhập
                        </button>
                    </form>
                </div>
            </div>
        );
    }
}
export default LoginPage;
