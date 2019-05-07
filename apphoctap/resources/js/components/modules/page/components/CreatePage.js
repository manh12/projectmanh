import React,{Component} from "react";
import {connect} from "react-redux";
import RichTextEditor from "../../../common/RichTextEditor";
import { addPageRequest,updatePageRequest} from "../execut/action";
class CreatePage extends Component{
    constructor(props){
        super(props);
        this.state = {
            name:"",
            slug:"",
            content:"",
            title:"",
            description:"",
            keywords:"",
            images:"",
            thumbnail:"",
            status:true
        };
    }
    handleChange(e){
        let target = e.target;
        let name = target.name;
        let value = target.type === "checkbox" ? target.checked : target.value;
        this.setState({
            [name]:value
        });
    }
    // Get content components child
    handleContent(content) {
        this.setState({
            content
        });
    }
    //Upload images
    onUploadFileImages(e) {
        let fileRender = new FileReader();
        fileRender.readAsDataURL(e.target.files[0]);
        fileRender.onload = e => {
            this.setState({ images: e.target.result });
        };
    }
    // Upload Thumb
    onUploadFileThumb(e) {
        let fileRender = new FileReader();
        fileRender.readAsDataURL(e.target.files[0]);
        fileRender.onload = e => {
            this.setState({ thumbnail: e.target.result });
        };
    }

    onSave(e) {
        e.preventDefault();
        const { images, thumbnail } = this.state;
        const { edit } = this.props;
        if (edit.id) {
            const content =
                this.state.content == ""
                    ? edit.data.content
                    : this.state.content;
            const {
                name,
                slug,
                title,
                description,
                keywords,
                status,
                images2,
                thumbnail2
            } = this.refs;
            const page = {
                name: name.value,
                slug: slug.value,
                title: title.value,
                description: description.value,
                keywords: keywords.value,
                images2: images2.value,
                thumbnail2: thumbnail2.value,
                status: status.value,
                content,
                images,
                thumbnail
            };
            this.props.updatePage(edit.id, page);
        } else {
            this.props.addPage(this.state);
            console.log(this.state);
        }
    }
    render() {
        const {errors,edit} = this.props;
        const { images, thumbnail } = this.state;
        return(
            <div className="row">
                <form id="form-page" onSubmit={this.onSave.bind(this)}>
                    <div className="col-xs-9">
                        <div className="box box-primary">
                            <div className="box-header with-border">
                                <h5 className="box-title text-center">
                                    <strong>
                                        {edit.id && "CẬP NHẬT "}TRANG TĨNH
                                    </strong>
                                </h5>
                            </div>
                            <div className="box-body">
                                <div
                                    className={
                                        errors.name !== undefined
                                            ? "form-group has-error"
                                            : "form-group"
                                    }
                                >
                                    <label>
                                        Tên trang
                                        <sup className="text-red">
                                            * yêu cầu
                                        </sup>
                                    </label>
                                    <input
                                        className="form-control"
                                        defaultValue={
                                            edit.data && edit.data.name
                                        }
                                        name="name"
                                        ref="name"
                                        onChange={this.handleChange.bind(this)}
                                    />
                                    <span className="help-block">
                                        {errors.name}
                                    </span>
                                </div>
                                <div
                                    className={
                                        errors.slug !== undefined
                                            ? "form-group has-error"
                                            : "form-group"
                                    }
                                >
                                    <label>Đường dẫn</label>
                                    <div className="input-group">
                                        <span className="input-group-addon">
                                            localhost.com/static/
                                        </span>
                                        <input
                                            className="form-control"
                                            name="slug"
                                            ref="slug"
                                            defaultValue={
                                                edit.data && edit.data.slug
                                            }
                                            onChange={this.handleChange.bind(this)}
                                        />
                                    </div>
                                    <span className="help-block">
                                         {errors.slug}
                                    </span>
                                </div>
                                <div className="form-group">
                                    <RichTextEditor
                                        type="text"
                                        name="content"
                                        ref="content"
                                        defaultValue={
                                            edit.data && edit.data.content
                                        }
                                        conect={content =>
                                            this.handleContent(content)
                                        }
                                    />
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-xs-3">
                        <div className="box box-primary">
                            <div className="box-body">
                                <div
                                    className={
                                        errors.title !== undefined
                                            ? "form-group has-error"
                                            : "form-group"
                                    }
                                >
                                    <label>
                                        Tiêu đề
                                        <sup className="text-red">
                                            * yêu cầu
                                        </sup>
                                    </label>
                                    <input
                                        type="text"
                                        className="form-control"
                                        name="title"
                                        ref="title"
                                        defaultValue={
                                            edit.data && edit.data.title
                                        }
                                        onChange={this.handleChange.bind(this)}
                                    />
                                    <span className="help-block">
                                        {errors.title}
                                    </span>
                                </div>

                                <div
                                    className={
                                        errors.description !== undefined
                                            ? "form-group has-error"
                                            : "form-group"
                                    }
                                >
                                    <label>
                                        Mô tả
                                        <sup className="text-red">
                                            * yêu cầu
                                        </sup>
                                    </label>
                                    <textarea
                                        className="form-control"
                                        ref="description"
                                        defaultValue={
                                            edit.data && edit.data.description
                                        }
                                        name="description"
                                        onChange={this.handleChange.bind(this)}
                                    />
                                    <span className="help-block">
                                        {errors.description}
                                    </span>
                                </div>
                                <div className="form-group">
                                    <label>Từ khóa</label>
                                    <input
                                        type="text"
                                        className="form-control"
                                        ref="keywords"
                                        defaultValue={
                                            edit.data && edit.data.keywords
                                        }
                                        name="keywords"
                                        onChange={this.handleChange.bind(this)}
                                    />
                                </div>

                                <div className="form-group">
                                    <label>Ảnh đại diện</label>
                                    <input
                                        type="file"
                                        name="thumbnail"
                                        onChange={this.onUploadFileThumb.bind(this)}
                                    />
                                    <input
                                        type="hidden"
                                        name="thumbnail2"
                                        ref="thumbnail2"
                                        defaultValue={
                                            edit.data && edit.data.thumbnail
                                    }
                                    />
                                </div>
                                <div className="form-group">
                                    <img
                                        src={thumbnail}
                                        alt=""
                                        width={100}
                                        height={100}
                                    />
                                </div>
                                <div className="form-group">
                                    <label>Ảnh bìa</label>
                                    <input
                                        type="file"
                                        name="images"
                                        onChange={this.onUploadFileImages.bind(this)}
                                    />
                                    <input
                                        type="hidden"
                                        name="images2"
                                        ref="images2"
                                        defaultValue={
                                            edit.data && edit.data.images
                                        }
                                    />
                                </div>
                                <div className="form-group">
                                    <img src={images}
                                         alt=""
                                         width={100}
                                    height={100}/>
                                </div>
                            </div>
                            <div className="box-footer with-border">
                                <div className="row">
                                    <div className="col-md-6">
                                        <select
                                            type="text"
                                            name="status"
                                            ref="status"
                                            className="form-control"
                                            defaultValue={
                                                edit.data && edit.data.status
                                            }
                                            onChange={this.handleChange.bind(this)}>
                                            <option value={1}>Đăng ngay</option>
                                            <option value={0}>lưu bài</option>
                                        </select>
                                    </div>
                                    <div className="col-md-6">
                                        <button
                                            type="submit"
                                            className="btn btn-block btn-flat btn-primary"
                                        >
                                            {edit.id ? "Cập nhật" : "Thêm mới"}
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </form>
            </div>
        )
    }
}
const mapStateToProps = state => {
    return {
        errors:state.pages.errors,
        edit:state.pages.edit
    };
};
const mapDispatchToProps = dispatch => {
    return {
        addPage: page => {
            dispatch(addPageRequest(page));
        },
        updatePage:(id,page)=>{
            dispatch(updatePageRequest(id,page));
        }
    };
};
export default connect(
    mapStateToProps,
    mapDispatchToProps
)(CreatePage);
