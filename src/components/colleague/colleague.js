import React from "react"

import "./colleague.css"

export default class Colleague extends React.Component {

  render() {
      return (
        <div>
          <img className="colleague-image" src={this.props.source} alt="" />
          <p>{this.props.name}</p>
        </div>
      )
    }
}
