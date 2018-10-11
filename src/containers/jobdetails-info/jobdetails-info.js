import React from "react"
import Button from "../../components/button/button"
import Colleague from "../../components/colleague/colleague"
import Header from "../../components/header/header"
import Footer from "../../components/footer/footer"
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
        <div className="jobDetailInfo">
          <div className="topText">
            <h1>{this.state.allJobListings.title}</h1>
            <p>{this.state.allJobListings.intro}</p>
          </div>
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
          <h3>Your Workday</h3>
          <p>{this.state.allJobListings.workday}</p>
          <p className="job-quote"><i class="fas fa-quote-left"></i>{this.state.allJobListings.quote}<i class="fas fa-quote-right"></i></p>
          <div className="two-column">
            <div className="body-image-box"></div>
            <p className="column-text" ><h3>Who are you?</h3>{this.state.allJobListings.aboutYou}</p>
          </div>
          <br />
          <h3>Is Comprend the company for you?</h3>
          <p>{this.state.allJobListings.match}</p>
          <br /><br />
          <h3>Some of your future colleagues</h3>
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
      <div>Please wait while we find available jobs.</div>
      )
    }
  }
}
