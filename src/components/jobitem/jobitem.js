import React from "react"
import  "./jobitem.css"
import {Link} from "react-router-dom"
// import JobListItems from "./job-list-items"

export default class JobItem extends React.Component {


  render() {
    // const departments = [
    //   {department: "" }
    // ]

      return (
        <div className= "jobContainer">
          <Link to={`/jobs/${this.props.id}`}>
            <div className="title"><p>{this.props.title}</p></div>
            <div><p>{this.props.department}</p></div>
            <div><p>{this.props.city}</p></div>
          </Link>
        </div>
      )
    }
}
