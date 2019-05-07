import React, { Component } from "react";
import { connect } from "react-redux";
import { updateSliderRequest, returnFalse } from "../execut/action";

class ModalSlider extends Component {
    constructor(props) {
        super(props);
        this.state = {
            images: ""
        };
    }
    /**
     *
     * @param {*} e All data slider
     */
    onUpdate(e) {
        e.preventDefault();
        const title = this.refs.title.value;
        const description = this.refs.description.value;
        const link = this.refs.link.value;
        const images = this.state.images;
        const images2 = this.refs.images2.value;
        const status = this.refs.status.checked;
        const data = {
            title,
            description,
            link,
            images,
            images2,
            status
        };
       console.log(data);
        this.props.onUpdate(this.props.editslider.id, data);
        //Hide Modal after update slider
        $("#modal-" + this.props.idModal).modal("hide");
        $(".modal-backdrop").remove();
    }
    // Reset From after update slider
    componentWillReceiveProps(nextProps) {
        if (nextProps.reset == true) {
            document.getElementById("form-slider-edit").reset();
            this.setState({
                images: ""
            });
        }
        return false;
    }
    componentDidUpdate(prevProps) {
        if (prevProps == true) {
            this.props.resetFrom();
        }
    }

    /**
     * Function upload images
     * @param {*} e // Upload File
     */
    onUploadFile(e) {
        var fileRender = new FileReader();
        fileRender.readAsDataURL(e.target.files[0]);
        fileRender.onload = e => {
            this.setState({
                images: e.target.result
            });
        };
    }

    render() {
        const { idModal, editslider } = this.props;
        // console.log(editslider);
        return (
            <div className="modal fade in" id={"modal-" + idModal}>
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
                        <form
                            onSubmit={this.onUpdate.bind(this)}
                            id="form-slider-edit"
                        >
                            <div className="modal-body">
                                <div className="form-group">
                                    <label>Tiêu đề :</label>
                                    <input
                                        ref="title"
                                        defaultValue={editslider.title}
                                        type="text"
                                        className="form-control"
                                    />
                                </div>
                                <div className="form-group">
                                    <label>Mô tả :</label>
                                    <textarea
                                        ref="description"
                                        defaultValue={editslider.description}
                                        name="description"
                                        type="text"
                                        className="form-control"
                                        rows={3}
                                    />
                                </div>
                                <div className="form-group">
                                    <label>Liên kết :</label>
                                    <input
                                        ref="link"
                                        defaultValue={editslider.link}
                                        type="text"
                                        className="form-control"
                                    />
                                </div>
                                <div className="form-group">
                                    <label>Ảnh hiện thị :</label>
                                    <input
                                        type="file"
                                        name="images"
                                        onChange={this.onUploadFile.bind(this)}
                                    />
                                    <input
                                        type="hidden"
                                        ref="images2"
                                        defaultValue={editslider.images}
                                    />
                                </div>
                                <div className="checkbox">
                                    <label>
                                        <input
                                            type="checkbox"
                                            ref="status"
                                            defaultChecked={editslider.status}
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
        idModal: state.sliders.idModal,
        editslider: state.sliders.edit,
        reset: state.sliders.reset
    };
};
const mapDispatchToProps = (dispatch, ownProps) => {
    return {
        onUpdate: (id, slider) => {
            dispatch(updateSliderRequest(id, slider));
        }
    };
};
export default connect(
    mapStateToProps,
    mapDispatchToProps
)(ModalSlider);
