import React from "react"
import JobItem from "../../components/jobitem/jobitem.js"
import  "./jobopenings-list.css"


export default class JobOpeningsHeader extends React.Component {

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
        <div className= "jobOpeningsListItem">

          {this.state.allJobListings.map((item) => {
            return (
              <JobItem title={item.title}
                id={item.id}
              department={item.department}
              city={item.city}
              />
            )
          })}
        </div>
        )
      } else {
      return <div>Loading loading loading forever...</div>
    }
  }
}
