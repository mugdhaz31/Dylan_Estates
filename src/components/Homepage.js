import React from 'react'
import './Homepage.css'
import check from './check.png'
import Login from './login'

function Homepage() {
    return (
        <div className='content'>

            {/* //Adding information to the Homepage */}
            <div className='text1'>Sell or Rent your Property For Free</div>
            <div className='text2'>Whether you're ready to sell or looking for answers, we'll guide you with data and expertise specific to you needs.</div>
            <div className='content2'>
                <div className='text3'>Upload your property in 4 simple steps
                    <div className='steps'>
                        <ul>
                            <li className='step'>
                                <img className='check' src={check} alt=''></img>
                                <p>Add you properties <strong>Basic Details</strong></p>
                            </li>
                            <li className='step'>
                                <img className='check' src={check} alt=''></img>
                                <p>Add property <strong>Location</strong></p>
                            </li>

                            <li className='step'>
                                <img className='check' src={check} alt=''></img>
                                <p>Add property <strong>Features and amenItites</strong></p>
                            </li>
                            <li className='step'>
                                <img className='check' src={check} alt=''></img>
                                <p>Add property <strong>Price details</strong></p>
                            </li>
                            <li className='step'>
                                <img className='check' src={check} alt=''></img>
                                <p>Add your best <strong>Property Shots</strong></p>
                            </li>
                        </ul>
                    </div>
                </div>

                { /*Making the login element visible in the home page */ }
                <Login/>
            </div>
        </div>
    )
}

export default Homepage
