import React from "react"
// import JobListItems from "./job-list-items"


export default class Job extends React.Component {

  state = {
    allJobListings: []
  }

  componentDidMount() {
    fetch("http://hellotechnigo.comprendwebsites.net/api/jobs").then((response) => {
      return response.json()
    }).then((json) => {
      this.setState({
        allJobListings: json
      })
    })
  }

  render() {
    if (this.state.allJobListings.length > 0) {
      return (
        <div className= "jobContainer">
        <p>Job title {this.state.allJobListings[0].title}</p>
        <p>Department {this.state.allJobListings[0].department}</p>
        <p>City {this.state.allJobListings[0].department}</p>
        </div>
      )
    } else {
      return <div>Loading loading loading forever...</div>
    }
  }

}
