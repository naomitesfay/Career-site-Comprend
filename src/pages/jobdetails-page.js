import React from "react"
import JobDetailsInfo from "../containers/jobdetails-info/jobdetails-info"

class JobDetailsPage extends React.Component {

  render() {
    return (
      <div>
        <JobDetailsInfo id={this.props.match.params.id} />
      </div>
    )
  }

}

export default JobDetailsPage
