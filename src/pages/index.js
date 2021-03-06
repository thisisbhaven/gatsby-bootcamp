import React from "react"
import { Link } from "gatsby"
import Layout from "../components/Layout"

const IndexPage = () => {
  return (
    <Layout>
      <h1>Hello.</h1>
      <h3>I'm Bhaven, a full-stack developer, living in a beautiful city.</h3>
      <p>
        <Link to="/about">Read more</Link> about me.
      </p>
      <p>
        Need a developer? <Link to="/contact">Contact me.</Link>
      </p>
    </Layout>
  )
}

export default IndexPage
