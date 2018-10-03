import React from "react"
// import JobListItems from "./job-list-items"


export default class JobItem extends React.Component {


  render() {

      return (
        <div className= "jobContainer">
          <p>{this.props.title}</p>
          <p>{this.props.department}</p>
          <p>{this.props.city}</p>
        </div>
      )
    }
}
