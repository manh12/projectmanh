import React,{Component} from "react";
import {connect} from "react-redux";
import {getUserRequest} from "./../execut/action";
import {loadUserPagi} from "./../execut/action";
import ItemListUser from "./items/itemListUser";
import Pagination from "react-js-pagination";
import ModalEditUser from "./ModalEditUser";
class ListUser extends Component{
    // componentWillMount(event) {
    //     this.props.getAllUser(event);
    // }

    componentDidMount(event) {
        this.props.getAllUser(event);
    }
    onChangePagi(event){
        this.props.pagi(event);
    }
    render() {
        const pre_page = this.props.pagination.per_page;
        const total = this.props.pagination.total;
        const current_page = this.props.pagination.current_page;
        const display_page = Math.ceil(total / pre_page);
        const listUser = this.props.users.map((user, index) => {
            return (
                <ItemListUser
                    key={index}
                    index={index}
                    user={user}
                    onEdit={id => this.onEditId(id)}
                />
            );
        });
        // var test = this.props.pagination;
        // console.log(test);
        return(
            <div className="col-md-8">
                <div className="box box-primary">
                    <div className="box-header">
                        <h3 className="box-title"> DANH SÁCH </h3>
                        <div className="box-tools">
                            <Pagination
                                hideDisabled
                                hideNavigation
                                activeClass={""}
                                innerClass={
                                    "pagination pagination-sm no-margin pull-right"
                                }
                                itemsCountPerPage={pre_page}
                                activePage={current_page}
                                totalItemsCount={total}
                                pageRangeDisplayed={display_page}
                                onChange={this.onChangePagi.bind(this)}
                            />
                        </div>
                    </div>
                    <div className="box-body  no-padding">
                        <table className="table table-hover">
                            <tbody>
                            <tr>
                                <th className="col-md-1"> STT </th>
                                <th className="col-md-4"> Thông tin </th>
                                <th className="col-md-3 "> Vai trò </th>
                                <th className="col-md-2"> Trạng thái </th>
                                <th className="col-md-2"> Thao tác </th>
                            </tr>
                            {listUser}
                            </tbody>
                        </table>
                        <ModalEditUser/>
                    </div>
                </div>
            </div>
        );
    }
}
 const mapStateToProps = (state,ownProps)=>{
    return{
        users:state.users.users,
        idModal: state.users.idModal,
        pagination:state.users.pagination
    };
};
const mapDispatchToProps = (dispatch,ownProps) =>{
    return{
        getAllUser: page =>{
            dispatch(getUserRequest(page));
        },
        pagi: page =>{
            dispatch(loadUserPagi(page));
        },
        openId: id => {
            dispatch(openModalUser(id));
        }
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(ListUser);
