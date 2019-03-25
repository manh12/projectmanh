import React, { Component } from 'react';
import ListItem from './ListItem';
class List extends Component {
    render() {
        var CateDocument = this.props.CateDocument;
        var  elmCateDos = CateDocument.map((cates,index)=>{
            return <ListItem key={index} index={index}
                             CateDocument={cates}
                             onUpdate = {this.props.onUpdate}
                             onDelete={this.props.onDelete}
            />
        })
        return (
            <div className="row mt-15">
                <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12">
                    <table className="table table-bordered table-hover">
                        <thead>
                        <tr>
                            <th>STT</th>
                            <th>Tên</th>
                            <th>Mô tả</th>
                            <th>Hành động</th>
                        </tr>
                        </thead>
                        <tbody>
                        <tr>
                            <td>
                            </td>
                            <td>
                                <input type="text" className="form-control"/>
                            </td>
                            <td>

                            </td>
                            <td>
                            </td>
                        </tr>
                        </tbody>
                        <tbody>
                        {elmCateDos}
                        </tbody>
                    </table>
                </div>
            </div>
        );
    }
}
export default List;
