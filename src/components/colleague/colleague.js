import React from "react"
import "./colleague.css"

export default class Colleague extends React.Component {

  reserveFaceUrls = ["./images/face-1.png",
                     "./images/face-2.png",
                     "./images/face-3.png",
                     "./images/face-4.png",
                     "./images/face-5.png",
                     "./images/face-6.png",
                  ]

handleHover() {
    {this.image.src} = {this.reserveFaceUrls[0]}
}

  render() {
      return (
        <div className="colleague-block">
        {this.props.source}
          <img className="colleague-image" src={this.props.source} onMouseEnter={this.handleHover} onMouseLeave={this.handleHover} alt="" />
          <img className="colleague-image-hover" src={this.reserveFaceUrls[0]} alt="" />
          <p className="colleague-name">{this.props.name}</p>
          <p className="colleague-title">{this.props.title}</p>
        </div>
      )
    }
}
