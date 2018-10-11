import React from "react"
import "./colleague.css"

export default class Colleague extends React.Component {

  render() {

    const onMouseEnter = {onMouseEnter}
    const onMouseLeave = {onMouseLeave}

      return (
        <div className="colleague-block" onMouseEnter={this.props.onMouseEnter}
        onMouseLeave={this.props.onMouseLeave}>
          <img className="colleague-image" src={this.props.source} alt="" />
          <p className="colleague-name">{this.props.name}</p>
          <p className="colleague-title">{this.props.title}</p>
        </div>
      )
    }
}
