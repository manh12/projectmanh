
import React, { Component } from 'react';
class ListItem extends Component {
 constructor(props){
     super(props);
     this.onUpdate = this.onUpdate.bind(this);
     this.onDelete = this.onDelete.bind(this);
 }
    onUpdate(){
        // console.log(this.props.task)
        this.props.onUpdate(this.props.CateDocument.id);
    }
    onDelete(){
     this.props.onDelete(this.props.CateDocument.id);
    }
    render() {
        var{index} = this.props;
        var  CateDocument = this.props.CateDocument;
          // console.log(this.props.CateDocument);
        return (
            <tr>
                <td>{index}</td>
                <td>
                    <p>{CateDocument.name}</p>
                </td>
                <td>{CateDocument.description}</td>
                <td>
                    <button type="submit" className="btn btn-primary"  onClick={this.onUpdate}>
                        <span className="fa fa-plus mr-5">Sửa</span>
                    </button>
                    <button type="submit" className="btn btn-danger" onClick={this.onDelete}>xóa</button>
                </td>
            </tr>
        );
    }
}
export default ListItem;
