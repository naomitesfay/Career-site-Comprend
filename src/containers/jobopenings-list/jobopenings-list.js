import React from "react"
import { BrowserRouter as Router, Route, Link } from "react-router-dom"
import JobItem from "../../components/jobitem/jobitem.js"
import  "./jobopenings-list.css"

export default class JobOpeningsList extends React.Component {

  state = {
    allJobListings: [],
    allDepartments: []
  }

  componentDidMount() {
    fetch("http://hellotechnigo.comprendwebsites.net/api/jobs").then((response) => {
      return response.json()
    }).then((json) => {
      this.allJobListings = json
      this.fetchDepartments()
    })
  }

  fetchDepartments = () => {
    fetch("http://hellotechnigo.comprendwebsites.net/api/departments").then((response) => {
      return response.json()
    }).then((json) => {
      this.allDepartments = json
      let depts = {}
      this.allDepartments.forEach((item) =>{
        depts[item.id] = item.name
      })
      const updatedList = this.allJobListings.map((job) => {
        job.departmentName = depts[job.department]
        return job
      })
      this.setState({
        allJobListings: this.allJobListings,
        allDepartments: this.allDepartments,
        updatedJobListings: updatedList
      })
    })
  }

  render() {
    if (this.state.allDepartments.length > 0) {
      return (
        <div className="jobOpeningsList">
        <table>
        <tr>
          <th>Title</th>
          <th>Department</th>
          <th>City</th>
        </tr>
        </table>

          <div className= "jobOpeningsListItem">

            {this.state.updatedJobListings.map((item) => {
              return (
                <Link to={"/jobs/" + item.id}>
                  <JobItem
                  id={item.id}
                  title={item.title}
                  department={item.departmentName}
                  city={item.city}
                  />
                </Link>
              )
            })}
          </div>
        </div>
        )
      } else {
      return <div>Loading loading loading forever...</div>
    }
  }
}
