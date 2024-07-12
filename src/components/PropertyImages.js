import React , {useState} from 'react'
import './PropertyImages.css'

const PropertyImages = ({ data, onChange, onEdit, onPreview }) => {
  const [image, setImage] = useState(null);
  const [dragging, setDragging] = useState(false);

  const handleDragEnter = (e) => {
    e.preventDefault();
    e.stopPropagation();
    setDragging(true);
  };
  const handleDragLeave = (e) => {
    e.preventDefault();
    e.stopPropagation();
    setDragging(false);
  };
  const handleDragOver = (e) => {
    e.preventDefault();
    e.stopPropagation();
    setDragging(true);
  };
  const handleDrop = (e) => {
    e.preventDefault();
    e.stopPropagation();
    setDragging(false);
    const files = e.dataTransfer.files;
    if (files && files[0]) {
      const reader = new FileReader();
      reader.onload = (event) => {
        setImage(event.target.result);
      };
      reader.readAsDataURL(files[0]);
    }
  };
  

  return (
    <div>
      <div className='imageheading'> Add Photos / videos to attract more tenants! </div>
      <div className='imageheading2'>Add Photos of living room, bedroom, bathroom, floor, doors, kitchen, balcony, location map, neighborhood etc</div>
      <div
      className={`drop-zone ${dragging ? 'dragging' : ''}`}
      onDragEnter={handleDragEnter}
      onDragLeave={handleDragLeave}
      onDragOver={handleDragOver}
      onDrop={handleDrop}
    >
      {image ? (
        <img src={image} alt="Uploaded" className="uploaded-image"  value={data.photo}  onChange={(e) => onChange('photo', e.target.value)}/>
      ) : (
        <p><p className='camera'><i class="fa-solid fa-camera"></i></p><p className='addphoto'><i class="fa-solid fa-plus"></i>Add Photos Now</p></p>
      )}
    </div>
    </div>
  )
}

export default PropertyImages
