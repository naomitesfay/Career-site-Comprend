import React from "react"
import { BrowserRouter as Router, Route, Link } from "react-router-dom"
import JobItem from "../../components/jobitem/jobitem.js"
import  "./jobopenings-list.css"


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
        <div className="jobOpeningsList">
        <ul>

          <div className="title"><li>Title</li></div>
          <div className="department"><li>Department</li></div>
          <div className="city"><li>City</li></div>
        </ul>

//         <table>
//   <tr>
//     <th>Title</th>
//     <th>Department</th>
//     <th>City</th>
//   </tr>
//   <tr>
//     <td>Jill</td>
//     <td>Smith</td>
//     <td>50</td>
//   </tr>
//   <tr>
//     <td>Eve</td>
//     <td>Jackson</td>
//     <td>94</td>
//   </tr>
// </table>
          <div className= "jobOpeningsListItem">

            {this.state.allJobListings.map((item) => {
              return (
                <Link to="/jobs/{item.id}">
                  <JobItem
                  id={item.id}
                  title={item.title}
                  department={item.department}
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
