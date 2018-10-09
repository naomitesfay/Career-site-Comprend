import React from "react"
import "./footer.css"
// import JobListItems from "./job-list-items"

export default class Footer extends React.Component {


  render() {

    return (
      <footer>

        <div className="footer-logo">
          <img src="/images/logo.png"/>
        </div>
        <div className="footer-navbar">
          <ul>
            <li>&#169; 2014-2018 Comprend</li>
            <li>Privacy Notice</li>
            <li>Cookie Policy</li>
            <li>Terms of Use</li>
            <li>Subscribe to our newsletter</li>
          </ul>
          <div className="socialmedia-icons">
            <img src="/images/facebook.png" />
            <img src="/images/twitter.png" />
            <img src="/images/instagram.png" />
            <img src="/images/linkedin.png" />
          </div>
        </div>
        <p>Comprend is part H&H Group</p>

      </footer>
    )
  }
}
