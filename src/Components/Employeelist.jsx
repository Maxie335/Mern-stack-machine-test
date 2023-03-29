import axios from 'axios'
import React, { useEffect, useState } from 'react'
import style from "./home.module.css"
import { Link } from 'react-router-dom'

const Employeelist = () => {
let [content,setContent]=useState([])
let [search,setSearch]=useState("")

const filterData=content.filter(user=> user.name.toLowerCase().includes(search.toLowerCase()));

let searchData=(e)=>{setSearch(e.target.value)}

useEffect(()=>{
    axios.get("http://localhost:3000/employees")
    .then((res)=>{
        setContent(res.data)
    })
},[])

let deleteData=(id)=>{
    axios.delete(`http://localhost:3000/employees/${id}`)
    .then(()=>{
        console.log("deleted");
    })
    window.location.assign("/e")
}
const totalcount = filterData.length
  return (
    <div>
        <section id={style.nav1}>
            <Link to="/H">Home</Link>
            <Link to="/E">Employee List</Link>
            <Link to="/LO">Logout</Link>
        </section>
        <div id={style.searchbox}>
            <tr>
                <td colSpan="2"><p>Total count:{totalcount}</p></td>
                <td><label htmlFor="">searchbox:</label></td>
                <td><input type="text" value={search} onChange={searchData}/></td>
            </tr>
        </div>
        <div id={style.yaris}>
            <table>
            <thead>
            <tr>
                <th>UniqueId</th>
                <th>Image</th>
                <th>Name</th>
                <th>Email</th>
                <th>Mobile no</th>
                <th>Designation</th>
                <th>gender</th>
                <th>course</th>
                <th>create date</th>
                <th>action</th>
         </tr>
         </thead>
        {filterData.map((x)=>{
            return(
                <tbody>
                    <tr> 
                        <td>{x.id}</td>
                        <td>{x.image}</td>
                        <td>{x.name}</td>
                        <td>{x.email}</td>
                        <td>{x.mobileno}</td>
                        <td>{x.designation}</td>
                        <td>{x.gender}</td>
                        <td>{x.course}</td>
                        <td>date</td>
                        <td><Link to={`/EE/${x.id}`}>edit</Link>
                        <button onClick={()=>{deleteData(x.id)}}>delete</button></td>
                    </tr>
                </tbody>
            )
        })}
    
        </table>
        </div>
    </div>
  )
}

export default Employeelist