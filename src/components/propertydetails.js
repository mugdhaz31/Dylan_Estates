import React from 'react'
import './propertydetails.css'
const propertydetails = ({ data, onChange }) => {
    return (
        <div>
            <div className='detailsform'>
                <div className='detailbox' >
                    <label className='topic'> <span className='red1'>*</span>Property For : </label>
                    <div className='property'>
                        <input  type="radio" name="propertyFor" value="Rent" checked={data.propertyFor === 'Rent'}
                            onChange={(e) => onChange('propertyFor', e.target.value)} />
                        <label className='topic'>Rent</label>
                        <input  type="radio" name="propertyFor" value="Sale" checked={data.propertyFor === 'Sale'}
                            onChange={(e) => onChange('propertyFor', e.target.value)} />
                        <label className='topic'>Sale</label>
                    </div>
                </div>
                <div className='detailbox' >
                    <label className='topic'> <span className='red1'>*</span>Property Type : </label>
                    <div className='property'>
                        <input  type="radio" name="propertyType" value="Residential" checked={data.propertyType === 'Residential'}
                            onChange={(e) => onChange('propertyType', e.target.value)} />
                        <label className='topic'>Residential</label>
                        <input type="radio" name="propertyType" value="Commercial" checked={data.propertyType === 'Commercial'}
                            onChange={(e) => onChange('propertyType', e.target.value)} />
                        <label className='topic'>Commercial</label>
                        <input type="radio" name="propertyType" value="Land/Plot" checked={data.propertyType === 'Land/Plot'}
                            onChange={(e) => onChange('propertyType', e.target.value)} />
                        <label className='topic'>Land / Plot</label>
                    </div>
                </div >
                <div className='propertydescription detailbox'>
                <label className='topic'>Property Description <span className='red1'>*</span></label>
                <input  type="text" name="propertyDescription" value={data.propertyDescription}  onChange={(e) => onChange('propertyDescription', e.target.value)} />
                </div>
            </div>
        </div>
    )
}

export default propertydetails
