import React from "react"
import "./career-page.css"

class CareerPage extends React.Component {

  render() {
    return (

<div className="career-container">
      <div className="hero-image">
        <img src="images/yoda.jpg" />
          <div className="hero-text">
          <h1>Join us</h1>
          <p>May the force be with you</p>
          </div>
      </div>

      <div className="intro-container">
          <div className="intro-text">
              <h2>This is Comprend</h2>
              <p> Lorem ipsum dolor sit amet, putant voluptua vix ea. Impedit commune vix te. Id case mucius molestie mea, quod congue regione pro ea. Id dicat dicta incorrupte nec, vel in tollit aliquip.</p>
          </div>
          <div className="intro-text">
              <h2>This is Comprend</h2>
              <p> Lorem ipsum dolor sit amet, putant voluptua vix ea. Impedit commune vix te. Id case mucius molestie mea, quod congue regione pro ea. Id dicat dicta incorrupte nec, vel in tollit aliquip.</p>
          </div>
          <div className="intro-text">
            <h2>This is Comprend</h2>
            <p> Lorem ipsum dolor sit amet, putant voluptua vix ea. Impedit commune vix te. Id case mucius molestie mea, quod congue regione pro ea. Id dicat dicta incorrupte nec, vel in tollit aliquip.</p>
          </div>
        </div>



        <div className="job-opening-container">
          <img src="images/last-jedi.jpg" />
          <div className="button-on-image">
          <button>Job openings</button>
          </div>
        </div>

      </div>







    )
  }

}

export default CareerPage
