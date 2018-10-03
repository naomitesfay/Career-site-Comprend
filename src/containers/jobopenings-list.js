import React from "react"
import JobItem from "../components/jobitem.js"



export default class JobOpeningsList extends React.Component {

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
        <div className= "">
          <JobItem title = {this.state.allJobListings[0].title} department = {this.state.allJobListings[0].department} city = {this.state.allJobListings[0].department}/>
        </div>
      )
    } else {
      return <div>Loading loading loading forever...</div>
    }
  }

}
