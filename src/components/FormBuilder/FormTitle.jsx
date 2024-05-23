import React, { useState } from 'react';
import styles from "./FormTitle.module.css"

const FormTitle = ({ onTitleChange }) => {
  const [title, setTitle] = useState('Untitled form');
  const [isEditing, setIsEditing] = useState(false);
  

  const handleTitleChange = (event) => {  
    {((event.target.value).length)>0? setTitle(event.target.value) : setTitle('Untitled form')};
    {((event.target.value).length)>0? onTitleChange(event.target.value) : onTitleChange('Untitled form')}; 
  };

  const handleTitleClick = () => {
    setIsEditing(true);
  };

  const handleTitleBlur = () => {
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
    <div className={styles.divFormTitle}>
      {isEditing ? ( <input type="text" className={`${styles.TitleInput}`} value={title} onChange={handleTitleChange} onBlur={handleTitleBlur} autoFocus />) : ( <h1 onClick={handleTitleClick} className={`${styles.TitleHeader}`}>{title}</h1>)} 
      <hr className={getHrClass()} />     
    </div>
  );
};

export default FormTitle;