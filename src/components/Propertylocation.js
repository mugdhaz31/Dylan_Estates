import React from 'react'
import './Propertylocation.css'
import { useJsApiLoader, GoogleMap } from '@react-google-maps/api'

const center = {lat: 48.8584 , lng : 2.2945}

const Propertylocation = ({data, onChange}) => {
    const {isLoaded} = useJsApiLoader({
        googleMapsApiKey : process.env.REACT_APP_GOOGLE_MAPS_API_KEY
    })
    if(!isLoaded){
        return<keletonText/>
    }
    return (
        <div>
            <div className='locationbox'>
                <label className='topic1'>Building / Society Name  <span className='red2'>*</span></label>
                <select name="BuildingName" value={data.BuildingName}
                    onChange={(e) => onChange('BuildingName', e.target.value)}>
                    <option value="">Pushpak</option>
                    <option value="us">Swapnapurti</option>
                    <option value="ca">Mantra Moments</option>
                    <option value="uk">Kingdom</option>
                </select>
            </div>
            <div className='locationbox'>
                <label className='topic1'>Property Address <span className='red2'>*</span></label>
                <input className='inputaddress' type="text" name="propertyAddress" value={data.propertyAddress}
                    onChange={(e) => onChange('propertyAddress', e.target.value)} />
            </div>
            <div className='map' >
                <div className='topic1'>Mark Locality on Map</div>
                <GoogleMap center= {center} zoom={15} mapContainerStyle={ {width: '850px', height: '400px'}}>
                    <input type='text'></input>
                </GoogleMap>
            </div>
        </div>
    )
}

export default Propertylocation
