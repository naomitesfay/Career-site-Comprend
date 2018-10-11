import React from "react"
import "./colleague.css"

export default class Colleague extends React.Component {


  render() {

      return (
        <div className="colleague-block">
          <img className="colleague-image" src={this.props.source} alt="" />
          <p className="colleague-name">{this.props.name}</p>
          <p className="colleague-title">{this.props.title}</p>
        </div>
      )
    }
}
