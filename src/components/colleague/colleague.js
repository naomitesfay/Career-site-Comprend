import React from "react"

import "./colleague.css"

export default class Colleague extends React.Component {

  render() {
      return (
        <div className="colleague-block">
          <img className="colleague-image" src={this.props.source} alt="" />
          <p>{this.props.name}</p>
        </div>
      )
    }
}
