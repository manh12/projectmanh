import React,{Component} from "react";
import imagesDefault  from "../../../../common/images/macdinh.jpg";
import LabelSuccess from "../../../../common/button/LabelSuccess";
import LabelWarning from "../../../../common/button/LabelWarning";
import {connect} from "react-redux";
import {deleteSliderRequest,editslider} from "../../execut/action";

class ItemListSlider extends Component{
    onDelete(id) {
        swal({
            title: "Bạn chắc chắn muốn xóa ảnh này ?",
            text: "Nhấn <Tiếp tục> thực hiện thao tác !",
            icon: "warning",
            buttons: {
                cancel: true,
                text: "Tiếp tục"
            },
            dangerMode: true
        }).then(willDelete => {
            if (willDelete) {
                this.props.deleteSlider(id);
            }
        });
    }
    render() {
        const {slider} = this.props;
        // console.log(slider);
        return (
            <tr>
                <td>#{slider.id}</td>
                <td>
                    <img  src={slider.images?`../uploads/slider/${slider.images}`:imagesDefault} width={100} height={100} />
                </td>
                <td>
                    <p>
                        Tiêu đề :<strong> {slider.title}</strong>
                    </p>
                    <p>
                        <small> Liên kết :

                            <a href=""> {slider.link}</a>
                        </small>
                    </p>
                </td>

                <td>
                    {slider.status == 1 ? <LabelSuccess /> : <LabelWarning />}
                </td>
                <td>
                    <div className="btn-group">
                        <button
                            type="button"
                            className="btn btn-danger btn-flat"
                            onClick={this.onDelete.bind(this, slider.id)}
                        >
                            <i className="fa fa-times" />
                        </button>
                        <button
                            type="button"
                            className="btn btn-default btn-flat"
                            data-toggle="modal"
                            data-target={"#modal-" + slider.id}
                            onClick={ this.props.onModalEdit.bind(this,slider.id) }
                        >
                            <i className="fa fa-pencil-square-o" />
                        </button>
                    </div>
                </td>
            </tr>
        );
    }
}
const mapStateToProps = (state,props)=>{
    return{

    }
}
const mapDispatchToProps =(dispatch,props)=>{
    return{
        deleteSlider:(id)=>{
            dispatch(deleteSliderRequest(id));
        },
        onModalEdit:(id)=>{
            dispatch(editslider(id));
        }
    }
}
export default connect(mapStateToProps,mapDispatchToProps)(ItemListSlider);
