import React from "react"
import JobOpeningsList from "../../containers/jobopenings-list/jobopenings-list.js"
import  "./jobopenings-page.css"

class JobOpeningsPage extends React.Component {

  render() {
    return (
      <div className="jobOpeningsListCategory">
        <ul>
          <li>Title</li>
          <li>Department</li>
          <li>City</li>
        </ul>

        <div>
          <JobOpeningsList/>
        </div>
      </div>
    )
  }

}

export default JobOpeningsPage
