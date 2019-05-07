import React,{Component} from "react";
import imagesDefault from "../../../../common/images/macdinh.jpg";
import LabelSuccess from "../../../../common/button/LabelSuccess";
import LabelWarning from "../../../../common/button/LabelWarning";
import customs from "../../../../../utils/helper";
import {connect} from "react-redux";
import { getIdPage,deletePageRequest} from "../../execut/action";
class ItemListPage extends Component{
    constructor(props){
        super(props);

    }
    onEdit(id) {
        this.props.getIdPage(id);
        window.location.assign("#/panel/page");
    }
    onDelete (id){
        this.props.ondeletePage(id);
    }
    render() {
        const { page } = this.props;
        return(
            <tr>
                <td>{page.id}</td>

                <td>
                    <img
                        src={page.thumbnail?`../uploads/page/${page.thumbnail}`:imagesDefault}
                        width={100} height={100}
                    />
                </td>
                <td>
                    <img
                        src={page.images?`../uploads/page/${page.images}`:imagesDefault}
                        width={100} height={100}
                    />
                </td>
                <td>
                    <p>
                        Trang :{" "}
                        <strong>{customs._cutString(page.name, 60)}</strong>
                    </p>
                    <p>Tiêu đề : {customs._cutString(page.title, 60)}</p>
                    <p>
                        Đường dẫn :{" "}
                        <small>
                            <a href="/">
                                {customs._cutString(page.slug, 40)}
                                <i className="fa fa-link" aria-hidden="true" />
                            </a>
                        </small>
                    </p>
                </td>

                <td>
                    {page.status == true ? <LabelSuccess /> : <LabelWarning />}
                </td>
                <td>
                    <div className="btn-group">
                        <button
                            type="button"
                            className="btn btn-danger btn-flat"
                            onClick={this.onDelete.bind(this, page.id)}
                        >
                            <i className="fa fa-times" />
                        </button>
                        <button
                            type="button"
                            className="btn btn-default btn-flat"
                            data-toggle="modal"
                            onClick={this.onEdit.bind(this, page.id)}
                            data-target="#modal-default"
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
const mapDispatchToProps = dispatch => {
    return {
        getIdPage: num => {
            dispatch(getIdPage(num));
        },
        ondeletePage:(id)=>{
            dispatch(deletePageRequest(id));
        }
    };
};
export default connect(
    mapStateToProps,
    mapDispatchToProps
)(ItemListPage);
