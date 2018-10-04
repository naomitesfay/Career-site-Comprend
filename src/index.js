import React from "react"
import ReactDOM from "react-dom"

import JobOpeningsPage from "./pages/jobopenings-page/jobopenings-page"
import JobDetailsPage from "./pages/jobdetails-page"
import "./index.css"
import JobItem from "./components/jobitem/jobitem"

ReactDOM.render(<JobOpeningsPage />, document.getElementById("root"))
// ReactDOM.render(<JobItem title="Chewbacca on holiday"
// department="Technology"
// city="Stockholm"
// />, document.getElementById("root"))
