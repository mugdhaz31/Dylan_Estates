import React from 'react'
import './PropertyFeatures.css'

const PropertyFeatures = ({data, onChange}) => {
    return (
        <div>
            <div className='topic2'>General Features</div>
            <div className='featuresbox'>
                <label className='topic2'> <span className='red1'>*</span>Non-Veg </label>
                <div className='features'>
                    <input type="radio" name="nonVeg" value="Allowed" checked={data.nonVeg === 'Allowed'}
                        onChange={(e) => onChange('nonVeg', e.target.value)} />
                    <label className='topic2'>Allowed</label>
                    <input type="radio" name="nonVeg" value="NotAllowed" checked={data.nonVeg === 'NotAllowed'}
                        onChange={(e) => onChange('nonVeg', e.target.value)} />
                    <label className='topic2'>Not Allowed</label>
                </div>
            </div>
            <div className='featuresbox'>
                <label className='topic2'> <span className='red1'>*</span>Pets Allowed </label>
                <div className='features'>
                    <input type="radio" name="petsAllowed" value="Allowed" checked={data.petsAllowed === 'Allowed'}
                        onChange={(e) => onChange('petsAllowed', e.target.value)} />
                    <label className='topic2'>Allowed</label>
                    <input type="radio" name="petsAllowed" value="NotAllowed" checked={data.petsAllowed === 'NotAllowed'}
                        onChange={(e) => onChange('petsAllowed', e.target.value)} />
                    <label className='topic2'>Not Allowed</label>
                </div>
            </div>
            <div className='featuresbox'>
                <label className='topic2'> <span className='red1'>*</span>Electricity </label>
                <div className='features'>
                    <input type="radio" name="Electricity" value="Rare/No" checked={data.Electricity === 'Rare/No'}
                        onChange={(e) => onChange('Electricity', e.target.value)} />
                    <label className='topic2'>Rare/No Powercut</label>
                    <input type="radio" name="Electricity" value="Frequent" checked={data.Electricity === 'Frequent'}
                        onChange={(e) => onChange('Electricity', e.target.value)} />
                    <label className='topic2'>Frequent Powercut</label>
                </div>
            </div>
        </div >
    )
}

export default PropertyFeatures
