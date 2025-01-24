import axios from 'axios'
import React, { useState } from 'react'
import NavBar from './NavBar'

const SignUp = () => {
    const [data,changeData]=useState(
        {
            "name":"",
            "phone":"",
            "emailid":"",
            "password":""
        }
    )
    const inputHandler=(event)=>{
        changeData({...data,[event.target.name]:event.target.value} )
    }
    const readvalue=()=>{
        console.log(data)
        axios.post("http://localhost:9090/signup",data).then(
            (response)=>{
                console.log(response.data)
                if (response.data.status=="success") {
                    alert("success")
                    
                } else {
                    alert("error")
                    
                }

            }
        ).catch().finally()
    }
  return (
    <div>
        <NavBar/>
        <div className="container">
            <div className="row">
                <div className="col col-12 col-sm-12 col-md-12">
                    <div className="row g-3">
                        <div className="col col-12 col-sm-12 col-md-12">
                            <label htmlFor="" className="form-label">Name</label>
                            <input type="text" className="form-control" name='name' value={data.name} onChange={inputHandler} />
                        </div>
                        <div className="col col-12 col-sm-12 col-md-12">
                        <label htmlFor="" className="form-label">phone</label>
                        <input type="text" className="form-control" name='phone' value={data.phone} onChange={inputHandler} />
                        </div>
                        <div className="col col-12 col-sm-12 col-md-12">
                        <label htmlFor="" className="form-label">email</label>
                        <input type="text" className="form-control" name='emailid' value={data.emailid} onChange={inputHandler} />
                        </div>
                        <div className="col col-12 col-sm-12 col-md-12">
                        <label htmlFor="" className="form-label">password</label>
                        <input type="text" className="form-control" name='password' value={data.password} onChange={inputHandler} />
                        </div>
                        <div className="col col-12 col-sm-12 col-md-12">
                        <a href="/signin" className="btn btn-primary" onClick={readvalue}>register</a>
                        </div>
                        {/* <div className="col col-12 col-sm-12 col-md-12">
                            <a href="/signin" className="btn btn-primary" onClick={readvalue}>back to login</a>
                        </div> */}
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default SignUp