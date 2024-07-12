import React, { useContext } from 'react'
import { FormContext } from '../FormProvider'
import { useHistory } from 'react-router-dom';
import './save.css'

const Save = () => {
    const { formData } = useContext(FormContext);
    console.log(formData)
    const history = useHistory();

    const handleEdit = () => {
        history.push('/PropertyListing');
    };

    const handlePreview = () => {
        console.log(formData)
        history.push('/Preview');
    };

    return (
        <div className='savebox'>
            <p className='line1'>Thank you for listing your property with us,</p>
            <p className='line2'>Your listing will be reviewed and will go live within 24 hours.</p>
            <p className='line3'>We will now manage your listing and get in touch with you after finding the best suitable tanent</p>
            <p className='line2'>as per your preference.</p>
            <p className='line4'> -Dylan Estates</p>
            <div className='btns'>

                {/* Navifgtating to PropertyListing page to edit */}
                <button type="button" onClick={handleEdit}>Edit Property Listing</button>

                {/* Navigating to preview page to preview the form  */}
                <button type="button" onClick={handlePreview}>Preview Property Listing</button>
            </div>
        </div>
    )
}

export default Save
