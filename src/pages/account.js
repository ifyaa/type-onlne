import React from "react"
import { Router } from "@reach/router"
import { login, logout, isAuthenticated, getProfile } from "../utils/auth"
import { Link } from "gatsby"


const Home = () => <p>Home</p>
const MyAccount = () => <p>My Account</p>
const posts = () => <p>Mark</p>
const tags = () => <p>tags</p>

const Account = () => {
  if (!isAuthenticated()) {
    login()
    return <p>Redirecting to login...</p>
  }

  const user = getProfile()

  return (
    <>
      <nav>
        <Link to="/">Home</Link>{" "}
        <Link to="/account/">My Account</Link>{" "}
        <Link to="/posts">Mark</Link>{" "}
        <Link to="/tags">tags</Link>{" "}
        <a
          href="#logout"
          onClick={e => {
            logout()
            e.preventDefault()
          }}
        >
          Log Out
        </a>
      </nav>
      <pre>{JSON.stringify(user, null, 2)}</pre>
      <Router>
        <Home path="/" />
        <MyAccount path="/account/" />
        <posts path="/posts/" />
        <tags path="/tags/" />
      </Router>
    </>
  )
}

export default Account
