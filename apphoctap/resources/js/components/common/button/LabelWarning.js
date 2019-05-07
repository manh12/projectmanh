import React, { Component } from 'react'

export default class LabelWarning extends Component {
  render() {
    const paddingf = {
        padding: '0px 3px 0px 0px'
    };
    return (
        <span className="label bg-red">
            <i className="fa fa-times" style={paddingf} />
            Tạm khóa
            </span>
    )
  }
}
