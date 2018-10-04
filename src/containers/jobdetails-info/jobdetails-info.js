import React from "react"
import Button from "../../components/button/button"
import "./jobdetails-info.css"

export default class JobDetailsInfo extends React.Component {

  state = {
    allJobListings: {}
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
  }

  render() {
    if (Object.keys(this.state.allJobListings).length > 0) {
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
          <p>Colleagues components goes here! :)</p> {/* We could make this component! */}
        </div>
        )
      } else {
      return (
      <div>Loading loading loading forever...</div>
      )
    }
  }
}
