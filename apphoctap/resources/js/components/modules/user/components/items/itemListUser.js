import React, { Component } from "react";
import LabelSuccess from "../../../../common/button/LabelSuccess";
import LabelWarning from "../../../../common/button/LabelWarning";
import {
    deleteIdUserRequest,
    // openModalUser,
    getIdUser
} from "../../execut/action";
import { connect } from "react-redux";
import swal from "sweetalert";
import StartIcon from "../../../../common/customs/StartIcon";

class ItemListUser extends Component {
    onDelete(e) {
        swal({
            title: "Bạn có chắc chắn ?",
            text: "Xóa tất cả thông tin thành viên này !",
            icon: "warning",
            buttons: {
                cancel: true,
                text: "Tiếp tục"
            },
            dangerMode: true
        }).then(willDelete => {
            if (willDelete) {
                this.props.deleteUser(e);
            }
        });
    }
    onEdit(id) {
        this.props.getIdUser(id);
        console.log(id);
    }

    render() {
        const { user, index } = this.props;

        return (
            <tr>
                <td>{index + 1}</td>
                <td>
                    <p>Họ tên : {user.name}</p>
                    <p>
                        Đăng nhập : <strong> {user.username}</strong>
                    </p>
                </td>
                <td>
                    <p>
                        {user.role == 1 ? (
                            <StartIcon color="text-red" name="Quản trị viên" />
                        ) : (
                            <StartIcon color="text-yellow" name="Thành viên" />
                        )}
                    </p>

                    <p>
                        <small>
                            Khởi tạo :
                            <span className="text-muted">
                                {" "}
                                {user.created_at}
                            </span>
                        </small>
                    </p>
                </td>
                <td>
                    {user.status == 1 ? <LabelSuccess /> : <LabelWarning />}
                </td>
                <td>
                    <div className="btn-group">
                        <button
                            onClick={this.onDelete.bind(this, user.id)}
                            type="button"
                            className="btn btn-danger btn-flat"
                        >
                            <i className="fa fa-times" />
                        </button>
                        <button
                            type="button"
                            className="btn btn-default btn-flat"
                            onClick={this.onEdit.bind(this, user.id)}
                            data-toggle="modal"
                            data-target={"#modal" + index}
                        >
                            <i className="fa fa-pencil-square-o" />
                        </button>
                    </div>
                </td>
            </tr>
        );
    }
}

const mapStateToProps = (state, ownProps) => {
    return {
        prop: state.prop
    };
};
const mapDispatchToProps = (dispatch, ownProps) => {
    return {
        deleteUser: id => {
            dispatch(deleteIdUserRequest(id));
        },
        // openModalID: id => {
        //     dispatch(openModalUser(id));
        // },
        getIdUser: id => {
            dispatch(getIdUser(id));
        }
    };
};
export default connect(
    mapStateToProps,
    mapDispatchToProps
)(ItemListUser);
