// import React, { useState, useEffect  } from 'react';
// import styles from './Section.module.css'
// import Subsection from './Subsection'; 
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
// import { faTrashCan } from '@fortawesome/free-regular-svg-icons'
// import SectionTitleInput from './FormComponent/SectionTitleInput';


// const Section = ({ section, updateSection, deleteSection }) => {  
//   const [sectionHeaderValue, setSectionHeaderText] = useState(section.title);

//   const onSectionHeaderChange =(sectionTitle)=>{ 
//     console.log(sectionTitle)
//     const updatedSection = {
//       ...section,
//       title: sectionTitle
//     };   
//     updateSection(updatedSection);
//   };

 

//     //  const selectSection= items.map(section => section.id === id)
//     //  alert(selectSection)
//     //Remove section data from JsonSchema
//     // var newArray = formSchema.sections.slice().filter(section=> section.id !== id); 
//     // setFormSchema({...formSchema, sections: newArray })
 
//   // const addSubsection = () => {
//   //   const updatedSection = {
//   //     ...section,
//   //     subsections: [...section.subsections, { id: Date.now(), fields: [] }]
//   //   };
//   //   updateSection(updatedSection);
//   // };

//   // const updateSubsection = (updatedSubsection) => {
//   //   const updatedSection = {
//   //     ...section,
//   //     subsections: section.subsections.map(subsection =>
//   //       subsection.id === updatedSubsection.id ? updatedSubsection : subsection
//   //     )
//   //   };
//   //   updateSection(updatedSection);
//   // };

//   return (
//     <div className={`${styles.MainSection}`}> 
//       <div className={`${styles.SectionHeader}`}>
//         {/* <h1>{section.title}</h1>  */}
//         {/* <input key={section.id} type="text" placeholder={section.title} onBlur={() => addSectionHeader(section.id)} onChange={() => onChangeSectionHeader(section.id)} /> */}
        
//         <SectionTitleInput key={section.id} sectionHeaderText={sectionHeaderValue} onSectionHeaderChange={onSectionHeaderChange} />  

//       </div>  
//       <div className={`${styles.SectionContent}`}> 



//         {/* {section.subsections.map(subsection => (
//           <Subsection key={subsection.id} subsection={subsection} updateSubsection={updateSubsection} />
//         ))}
//         <button onClick={addSubsection}>Add Subsection</button> */}


//       </div>  
//       <div className={`${styles.SectionFooter}`}>  
//       &nbsp;
//         <div className={`${styles.divDelete}`} onClick={() => deleteSection(section.id)} >         
//           <FontAwesomeIcon icon={faTrashCan} className={`${styles.svgDelete}`}  /> Delete          
//         </div>
//       </div> 
//     </div>
//   );
// };

// export default Section;



// Mine 


// Section.jsx

import React from "react";
import styles from "./Section.module.css";
import Subsection from "./Subsection";

const Section = ({ section, updateSection, deleteSection }) => {
  const addSubsection = () => {
    const updatedSection = {
      ...section,
      subsections: [
        ...section.subsections,
        { id: Date.now(), questions: [] }, // Each subsection contains questions
      ],
    };
    updateSection(updatedSection);
  };

  const deleteSubsection = (subsectionId) => {
    const updatedSection = {
      ...section,
      subsections: section.subsections.filter(
        (subsection) => subsection.id !== subsectionId
      ),
    };
    updateSection(updatedSection);
  };

  return (
    <div className={`${styles.MainSection}`}>
      <div className={`${styles.SectionHeader}`}>
        <h1 className={`${styles.TitleHeader}`}>{section.title}</h1>
      </div>
      <div className={`${styles.SectionContent}`}>
        {section.subsections.map((subsection) => (
          <Subsection
            key={subsection.id}
            subsection={subsection}
            updateSection={updateSection}
            deleteSubsection={deleteSubsection}
          />
        ))}
        <button onClick={addSubsection}>Add Subsection</button>
      </div>
      <div className={`${styles.SectionFooter}`}>
        <div className={`${styles.divDelete}`} onClick={() => deleteSection(section.id)}>
          Delete
        </div>
      </div>
    </div>
  );
};

export default Section;
