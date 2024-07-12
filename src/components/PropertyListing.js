import React, { useState, useContext } from 'react'
import { useHistory } from 'react-router-dom';
import './PropertyListing.css'
import { FormContext } from '../FormProvider';
import Propertydetails from './propertydetails'
import PropertyLocation from './Propertylocation'
import PropertyFeatures from './PropertyFeatures'
import PriceDetails from './PriceDetails'
import PropertyImages from './PropertyImages'

const PropertyListing = () => {

    const { formData, setFormData } = useContext(FormContext);
    const history = useHistory();
    const [currentSection, setCurrentSection] = useState('Propertydetails');

    // Function to go to the next step

    const handleNextClick = () => {
        switch (currentSection) {
            case 'Propertydetails':
                setCurrentSection('PropertyLocation');
                break;
            case 'PropertyLocation':
                setCurrentSection('PropertyFeatures');
                break;
            case 'PropertyFeatures':
                setCurrentSection('PriceDetails');
                break;
            case 'PriceDetails':
                setCurrentSection('PropertyImages');
                break;
            default:
                break;
        }

    };

    const handleInputChange = (name, value) => {
        setFormData(prevState => ({ ...prevState, [name]: value }));
    };


    // Navigating to submission page
    const handleSubmit = () => {
        console.log('Form submitted:', formData);
        history.push('/Save');
    };

    return (
        <div className='content1'>
            <div className='box'>
                <div className='section1'>
                    <ul>

                        {/* Using active class to show which step it is */}
                        
                        <li className={`options ${currentSection === 'Propertydetails' ? 'active' : ''}`}>PROPERTY DETAILS</li>
                        <li className={`options ${currentSection === 'PropertyLocation' ? 'active' : ''}`}>LOCATION DETAILS</li>
                        <li className={`options ${currentSection === 'PropertyFeatures' ? 'active' : ''}`}>FEATURES & AMENITITES</li>
                        <li className={`options ${currentSection === 'PriceDetails' ? 'active' : ''}`}>PRICE DETAILS</li>
                        <li className={`options ${currentSection === 'PropertyImages' ? 'active' : ''}`}>PROPERTY IMAGES</li>
                    </ul>
                </div>
                <div className='maincontent'>
                    {currentSection === 'Propertydetails' && (
                        <Propertydetails data={formData} onChange={handleInputChange} />
                    )}
                    {currentSection === 'PropertyLocation' && (
                        <PropertyLocation data={formData} onChange={handleInputChange} />
                    )}
                    {currentSection === 'PropertyFeatures' && (
                        <PropertyFeatures data={formData} onChange={handleInputChange} />
                    )}
                    {currentSection === 'PriceDetails' && (
                        <PriceDetails data={formData} onChange={handleInputChange} />
                    )}
                    {currentSection === 'PropertyImages' && (
                        <PropertyImages data={formData} onChange={handleInputChange} />
                    )}
                </div>
                <div className='last'>
                    <div>Need Help? <strong>Call 9999999999</strong></div>
                    {currentSection === 'PropertyImages' ? (
                        <button className='save' onClick={handleSubmit} >SAVE & POST</button>
                    ) : (
                        <button className='next' onClick={handleNextClick}>NEXT</button>
                    )}
                </div>
            </div>

        </div>
    )
}

export default PropertyListing
