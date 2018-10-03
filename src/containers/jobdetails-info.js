import React from "react"

export default class JobDetailsInfo extends React.Component {

  state = {
    allJobListings: {}
  }

  // const url = "http://hellotechnigo.comprendwebsites.net/api/jobs/"

  componentDidMount() {
    const url = `http://hellotechnigo.comprendwebsites.net/api/jobs/${this.props.id}`
    fetch(url).then((response) => {
      return response.json()
    }).then((json) => {
      this.setState({
        allJobListings: json
      })
    })
  }

  render() {
    if (Object.keys(this.state.allJobListings).length > 0) {
      return (
        <div className= "">
          <h1>{this.state.allJobListings.title}</h1>
          <p>{this.state.allJobListings.intro}</p>
          <img src="" alt="image here!" />
          {/* <Button text="text-as-props" /> We need to make this component! */}
          <p>{this.state.allJobListings.workday}</p>
          <p>{this.state.allJobListings.aboutYou}</p>
          <p>{this.state.allJobListings.match}</p>
          <p>Colleagues components goes here! :)</p> {/* We could make this component! */}
        </div>
        )
      } else {
      return (
      <div>Loading loading loading forever...</div>
      )
    }
  }
}
