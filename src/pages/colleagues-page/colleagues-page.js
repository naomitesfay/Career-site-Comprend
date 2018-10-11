import React from "react"
import Colleague from "../../components/colleague/colleague"
import "./colleagues-page.css"

class ColleaguesPage extends React.Component {

  state = {
    allColleagues: []
  }

  reserveFaceUrls = ["./images/face-1.png",
                     "./images/face-2.png",
                     "./images/face-3.png",
                     "./images/face-4.png",
                     "./images/face-5.png",
                     "./images/face-6.png",
                  ]

  componentDidMount() {
    fetch("http://hellotechnigo.comprendwebsites.net/api/users").then((response) => {
      return response.json()
    }).then((json) => {
      this.setState({
        allColleagues: json
      })
    })
    }

  render() {
    if (this.state.allColleagues.length > 0) {
      {this.state.allColleagues.map((person) => {
        if(!person.pictureUrl) {
          person.pictureUrl = this.reserveFaceUrls[Math.floor(Math.random()*6)]
        }
      })}
      return (
       <div className="background">
          <div className="colleagues-container">
          {this.state.allColleagues.map((person) => {
            if (person.visible) {
              return <Colleague source={person.pictureUrl}
                  name={person.name}
                  title={person.title} />
              }
          })}
          </div>
       </div>
      )
  } else {
    return (
      <div>
        It looks like all our colleagues are at lunch. Please try again later!
      </div>
    )
  }
  }

}

export default ColleaguesPage
