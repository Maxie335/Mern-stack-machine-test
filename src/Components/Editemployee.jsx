import axios from 'axios'
import React, { useEffect } from 'react'
import { useState } from 'react'
import { Link } from 'react-router-dom'
import style from "./home.module.css"
import { useNavigate, useParams } from 'react-router-dom'

const Editemployee = () => {
    let [name,setName]=useState("")
    let [email,setEmail]=useState("")
    let [mobileno,setMobileno]=useState("")
    let [designation,setDesignation]=useState("")
    let [gender,setGender]=useState(false)
    let [course,setCourse]=useState("")
    let [image,setImage]=useState(null)

    let navigation=useNavigate()
    let {data}=useParams()
    
    let nameData=(e)=>{
        e.preventDefault()
        setName(e.target.value)
    }
    let emailData=(e)=>{
        e.preventDefault()
        setEmail(e.target.value)
    }
    let mobilenoData=(e)=>{
        setMobileno(e.target.value)
    }
    let designationData=(e)=>{
        e.preventDefault()
        setDesignation(e.target.value)
    }
    let genderData=(e)=>{
        e.preventDefault()
        setGender(e.target.value)
    }
    let courseData=(e)=>{
        e.preventDefault()
        setCourse(e.target.value)
    }
    let imageData=(e)=>{
        e.preventDefault()
        setImage(e.target.value)
    }
    
    useEffect(()=>{
        axios.get(`http://localhost:3000/employees/${data}`)
        .then((resp)=>{
            console.log(resp);
            setName(resp.data.name)
            setEmail(resp.data.email)
            setMobileno(resp.data.mobileno)
            setDesignation(resp.data.designation)
            setGender(resp.data.gender)
            setCourse(resp.data.course)
            setImage(resp.data.image)
        })
    },[])

    let click=(e)=>{
        e.preventDefault()
        let load ={name,email ,mobileno,designation,gender,course,image}
            axios.put(`http://localhost:3000/employees/${data}`,load)
            .then(()=>{
                console.log("sent")
            })
            .catch(()=>{
                console.log("error");
            })
            navigation("/EL")
            
    }
    
    return (
        <div>
            <section id={style.nav1}>
                <Link to="/H">Home</Link>
                <Link to="/E">Employee List</Link>
                <Link to="/LO">Logout</Link>
            </section>
            <h3>Edit Employee</h3>
            <form action="">
                <tr>
                    <td><label htmlFor="">Name</label></td>
                    <td><input type="text" value={name} onChange={nameData} /></td>
                </tr>
                <tr>
                    <td><label htmlFor="">Email</label></td>
                    <td><input type="email" value={email} onChange={emailData}/></td>
                </tr>
                <tr>
                    <td><label htmlFor="">Mobile no</label></td>
                    <td><input type="number" value={mobileno} onChange={mobilenoData} /></td>
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

export default Editemployee