import React, { Component } from 'react';
import {connect} from 'react-redux';
import *as actions from './../../actions/index';
import swal from 'sweetalert';
import axios from "axios";
class Add extends Component {
    constructor(){
        super();
        this.state = {
            id:'',
            name:'',
            description:''
        }

        this.onChange = this.onChange.bind(this);
        this.onSubmit = this.onSubmit.bind(this);
        this.onExitForm = this.onExitForm.bind(this);

    }
    componentWillMount() {
        if (this.props.Cate) {
            this.setState({
                id:this.props.Cate.id,
                name:this.props.Cate.name,
                description:this.props.Cate.description
            });
            // console.log(this.state);
        }
    }
    componentWillReceiveProps(nextProps) {
        if (nextProps && nextProps.Cate) {
            this.setState({
                id:nextProps.Cate.id,
                name:nextProps.Cate.name,
                description:nextProps.Cate.description
            });
            // console.log(this.state);
        }
    }
// hàm submit form thêm sửa
    onSubmit(event){
        event.preventDefault();
        var check = this.state.id;
        // console.log(check);
        this.props.onSubmit(this.state);
        if (check ==='') {
            axios.post('/api/catedoc',this.state).then(response=>{
            }).then(error=>{
            })
            this.sweeralertSucces();
        }
        else {
            axios.put('/api/catedoc/'+check,this.state).then(response=>{

            }).then(error=>{
                console.log(error);
            })
            this.sweeralertupdate();
        }
        this.onExitForm();

    }
    //hàm thông báo
    sweeralertSucces(){
        swal("thêm thành công!", "Ấn vào ok để quay lại trang!", "success");
    }
    sweeralertupdate(){
        swal("Sửa thành công!", "Ấn vào ok để quay lại trang!", "success");
    }
onChange (event){
    var target = event.target;
    var name = target.name;
    var value = target.value;
    this.setState({
        [name]:value
    });
}
// hàm đóng form thêm
    onExitForm (){
        this.props.onCloseForm();
    }

    render() {
        // var CateUpdate = this.state;
        // console.log(CateUpdate);
        return (
           <div>
               <div className="panel-heading">
                   <h3 className="panel-title" >
                       {/*{id !== '' ? 'Cập Nhật' : 'Thêm mới'}*/}
                   </h3>
               </div>
                <form onSubmit={this.onSubmit} >
                    <div className="form-group">
                        <label>Tên Loại Tài Liệu</label>
                        <input className="form-control"  name="name" onChange={this.onChange} value={this.state.name}/>
                    </div>
                    <div className="form-group">
                        <label>Mô Tả</label>
                        <textarea className="form-control" rows={3}  name="description"  onChange={this.onChange} value={this.state.description}/>
                    </div>
                    <button type="submit" className="btn btn-primary"  >Lưu Lại</button>
                    <button type="submit" className="btn btn-danger">Hủy</button>
                </form>
            </div>
        );
    }
}
const mapDispatchToProps =(dispatch, props)=>{
    return{
        onCloseForm:()=>{
            dispatch(actions.closeForm());
        }
    }
};
export default connect(null,mapDispatchToProps)(Add);
