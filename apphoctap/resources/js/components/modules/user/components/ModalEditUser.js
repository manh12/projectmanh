import React, { Component } from "react";
import { connect } from "react-redux";
import { updateUserRequest } from "../execut/action";
class ModalEditUser extends Component {
    onUpdate(e) {
        e.preventDefault();
        const name = this.refs.name.value;
        const username = this.refs.username.value;
        // const password = this.refs.password.value;
        const email = this.refs.email.value;
        const role = this.refs.role.value;
        const status = this.refs.status.checked;
        const data = {
            name,
            username,
            email,
            role,
            status
        };
        // Send data / id to action
        this.props.updateUser(this.props.userEdit.id, data);
        // Close modals
        $("#modal" + this.props.idModal).modal("hide");
        $(".modal-backdrop").remove();
    }

    render() {
        const userEdit = this.props.idModal;
        console.log(userEdit);
        return (
            <div className="modal fade in" id={"modal" + this.props.idModal}>
                <div className="modal-dialog">
                    <div className="modal-content">
                        <div className="modal-header">
                            <button
                                type="button"
                                className="close"
                                data-dismiss="modal"
                                aria-label="Close"
                            >
                                <span aria-hidden="true">×</span>
                            </button>
                            <h4 className="modal-title">
                                <strong>CẬP NHẬT THÔNG TIN</strong>
                            </h4>
                        </div>
                        <form role="form" onSubmit={this.onUpdate.bind(this)}>
                            <div className="modal-body">
                                <div className="form-group">
                                    <label>Họ tên</label>
                                    <input
                                        defaultValue={this.props.userEdit.name}
                                        ref="name"
                                        type="text"
                                        className="form-control"
                                    />
                                </div>
                                <div className="form-group">
                                    <label>Tên đăng nhập</label>
                                    <input
                                        type="text"
                                        className="form-control"
                                        defaultValue={
                                            this.props.userEdit.username
                                        }
                                        ref="username"
                                    />
                                </div>
                                <div className="form-group">
                                    <label>Email</label>
                                    <input
                                        type="email"
                                        className="form-control"
                                        ref="email"
                                        defaultValue={this.props.userEdit.email}
                                    />
                                </div>
                                <div className="form-group">
                                    <label>Vai trò</label>
                                    <select
                                        className="form-control"
                                        ref="role"
                                        defaultValue={this.props.userEdit.role}
                                    >
                                        <option value="" disabled>
                                            -- chọn vai trò quản trị --
                                        </option>
                                        <option value={0}>- Thành viên</option>
                                        <option value={1}>
                                            - Quản trị viên
                                        </option>
                                    </select>
                                </div>
                                <div className="checkbox">
                                    <label>
                                        <input
                                            ref="status"
                                            type="checkbox"
                                            defaultValue={
                                                this.props.userEdit.status
                                            }
                                            defaultChecked={
                                                this.props.userEdit.status
                                            }
                                        />
                                        kích hoạt
                                    </label>
                                </div>
                            </div>
                            <div className="modal-footer">
                                <button
                                    type="button"
                                    className="btn btn-default pull-left"
                                    data-dismiss="modal"
                                >
                                    Đóng
                                </button>
                                <button
                                    type="submit"
                                    className="btn btn-primary"
                                >
                                    Cập nhật
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        );
    }
}

const mapStateToProps = (state, ownProps) => {
    return {
        idModal: state.users.idModal,
        userEdit: state.users.userEdit
    };
};
const mapDispatchToProps = (dispatch, ownProps) => {
    return {
        updateUser: (id, user) => {
            dispatch(updateUserRequest(id, user));
        }
    };
};
export default connect(
    mapStateToProps,
    mapDispatchToProps
)(ModalEditUser);
