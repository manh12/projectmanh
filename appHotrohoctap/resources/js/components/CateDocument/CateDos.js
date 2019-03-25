import React, { Component } from 'react';
import axios from "axios";
import Add from './Add';
import List from './List';
import *as actions from './../../actions/index';
import swal from 'sweetalert';
import {connect} from 'react-redux';

class CateDos extends Component {
    constructor(props) {
        super(props);
        this.state = {
            CateDocument:[],
            CateDosUpdate:null,
            url:'/api/catedoc',
            pagination:[]
        };
        this.ontongleform = this.ontongleform.bind(this);
        this.onSubmit = this.onSubmit.bind(this);
        this.onUpdate = this.onUpdate.bind(this);
        this.findIndex = this.findIndex.bind(this);
        this.onOpenForm = this.onOpenForm.bind(this);
       this.onDelete = this.onDelete.bind(this);

    }
    componentWillMount() {
        this.fetchCate();
    }
    fetchCate(){
        axios.get(this.state.url).then(response=>{
            this.setState({
                CateDocument:response.data.data,
                url:response.data.next_page_url
            })
            this.makePagination(response.data);
        }).then(error=>{
            // console.log(error);
        })
    }
    // button phân trang
    loadMore(){
        this.setState({
            url:this.state.pagination.next_page_url
        })
        this.fetchCate()
    }
    makePagination(data){
        let pagination = {
            current_page:data.current_page,
            last_page:data.last_page,
            next_page_url:data.next_page_url,
            prev_page_url:data.prev_page_url
        }
        this.setState({
            pagination:pagination
        })
    }
    // hàm submit form thêm, sửa
    onSubmit(data){
        var {CateDocument} = this.state;
        if(data.id ===''){
            // data.id = this.generateID();
            CateDocument.push(data);
        }else {
            var index = this.findIndex(data.id);
            CateDocument[index] = data;
        }
        // data.id = this.generateID();
        // task.push(data);
        this.setState({
            CateDocument: CateDocument,
            CateDosUpdate:null
        });
         // var {CateDocument} = this.state;
         // CateDocument.push(data)
    }
    //hàm tìm kiếm theo id
    findIndex (id){
        var CateDocument = this.state.CateDocument;

        var result;
        CateDocument.forEach((CateDocument, index) => {
            if (CateDocument.id  === id) {
                result = index ;
            }
        });
        return result;
    }
    //hàm đóng mở form khi thay đổi state
    ontongleform (){
        this.props.ontoggleForm();
    }
    //hàm mở form thêm
    onOpenForm(){
        this.props.onOpenForm();
    }
    // hàm cập nhật Catedocument
    onUpdate(id){
        // var CateDocument = this.state.CateDocument;
        // var CateEdit = CateDocument.filter(i=>i.id === id);
        // this.setState({
        //     CateDosUpdate:CateEdit
        // });
        // console.log(this.state.CateDosUpdate);
        var CateDocument = this.state.CateDocument;
        var index = this.findIndex(id);
        // console.log(index);
        var CateDos = CateDocument[index];
        // console.log(CateDos);
        this.setState({
            CateDosUpdate:CateDos
        });
        // console.log(this.state.CateDosUpdate);
        this.onOpenForm();
    }
    //hàm xóa Catedocument
    onDelete(id){
        var CateDocument = this.state.CateDocument;
        var index = this.findIndex(id);
        var CateDos = CateDocument[index];
        var newCateDos = CateDocument.slice();
        newCateDos.splice(CateDos,1);
        axios.delete('/api/catedoc/'+id).then(response=>{
            this.setState({
                CateDocument:newCateDos
            })
        }).then(error=>{
            console.log(error);
        })
        this.sweeralertSucces();
    }
    sweeralertSucces(){
        swal("xóa thành công!", "Ấn vào ok để quay lại trang!", "success");
    }
    render() {
        var CateDocument = this.state.CateDocument;
        // console.log(CateDocument);
        var CateEdit = this.state.CateDosUpdate;
          // console.log(CateEdit);
        var isDisplayForm = this.props.isDisplayForm;
        var elmdisplayform = isDisplayForm?<Add
            onSubmit={this.onSubmit}
           Cate = {CateEdit}/> : '';
        return (
            <div className="col-sm-9 col-sm-offset-3 col-lg-10 col-lg-offset-2 main">
                <div className="row">
                    <ol className="breadcrumb">
                        <li><a href="#">
                            <em className="fa fa-home" />
                        </a></li>
                        <li className="active">Tài Liệu</li>
                    </ol>
                </div>{/*/.row*/}
                <div className="panel panel-default">
                    <div className="panel-heading"> Thêm Loại Tài Liệu</div>
                    <div className="panel-body">
                        <div className="row">
                            <div className={isDisplayForm ? 'col-xs-4 col-sm-4 col-md-4 col-lg-4' : ''}>

                                {elmdisplayform}

                            </div>

                            <div className={isDisplayForm ? 'col-xs-8 col-sm-8 col-md-8 col-lg-8' : 'col-xs-12 col-sm-12 col-md-12 col-lg-12'}>
                                <button className="btn btn-warning " onClick={this.ontongleform}>
                                    <span className="fa fa-plus mr-5">{isDisplayForm?'Hiện Thị':'Thêm Mới'}</span>
                                </button>
                                <div className="row mt-15">
                                </div>
                                <List
                                    CateDocument={CateDocument}
                                    onUpdate={this.onUpdate}
                                    onDelete={this.onDelete}
                                />

                            </div>
                        </div>

                    </div>
                </div>
                <button className="btn btn-primary" onClick={this.loadMore.bind(this)}>xem tiếp >></button>
            </div>
        );
    }
}
const mapStateToProps=(state)=>{
    return{
        isDisplayForm:state.isDisplayForm
    }
};
const mapDispatchToProps =(dispatch,props)=>{
    return{
        ontoggleForm:()=>{
            dispatch(actions.toggleForm());
        },
        onOpenForm:()=>{
            dispatch(actions.openForm());
        }
    }
}
export default connect(mapStateToProps,mapDispatchToProps)(CateDos);
