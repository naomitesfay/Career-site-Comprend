import React from "react"
import JobOpeningsList from "../../containers/jobopenings-list/jobopenings-list.js"
import  "./jobopenings-page.css"

class JobOpeningsPage extends React.Component {

  render() {
    return (
      <div className="jobOpeningsListCategory">
        <ul>

          <div className="title"><li>Title</li></div>
          <div className="department"><li>Department</li></div>
          <div className="city"><li>City</li></div>
        </ul>

        <div>
          <JobOpeningsList/>
        </div>
      </div>
    )
  }

}

export default JobOpeningsPage
