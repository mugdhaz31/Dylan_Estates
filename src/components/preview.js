import React, { useContext } from 'react'
import { FormContext } from '../FormProvider'
import logo2 from './logo2.png'
import './preview.css'

const Preview = () => {

  // Accessing the form data from formContext
  const { formData } = useContext(FormContext)
  return (
    <div className='propertypreviewbox'>
      <div className='previewbox'>
        <div className='previewbox1'>
          <div className='head1'>1 BHK Flat / Apartment for Rent in Gokul Village Chs 2 (542 Sq. ft. )</div>
          <div className='photo'>
            <p>
              {formData.photo}
              <p className='camera'><i class="fa-solid fa-camera"></i></p>
              <p className='addphoto'><i class="fa-solid fa-plus"></i>Add Photos Now</p>
            </p>
          </div>
          <div className='overview'>
            <div className='title letters'><div>Property Overview</div><div className='building'>Building : {formData.BuildingName}</div></div>
            <div className='info'>
              <div className='infos'>
                <i class="fa-solid fa-house"></i>
                <div><p className='letter1'>{formData.propertyFor}</p><p className='letter2'>Propert For</p></div>
              </div>
              <div className='infos'>
                <i class="fa-regular fa-building"></i>
                <div><p className='letter1'>{formData.propertyType}</p><p className='letter2'>Propert Type</p></div>
              </div>
              <div className='infos'>
                <i class="fa-solid fa-paw"></i>
                <div><p className='letter1'>{formData.petsAllowed}</p><p className='letter2'>Pets Allowed</p></div>
              </div>
              <div className='infos'>
                <i class="fa-solid fa-bowl-rice"></i>
                <div><p className='letter1'>{formData.nonVeg}</p><p className='letter2'>Non Veg</p></div>
              </div>
              <div className='infos'>
                <i class="fa-solid fa-bolt"></i>
                <div><p className='letter1'>{formData.Electricity}</p><p className='letter2'>Electricity Status</p></div>
              </div>
              <div className='infos'>
                <i class="fa-regular fa-money-bill-1"></i>
                <div ><p className='letter1'>{formData.Rent}</p><p className='letter2'>Rent</p></div>
              </div>
              <div className='infos'>
                <i class="fa-solid fa-eye"></i>
                <div ><p className='letter1'>{formData.Security}</p><p className='letter2'>Security</p></div>
              </div>
              <div className='infos'>
                <i class="fa-solid fa-toolbox"></i>
                <div ><p className='letter1'>{formData.maintenanceCharges}</p><p className='letter2'>Maintenance</p></div>
              </div>
              <div className='infos'>
                <i class="fa-solid fa-bath"></i>
                <div ><p className='letter1'>One (1)</p><p className='letter2'>Bathrooms</p></div>
              </div>
              <div className='infos'>
                <i class="fa-solid fa-couch"></i>
                <div ><p className='letter1'>Two (2)</p><p className='letter2'>Bedrooms</p></div>
              </div>
              <div className='infos'>
                <i class="fa-solid fa-users"></i>
                <div ><p className='letter1'>Any (Family / Bachelor)</p><p className='letter2'>Tenant Preference</p></div>
              </div>
            </div>
          </div>
          <div className='description'>
            <p className=' title letters'>Decription</p>
            <p>{formData.propertyDescription}</p>
          </div>
          <div className='description'>
            <p className=' title letters'>Address</p>
            <p>{formData.propertyAddress}</p>
          </div>


        </div>
        <div className='previewbox2'>
          <div className='first'>
            <div><p className='head1'> <strong>$ 20,000</strong> / Month </p><p className='letter3'>(Rent Negotiable)</p></div>
            <div><p className='head1'> <strong>$ 20,000 </strong></p><p className='letter3'>(Deposit)</p></div>
          </div>
          <div className='second'>
            <p className='letter4'>Send an Enquiry for this property?</p>
            <p className='letter2'>Contact person : Melvin Lasrado</p>
            <p className='p'><i class="fa-solid fa-phone"></i>+91-9999999999</p>
            <p><label><input type='text' defaultValue='Name' ></input></label></p>
            <p><label><input type='text' defaultValue='Email' ></input></label></p>
            <p className='letter2 p2'>I would like more information about Sector 5, shanti nagar, anubhav society</p>
            <button>Send Enquiry</button>
          </div>
        </div>
      </div>
      <div className='footer'>
        <img src={logo2} alt='Logo'></img>
        <div className='lastfooter'>
          <div className='footer1'>
            <p>HOME</p>
            <p>PROPERTIES</p>
            <p>LIST YOUR PROPERTY</p>
            <p>SAVED SEARCHES</p>
          </div>
          <div className='footer1'>
            <p>ABOUT MIRA ROAD</p>
            <p>EMI CALCULATOR</p>
            <p>TESTAMONIALS</p>
            <p>EXPLORE NEIGHBOURHOOD</p>
          </div>
          <div className='footer1'>
            <p>ABOUT US</p>
            <p>CONTACT US</p>
            <p>FAQ'S</p>
          </div>
          <div className='footer1'>
            <p><p><strong>CONTACT US</strong></p>
            <div>8/28, Shop No 1, Madhukar Co Op </div><div>Housing Society, Sector 5, Shanti</div></p>
            <p><p><strong>OFFICE HOURS</strong></p>
            <div>8/28, Shop No 1, Madhukar Co Op </div><div>Housing Society, Sector 5, Shanti</div></p>
          </div>
        </div>
        <div className='border'></div>
        <div className='Last'>2024 Dylan Estates. All rights reserved. Dylan Estates- Your Neighorhood Experts</div>
        <div>Privacy Policy | Terms & Conditions</div>
      </div>
    </div>
  )
}

export default Preview
