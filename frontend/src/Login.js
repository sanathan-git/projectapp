import React , { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import Validation from './LoginValidation';
import axios from 'axios';



function Login() {
    const [values, setValues] = useState({
        email: '',
        password: ''
    })
    const navigate = useNavigate();

    const [errors, setErrors] = useState({})
    const handleInput = (event) => {
        setValues(prev => ({...prev, [event.target.name]: [event.target.value]})) 
    }
    const handleSubmit = (event) => {
        event.preventDefault();
        const err = Validation(values); setErrors(err);
        if(errors.email === "" && errors.password === "" ){
          axios.post('http://localhost:8081/login', values)
          .then(res => {
            if(res.data === "Success"){
            navigate('/home');
            }else{
              alert("NO record existed");
            }
           
          })
          .catch(errors => console.log(errors));
        }
    }

  return (
   <div className='d-flex justify-content-center align-items-center bg-success vh-100'>
    <div className='bg-white p-3 rounded w-35'>
         <h2 className='d-flex justify-content-center align-items-center font-weight-bold'>LOGIN NOW</h2>
        <form action="" onSubmit={handleSubmit}>
            <div className='mb-3'>
              <label htmlFor="email"><strong>Email</strong></label>
              <input type="email" placeholder='Enter Email' name='email'
              onChange={handleInput} className='form-control rounded-0'></input>
              {errors.email && <span className='text-danger'>{errors.email}</span>}
            </div>
            <div className='mb-3'>
              <label htmlFor="password"><strong>Password</strong></label>
              <input type="password" placeholder='Enter password' name='password'
              onChange={handleInput} className='form-control rounded-0'></input>
               {errors.password && <span className='text-danger'>{errors.password}</span>}
            </div>
            <button type="submit" className='btn btn-success w-100'><strong>Log in</strong></button>
            <p className='mt-2' > You are Agree to your terms and conditions.</p>
            <Link to="/signup" className='btn btn-default border w-100 bg-light rounded-0 text-decoration-none'>Create Account</Link>
        </form>
    </div>
    </div>
  )
}

export default Login

