import React, { useState } from 'react'
import { NavLink, useNavigate } from 'react-router-dom'
function Login() {

    let navigate = useNavigate();
    const handleSubmit = async (e)=>{
        e.preventDefault();
        const respnse = await fetch('http://localhost:4000/api/loginuser',{
          method:'POST',
          headers:{
            'Content-Type':'application/json'
          },
          body:JSON.stringify({ email:credential.email, password:credential.password})
        })
        const json = await respnse.json()
        console.log(json)
        if(!json.sucesss){
          alert('Enter valid credentials')
        }
        if(json.sucesss){
            
          localStorage.setItem('authToken', json.authToken)
          localStorage.setItem('userEmail', credential.email)
          console.log(localStorage.getItem('authToken'))
          navigate('/')
          
        }
      }
    const [credential, setCredential] = useState({
        email:"",
        password: ""
    })
    const handleChange = (e)=>{
        setCredential({...credential, [e.target.name]:e.target.value})
    }
    return (
        <>
            <div className="d-flex flex-column justify-content-center align-items-center vh-100 bg-dark">
                <h1>Login</h1>
                <form className="bg-dark p-4 rounded shadow-sm col-md-6" onSubmit={handleSubmit} >
                    <div className="form-group mb-3">
                        <label htmlFor="inputEmail4" className="form-label">Email</label>
                        <input type="email" name='email' value={credential.email} onChange={handleChange} className="form-control" id="inputEmail4" />
                    </div>
                    <div className="form-group mb-3">
                        <label htmlFor="inputPassword4" className="form-label">Password</label>
                        <input type="password" name='password' value={credential.password} onChange={handleChange} className="form-control" id="inputPassword4" />
                    </div>
                    <div className="form-group mb-3">
                        <input type="submit" className="btn btn-primary w-100" value="LogIn" />
                    
                    </div>
                    <div className="form-group">
                        <button type="submit" className="btn btn-secondary w-100">
                            <NavLink to='/signup' className='w-100 text-decoration-none text-white' >Register</NavLink>
                        </button>
                    </div>
                </form>
            </div>
        </>
    )
}

export default Login
