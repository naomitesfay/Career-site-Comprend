import React from "react"
import  "./jobitem.css"
// import JobListItems from "./job-list-items"


export default class JobItem extends React.Component {


  render() {
    // const departments = [
    //   {department: "" }
    // ]

      return (
        <div className= "jobContainer">
          <div className="title"><p>{this.props.title}</p></div>
          <div><p>{this.props.department}</p></div>
          <div><p>{this.props.city}</p></div>
        </div>
      )
    }
}
