import { Link } from 'react-router-dom'
import style from "./home.module.css"

const Dashboard = () => {

  return (
    <div>
        <section id={style.nav1}>
            <Link to="/L">Home</Link>
            <Link to="/E">Employee List</Link>
            <Link to="/LO">Logout</Link>
        </section>
        <div className={style.panel}>
        Welcome Admin Panel
        </div>
    </div>
  )
}

export default Dashboard