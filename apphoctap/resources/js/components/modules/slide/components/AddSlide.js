import React,{Component} from "react";
import {connect} from "react-redux";
import {addSlideRequest,resetForm} from "../execut/action";

class AddSlide extends Component{
    constructor(props){
        super(props);
        this.state = {
            title:"",
            description:"",
            link:"",
            images:"",
            status:""
        };
    }
    handleChange(e){
        var target = e.target;
        var name = target.name;
        var value = target.type === "checkbox"?target.checked:target.value;
        this.setState({
           [name]:value
        });
    }
    onUploadFile(e){
        var  fileReader = new FileReader();
        fileReader.readAsDataURL(e.target.files[0]);
        fileReader.onload = (e) =>{
            this.setState({
               images:e.target.result
            });
        };
    }
    onSave(e){
        e.preventDefault();
        // console.log(this.state);
      this.props.addslider(this.state);
    }
    componentWillReceiveProps(nextProps) {
        if (nextProps.reset == true) {
            document.getElementById("form-slider").reset();
        }
    }
    componentDidUpdate(prevProps) {
        this.props.resetFalse();
    }
    render() {
        return(
            <div className="col-md-4">
                <div className="box box-primary">
                    <div className="box-header with-border">
                        <h3 className="box-title">THÊM SLIDER</h3>
                    </div>
                    <form
                        id="form-slider"
                        // role="form-slider"
                        // name="form-slider"
                        method="post"
                    >
                        <div className="box-body">
                            <div
                                className="form-group"
                            >
                                <label>
                                    Tiêu đề :{" "}
                                    <sup className="text-red">* yêu cầu</sup>
                                </label>
                                <input
                                    type="title"
                                    className="form-control"
                                    name="title"
                                    onChange={this.handleChange.bind(this)}
                                />
                                <span className="help-block">

                                </span>
                            </div>
                            <div className="form-group">
                                <label>Mô tả :</label>
                                <textarea
                                    className="form-control"
                                    cols={30}
                                    rows={3}
                                    name="description"
                                    onChange={this.handleChange.bind(this)}
                                />
                            </div>
                            <div className="form-group">
                                <label>Liên kết :</label>
                                <input
                                    type="text"
                                    className="form-control"
                                    name="link"
                                    onChange={this.handleChange.bind(this)}
                                />
                            </div>
                            <div
                                className="form-group"
                            >
                                <label>
                                    Ảnh hiện thị :{" "}
                                    <sup className="text-red">* yêu cầu</sup>
                                </label>
                                <input
                                    type="file"
                                    name="images"
                                    onChange={this.onUploadFile.bind(this)}
                                />
                                <span className="help-block">

                                </span>
                            </div>
                        </div>

                        <div className="box-footer">
                            <div className="checkbox pull-left">
                                <label>
                                    <input
                                        defaultChecked={status}
                                        type="checkbox"
                                        name="status"
                                        onChange={this.handleChange.bind(this)}
                                    />
                                    Trạng thái
                                </label>
                            </div>
                            <button
                                type="submit"
                                onClick={this.onSave.bind(this)}
                                className="btn btn-primary btn-flat pull-right"
                            >
                                Thêm slider
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        );
    };
}
const mapStateToProps = (state,props)=>{
    return{
        reset:state.sliders.reset,
        errors:state.sliders.errors
    };
};
const mapDispatchToProps = (dispatch) =>{
    return{
        addslider:(slider) =>{
            dispatch(addSlideRequest(slider));
        },
        resetFalse:()=>{
            dispatch(resetForm());
        }
    };
};
export default connect(mapStateToProps,mapDispatchToProps)(AddSlide);
