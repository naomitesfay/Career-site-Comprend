import React from "react"
import JobOpeningsList from "../../containers/jobopenings-list/jobopenings-list.js"
import Header from "../../components/header/header.js"
import  "./jobopenings-page.css"

class JobOpeningsPage extends React.Component {

  render() {
    return (
      <div className="background">
        <Header />
        <JobOpeningsList />
      </div>
    )
  }

}

export default JobOpeningsPage
