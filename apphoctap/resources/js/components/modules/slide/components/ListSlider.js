import React,{Component} from "react";
import {connect} from "react-redux";
import {getSliderRequest,loadSliderPagi} from "../execut/action";
import ItemListSlider from "./items/ItemListSlider";
import Pagination from "react-js-pagination";
import ModalSlider from "./ModalSlider";
class ListSlider extends Component{
    componentDidMount() {
        this.props.getAllSlider();
    }
    onChangePagi (e){
        this.props.pagi(e);
    }
    render() {
        const pre_page = this.props.pagination.per_page;
        const total = this.props.pagination.total;
        const current_page = this.props.pagination.current_page;
        const display_page = Math.ceil(total/pre_page);
        const listSlider = this.props.sliders.map((slider,index)=>{
            return <ItemListSlider
               key={index}
               slider = {slider}
            />
        });
        return(
            <div className="col-md-8">
                <div className="box box-primary">
                    <div className="box-header">
                        <h3 className="box-title">DANH SÁCH</h3>
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
                    <div className="box-body table-responsive no-padding">
                        <table className="table table-hover ">
                            <tbody>
                            <tr>
                                <th className="col-md-1">STT</th>
                                <th className="col-md-2">Ảnh hiện thị</th>
                                <th className="col-md-5">Thông tin</th>
                                <th className="col-md-2">Trạng thái</th>
                                <th className="col-md-2">Thao tác</th>
                            </tr>
                            {listSlider}
                            </tbody>
                        </table>
                        <ModalSlider />
                    </div>
                </div>
            </div>
        );
    }
}
const mapStateToProps = (state,ownProps)=>{
    return{
        sliders:state.sliders.sliders,
        pagination:state.sliders.pagination
    };
};
const mapDispatchToProps = (dispatch,ownProps) =>{
    return{
        getAllSlider:()=>{
            dispatch(getSliderRequest());
        },
        pagi:(num)=>{
            dispatch(loadSliderPagi(num));
        }
    };
};
export default connect(mapStateToProps,mapDispatchToProps)(ListSlider);
