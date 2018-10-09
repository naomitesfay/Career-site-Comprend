import React from "react"
import JobOpeningsList from "../../containers/jobopenings-list/jobopenings-list.js"
import "./jobopenings-page.css"

class JobOpeningsPage extends React.Component {

  render() {
    return (
      <div className="background">
      <div className="dune">
      <img src="/images/sanddune.svg" />
      </div>
        <JobOpeningsList />
      </div>

    )
  }

}

export default JobOpeningsPage
