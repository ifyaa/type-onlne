import React from 'react'
import { Link } from "gatsby"
import Layout from '../components/layout'

export default () => (
  <Layout>
    <div>
      <Link to="/account/">Go to your account</Link><br/>
      <a href="https://ifyaa.netlify.com" target="''">ifyaa</a>
    </div>
  </Layout>
)
