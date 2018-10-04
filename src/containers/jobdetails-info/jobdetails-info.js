import React from "react"
import Button from "../../components/button/button"
import Colleague from "../../components/colleague/colleague"
import "./jobdetails-info.css"

export default class JobDetailsInfo extends React.Component {

  state = {
    allJobListings: {},
    allColleagues: {}
  }

  componentDidMount() {
    const url = `http://hellotechnigo.comprendwebsites.net/api/jobs/${this.props.id}`
    fetch(url).then((response) => {
      return response.json()
    }).then((json) => {
      this.setState({
        allJobListings: json
      })
    })
    fetch("http://hellotechnigo.comprendwebsites.net/api/users").then((response) => {
      return response.json()
    }).then((json) => {
      this.setState({
        allColleagues: json
      })
    })
  }

  render() {
    if (Object.keys(this.state.allJobListings).length > 0 && Object.keys(this.state.allColleagues).length > 0) {
      return (
        <div className="">
          <h1>{this.state.allJobListings.title}</h1>
          <p>{this.state.allJobListings.intro}</p>
          <div className="top-image-box">
            <img src="https://www.comprend.com/files/pages/169/594257/dt/Home_02-ws-1920x800.jpg" alt="Comprend image" />
          </div>
          <div className="button-group">
            <Button
              text="Apply for this job"
              link={this.state.allJobListings.link} />
            <Button
              text="Share"
              link=""/>
          </div>
          <p>{this.state.allJobListings.workday}</p>
          <div className="two-column">
            <div className="body-image-box">
              <img src="https://www.comprend.com/files/pages/169/636748/dt/Home_01_ws_1920x800.jpg" alt="Comprend image" />
            </div>
            <p className="column-text">{this.state.allJobListings.aboutYou}</p>
          </div>
          <p>{this.state.allJobListings.match}</p>
          <div className="colleague-group">
            <Colleague source={this.state.allColleagues[0].pictureUrl}
              name={this.state.allColleagues[0].name} />
            <Colleague source={this.state.allColleagues[1].pictureUrl}
              name={this.state.allColleagues[1].name} />
            <Colleague source={this.state.allColleagues[2].pictureUrl}
              name={this.state.allColleagues[2].name} />
          </div>
        </div>
        )
      } else {
      return (
      <div>Loading loading loading forever...</div>
      )
    }
  }
}
