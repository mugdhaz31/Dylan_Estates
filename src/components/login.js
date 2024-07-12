import React, { useState } from 'react'
import './login.css'
function Login() {

  //Using useState for form elements
  const [formData, setFormData] = useState({
    gender: '',
    name: '',
    country: '',
    contact: '',
    email: ''
  });

  //Eunction for handling change in form
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };
  return (
    <div className='scroll'>
      <div className='loginbox1'>LETS GET YOU STARTED</div>
      <div className='loginbox2'>
        <div className='form'>
          <form>
            <div >
              <label> <span className='red'>*</span>I am : </label>
              <div className='inputgender' >
                <input type="radio" name="gender" value="female" onChange={handleChange} />
                <label className='logintext'>Female</label>
                <input type="radio" name="gender" value="male" onChange={handleChange} />
                <label className='logintext'>Male</label>
              </div>
            </div>
            <div className='subbox'>
              <label>Name  <span className='red'>*</span></label>
              <input className='inputname' type="text" name="name" onChange={handleChange} />
            </div>
            <div className='subbox'>
              <label>Country  <span className='red'>*</span></label>
              <select name="country" value={formData.country} onChange={handleChange} >
                <option value="">India</option>
                <option value="us">United States</option>
                <option value="ca">Canada</option>
                <option value="uk">United Kingdom</option>
              </select>
            </div>
            <div className='subbox'>
              <label>Phone <span className='red'>*</span></label>
              <input className='inputname' type="text" name="contact" value={formData.contact} onChange={handleChange} />
            </div>
            <p className='logintext2'>OR</p>
            <div className='subbox'>
              <label>Email  <span className='red'>*</span></label>
              <input className='inputname' type="email" name="email" value={formData.email} onChange={handleChange} />
            </div>
          </form>
        </div>
      </div>
      <div className='loginbox3'>
        <div>Need Help? <strong> Call 9999999999</strong></div>
        <button>NEXT</button>
      </div>
    </div>
  )
}

export default Login
