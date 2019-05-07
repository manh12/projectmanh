import React, { Component } from "react";
import { connect } from "react-redux";
import { addUserRequest, resetForm } from "../execut/action";

class AddUser extends Component {
    constructor(props) {
        super(props);
        this.state = {
            name: "",
            username: "",
            password: "",
            email: "",
            role: "",
            status: false
        };
    }

    handleChange(e) {
        var target = e.target;
        var name = target.name;
        var value = target.type === "checkbox" ? target.checked : target.value;
        this.setState({
            [name]: value
        });
    }
    onSave(e) {
        e.preventDefault();
        this.props.addUser(this.state);
    }

    componentWillReceiveProps(nextProps) {
        if (nextProps.reset == true) {
            document.getElementById("form-user").reset();
        }
    }
    componentDidUpdate(prevProps) {
        this.props.resetFalse();
    }
    render() {
        const { errors } = this.props;
        return (
            <div className="col-md-4">
                <div className="box box-primary">
                    <div className="box-header with-border">
                        <h3 className="box-title">THÀNH VIÊN</h3>
                    </div>
                    <form id="form-user">
                        <div className="box-body">
                            <div
                                className={
                                    errors.username !== undefined
                                        ? "form-group has-error"
                                        : "form-group"
                                }
                            >
                                <label>
                                    Đăng nhập{" "}
                                    <sup className="text-red">*yêu cầu</sup>
                                </label>
                                <input
                                    type="text"
                                    className="form-control"
                                    name="username"
                                    onChange={this.handleChange.bind(this)}
                                />
                                <span className="help-block">
                                    {errors.username}
                                </span>
                            </div>
                            <div
                                className={
                                    errors.password !== undefined
                                        ? "form-group has-error"
                                        : "form-group"
                                }
                            >
                                <label>
                                    Mật khẩu{" "}
                                    <sup className="text-red">*yêu cầu</sup>
                                </label>
                                <input
                                    type="password"
                                    className="form-control"
                                    name="password"
                                    onChange={this.handleChange.bind(this)}
                                />
                                <span className="help-block">
                                    {errors.password}
                                </span>
                            </div>
                            <div className="form-group">
                                <label>Họ tên</label>
                                <input
                                    type="text"
                                    className="form-control"
                                    name="name"
                                    onChange={this.handleChange.bind(this)}
                                />
                            </div>
                            <div
                                className={
                                    errors.email !== undefined
                                        ? "form-group has-error"
                                        : "form-group"
                                }
                            >
                                <label>Email </label>
                                <input
                                    type="text"
                                    className="form-control"
                                    name="email"
                                    onChange={this.handleChange.bind(this)}
                                />
                                <span className="help-block">
                                    {errors.email}
                                </span>
                            </div>
                            <div
                                className={
                                    errors.role !== undefined
                                        ? "form-group has-error"
                                        : "form-group"
                                }
                            >
                                <label>
                                    Vai trò{" "}
                                    <sup className="text-red">*yêu cầu</sup>
                                </label>
                                <select
                                    type="text"
                                    defaultValue=""
                                    className="form-control"
                                    name="role"
                                    onChange={this.handleChange.bind(this)}
                                >
                                    <option value="" disabled>
                                        -- Vai trò quản trị --
                                    </option>
                                    <option value={0}>- Thành viên</option>
                                    <option value={1}>- Quản trị viên</option>
                                </select>
                                <span className="help-block">
                                    {errors.role}
                                </span>
                            </div>
                        </div>
                        <div className="box-footer">
                            <button
                                type="submit"
                                className="btn btn-primary btn-flat pull-right"
                                onClick={this.onSave.bind(this)}
                            >
                                Thêm mới
                            </button>
                            <div className="checkbox pull-left">
                                <label>
                                    <input
                                        type="checkbox"
                                        defaultValue={false}
                                        name="status"
                                        onChange={this.handleChange.bind(this)}
                                    />
                                    <small>Trạng thái</small>
                                </label>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        );
    }
}

const mapStateToProps = (state, ownProps) => {
    return {
        errors: state.users.errors,
        reset: state.users.reset
    };
};
const mapDispatchToProps = (dispatch, ownProps) => {
    return {
        addUser: user => {
            dispatch(addUserRequest(user));
        },
        resetFalse: () => {
            dispatch(resetForm());
        }
    };
};
export default connect(
    mapStateToProps,
    mapDispatchToProps
)(AddUser);
