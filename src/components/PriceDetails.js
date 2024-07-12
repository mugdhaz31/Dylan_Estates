import React from 'react'
import './PriceDetails.css'

const PriceDetails = ({data, onChange}) => {
    return (
        <div>
            <div className='pricebox'>
                <div className='pricebox1'>
                    <label className='topic3'>Rent <span className='red1'>*</span></label>
                    <div className='priceoption'>
                        <input className='rupee' defaultValue="$" name='Rent' type="text" value={data.Rent} onChange={(e) => onChange('Rent', e.target.value)} />
                    </div>
                </div>
                <div className='pricebox1'>
                    <label className='topic3'>Security <span className='red1'>*</span></label>
                    <div className='priceoption'>
                        <input className='rupee' defaultValue="$" name='Security' type="text" value={data.Security} onChange={(e) => onChange('Security', e.target.value)} />
                    </div>
                </div>
            </div>
            <div className='pricebox'>
                <div className='pricebox1'>
                    <label className='topic3'>Maintenance <span className='red1'>*</span></label>
                    <select value={data.maintenanceCharges}
                        onChange={(e) => onChange('maintenanceCharges', e.target.value)}>
                        <option value="">Maintenance</option>
                        <option value="No Maintenance">Included in Rent</option>
                        <option value="Monthly">Extra Maintenance</option>
                    </select>
                </div>
                <div className='pricebox1'>
                    <label className='topic3'>Maintenance <span className='red1'>*</span></label>
                    <div className='priceoption'>
                        <input className='rupee1' defaultValue="$" name='extramaintenanceCharges' type="text" value={data.extramaintenanceCharges} onChange={(e) => onChange('extramaintenanceCharges', e.target.value)} />
                        <select value={data.extramaintenanceCharges1}
                            onChange={(e) => onChange('extramaintenanceCharges1', e.target.value)}>
                            <option value="">Monthly</option>
                            <option value="No Maintenance">Included in Rent</option>
                            <option value="Monthly">Extra Maintenance</option>
                        </select>
                    </div>
                </div>
            </div>
            <div className='lastpricebox'>
            <label className='topic'>Additional Pricing details to convey to agent? <span className='red1'>*</span></label>
                <input className='inputadditional' type="text" name="Additional" value={data.Additional}  onChange={(e) => onChange('Additional', e.target.value)} />
               
            </div>
        </div>
    )
}

export default PriceDetails
