import React, { Component } from 'react';
import ReactSummernote from "react-summernote";
import 'react-summernote/dist/react-summernote.css'; // import styles
import "react-summernote/lang/summernote-ru-RU";// you can import any other locale
import PropTypes from "prop-types";


class RichTextEditor extends Component {
    constructor(props) {
        super(props);
        this.onImageUpload = this.onImageUpload.bind(this);
    }
    onImageUpload(images, insertImage) {
        console.log(images[0].name);
        for (let i = 0; i < images.length; i++) {
            const reader = new FileReader();
            reader.onloadend = () => {
                insertImage(reader.result);
            };
            reader.readAsDataURL(images[i]);
        }
    };
    render() {
        const { defaultValue } = this.props;
       // console.log(defaultValue);
        return (
            <ReactSummernote
                type="text"
                name="content"
                defaultValue={defaultValue}
                options={{
                    lang: "vi-VN",
                    height: 480,
                    dialogsInBody: true,
                    toolbar: [
                        ["style", ["style"]],
                        ["font", ["bold", "underline", "clear"]],
                        ["fontname", ["fontname"]],
                        ["para", ["ul", "ol", "paragraph"]],
                        ["table", ["table"]],
                        ["insert", ["link", "picture", "video"]],
                        ["view", ["fullscreen", "codeview"]]
                    ]
                }}
                onChange={(content)=>this.props.conect(content)}
                onImageUpload={this.onImageUpload}
            />
        );
    }
}
export default RichTextEditor;
