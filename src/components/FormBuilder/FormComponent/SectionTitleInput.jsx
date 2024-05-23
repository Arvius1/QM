import React, { useState, useEffect } from "react";
import styles from "./SectionTitleInput.module.css";

const SectionTitleInput = ({ sectionHeaderText, onSectionHeaderChange }) => {
  const [sectionTitleText, setSectionTitleText] = useState(sectionHeaderText);
  const [isEditing, setIsEditing] = useState(false);

  // useEffect(() => {
  // setSectionTitleText(formData.email);
  // }, [formData.email]);

  const handleSectionHeaderChange = (event) => {
    event.target.value.length > 0
      ? setSectionTitleText(event.target.value)
      : setSectionTitleText(sectionHeaderText);
  };

  const handleSectionHeaderClick = () => {
    setIsEditing(true);
  };

  const handleSectionHeaderBlur = (event) => {
    setIsEditing(false);

    event.target.value.length === 0
      ? onSectionHeaderChange(sectionHeaderText)
      : onSectionHeaderChange(event.target.value);
  };

  const getHrClass = () => {
    if (isEditing) {
      return styles.UnderlineStyleOnEditable;
    } else {
      return styles.UnderlineStyle;
    }
  };

  return (
    <div className={`${styles.divSectionHeader}`}>
      {isEditing ? (
        <input
          type="text"
          className={`${styles.SectionInput}`}
          value={sectionTitleText}
          onChange={handleSectionHeaderChange}
          onBlur={handleSectionHeaderBlur}
          autoFocus
        />
      ) : (
        <h1
          onClick={handleSectionHeaderClick}
          className={`${styles.SectionHeader}`}
        >
          {sectionTitleText}
        </h1>
      )}
      <hr className={getHrClass()} />
    </div>
  );
};

export default SectionTitleInput;
