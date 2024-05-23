import React, { useState } from 'react';
import styles from "./FormDescription.module.css"


const FormDescription = ({ onDescriptionChange }) => {
  const [description, setDescription] = useState('Description');
  const [isEditing, setIsEditing] = useState(false);

  const handleDescriptionChange = (event) => {  
    {((event.target.value).length)>0? setDescription(event.target.value):setDescription('Description')};
    {((event.target.value).length)>0? onDescriptionChange(event.target.value) :onDescriptionChange('Description')}; 
  };

  const handleDescriptionClick = () => {
    setIsEditing(true);
  };

  const handleDescriptionBlur = () => {
    setIsEditing(false);
  };

  const getHrClass = () => {
    if (isEditing) {
      return styles.UnderlineStyleOnEditable;
    } else {
      return styles.UnderlineStyle;
    }
  };

  return (
    <div>
      {isEditing ? ( <input type="text" className={`${styles.DescriptionInput}`} value={description} onChange={handleDescriptionChange} onBlur={handleDescriptionBlur} autoFocus />) : ( <h1 onClick={handleDescriptionClick} className={`${styles.DescriptionHeader}`}>{description}</h1>)} 
      <hr className={getHrClass()} />     
    </div>
  );
};

export default FormDescription;