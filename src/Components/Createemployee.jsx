import axios from 'axios'
import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import style from "./home.module.css"

const Createemployee = () => {

let [name,setName]=useState("")
let [email,setEmail]=useState("")
let [mobileno,setMobileno]=useState("")
let [designation,setDesignation]=useState("")
let [gender,setGender]=useState(false)
let [course,setCourse]=useState("")
let [image,setImage]=useState(null)


let nameData=(e)=>{
    setName(e.target.value)
}

let[isevalid,setEisvalid]=useState(false)
    let emailData=(e)=>{
    const emailregex=/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/;
    const value = e.target.value;
    setEmail(value)
    setEisvalid(emailregex.test(value))
}

let[isvalid,setIsvalid]=useState(false)
    let mobilenoData=(e)=>{
        const mbnoregex=/^\d{10}$/;
        const value = e.target.value;
        setMobileno(value)
        setIsvalid(mbnoregex.test(value))
}
let designationData=(e)=>{
    setDesignation(e.target.value)
}
let genderData=(e)=>{
    setGender(e.target.value)
}
let courseData=(e)=>{
    const{value,checked}=e.target;
    if(checked){
     setCourse(value)
    }
    else{
        setCourse("")
    }
}
let imageData=(e)=>{
    setImage(e.target.value)
}

let click=(e)=>{
    e.preventDefault()
    let load ={name,email ,mobileno,designation,gender,course,image}
        axios.post("http://localhost:3000/employees",load)
        .then(()=>{
            console.log("sent")
        })
        .catch(()=>{
            console.log("error");
        })
        
        window.location.assign("/EL")
}

return (
    <div>
        <section id={style.nav1}>
            <Link to="/H">Home</Link>
            <Link to="/E">Employee List</Link>
            <Link to="/LO">Logout</Link>
        </section>
        <Link to="/EL">Employee List</Link>
        <h3>Create Employee</h3>
        <form action="">
            <tr>
                <td><label htmlFor="">Name</label></td>
                <td><input type="text" value={name} onChange={nameData} /></td>
            </tr>
            <tr>
                <td><label htmlFor="">Email</label></td>
                <td><input type="email" value={email} onChange={emailData}/>
                {isevalid ? <span style={{color:'green'}}>valid</span>:<span style={{color:'red'}}>invalid email</span>}</td>
            </tr>
            <tr>
                <td><label htmlFor="">Mobile no</label></td>
                <td><input type="number" value={mobileno} onChange={mobilenoData} />
                {isvalid ? <span style={{color:'green'}}>valid</span>:<span style={{color:'red'}}>invalid number</span>}</td>
            </tr>
            <tr>
                <td><label htmlFor="">Designation</label></td>
                <td><select value={designation} onChange={designationData}>
                        <option value="HR">HR</option>
                        <option value="Manager">Manager</option>
                        <option value="Sales">Sales</option>
                    </select></td>
            </tr>
            <tr>
                <td><label htmlFor="">Gender</label></td>
                <td><input type="radio" name="a" id="" value="male" onChange={genderData}/>Male
                <input type="radio" name="a" id="" value="female" onChange={genderData}/>Female</td>
            </tr>
            <tr>
                <td><label htmlFor="">Course</label></td>
                <td><input type="checkbox" value="MCA" checked={course==="MCA"} onChange={courseData}/>MCA
                <input type="checkbox" value="BCA" checked={course==="BCA"} onChange={courseData}/>BCA
                <input type="checkbox" value="BSC" checked={course==="BSC"} onChange={courseData}/>BSC</td>
            </tr>
            <tr>
                <td><label htmlFor="">Image upload</label></td>
                <td><input type="file" onChange={imageData}/></td>
            </tr>
            <tr>
                <td><button onClick={click}>Submit</button></td>
            </tr>
        </form>
    </div>
  )
}

export default Createemployee