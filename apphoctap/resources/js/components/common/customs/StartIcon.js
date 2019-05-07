import React, { Component } from 'react'

export default class StartIcon extends Component {
  render() {
    const paddingf = {
        padding: '0px 5px'
    };
    return (
      <React.Fragment>
        <small className={this.props.color}><i className={"fa fa-star mx-1"} style={paddingf}></i>

        <b>{this.props.name}</b> </small>
      </React.Fragment>
    )
  }
}
