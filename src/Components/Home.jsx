import React from 'react'
import { Link } from 'react-router-dom'
import style from "./home.module.css"

const Home = () => {
  return (
    <div id={style.nav}>
        <Link to="/L">Login Page</Link>
    </div>
  )
}

export default Home