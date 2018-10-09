import React from "react"
import JobOpeningsList from "../../containers/jobopenings-list/jobopenings-list.js"
import "./jobopenings-page.css"

class JobOpeningsPage extends React.Component {

  render() {
    return (
     <div className="body">
      <div className="starwarsJobs"><img src="/images/jobopenings-image.svg" /></div>
       <div className="TableofPositions">
         <JobOpeningsList />
       </div>
     </div>

    )
  }

}

export default JobOpeningsPage
