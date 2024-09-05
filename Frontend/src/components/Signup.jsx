import React, { useState } from 'react'
import {Link, useNavigate} from 'react-router-dom'
function Signup() {
  const navigate = useNavigate();
  const [credential, setCredential] = useState({
    name:'',
    email:'',
    password:'',
    location:''
  })
  const handleChange = (e)=>{
    setCredential({...credential, [e.target.name]: e.target.value})
  }
  const handleSubmit = async (e)=>{
    e.preventDefault();
    const respnse = await fetch('https://foodapplicationbackend.onrender.com/api/createuser',{
      method:'POST',
      headers:{
        'Content-Type':'application/json'
      },
      body:JSON.stringify({name:credential.name, email:credential.email, password:credential.password, location:credential.location})
    })
    const json = await respnse.json()
    console.log(json)
    if(!json.sucesss){
      alert('Enter valid credentials')
    }
    else{
      alert('successfully Registered')
      setTimeout(() => {
        navigate('/login')
      }, 2000);
    }
  }
  return (
    <div className='my-10'>
      <section className="vh-60 my-10 bg-white">
        <div className="container h-100 w-100 ">
          <div className="row d-flex justify-content-center align-items-center h-100 ">
            <div className="col-lg-12 col-xl-11">
              <div className="my-2 card text-dark">
                <div className="card-body bg-white px-1 p-md-5">
                  <div className="row justify-content-center">
                    <div className="col-md-10 col-lg-6 col-xl-5 order-2 order-lg-1">

                      <p className="text-center h1 fw-bold mb-5 mx-1 mx-md-4 mt-4">Sign up</p>

                      <form className="mx-1 mx-md-4" onSubmit={handleSubmit}>

                        <div className="d-flex flex-row align-items-center mb-4">
                          <i className="fas fa-user fa-lg me-3 fa-fw"></i>
                          <div data-mdb-input-init className="form-outline flex-fill mb-0">
                            <input type="text" name='name' value={credential.name} onChange={handleChange} id="form3Example1c" className="form-control bg-white" />
                            <label className="form-label" htmlFor="form3Example1c">Your Name</label>
                          </div>
                        </div>

                        <div className="d-flex flex-row align-items-center mb-4">
                          <i className="fas fa-envelope fa-lg me-3 fa-fw"></i>
                          <div data-mdb-input-init className="form-outline flex-fill mb-0">
                            <input type="email" name='email' value={credential.email} onChange={handleChange}  id="form3Example3c" className="bg-white form-control" />
                            <label className="form-label" htmlFor="form3Example3c">Your Email</label>
                          </div>
                        </div>

                        <div className="d-flex flex-row align-items-center mb-4">
                          <i className="fas fa-lock fa-lg me-3 fa-fw"></i>
                          <div data-mdb-input-init className="form-outline flex-fill mb-0">
                            <input name='password'  value={credential.password} onChange={handleChange}  type="password" id="form3Example4c" className="bg-white form-control" />
                            <label className="form-label" htmlFor="form3Example4c">Password</label>
                          </div>
                        </div>

                        <div className="d-flex flex-row align-items-center mb-4">
                          <i className="fas fa-key fa-lg me-3 fa-fw"></i>
                          <div data-mdb-input-init className="form-outline flex-fill mb-0">
                            <input value={credential.location} 
                            onChange={handleChange} name='location' type="text" id="form3Example4cd" className="form-control bg-white" />
                            <label className="form-label" htmlFor="form3Example4cd">Location</label>
                          </div>
                        </div>

                        <div className="form-check d-flex justify-content-center mb-5">
                          <input className="form-check-input me-2" type="checkbox" value="" id="form2Example3c" />
                          <label className="form-check-label" htmlFor="form2Example3">
                            I agree all statements in <a href="#!">Terms of service</a>
                          </label>
                        </div>

                        <div className="d-flex justify-content-center mx-4 mb-3 mb-lg-4">
                          
                          <input type="submit" className="btn btn-success btn-sm" value="Register" />
                          <button data-mdb-button-init data-mdb-ripple-init className="mx-1 btn btn-outline-dark btn-sm text-decoration-none text-white">
                            <Link to='/login'>
                              LogIn
                            </Link>
                          </button>
                        </div>
                        
                      </form>

                    </div>
                    <div className="col-md-10 col-lg-6 col-xl-7 d-flex align-items-center order-1 order-lg-2">

                      <img src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-registration/draw1.webp"
                        className="img-fluid" alt="Sample image" />

                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

    </div>
  )
}

export default Signup
