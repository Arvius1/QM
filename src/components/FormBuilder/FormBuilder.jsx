// import React, { useState, useRef, useEffect } from "react";
// import styles from "./FormBuilder.module.css";
// import { FormComponents } from "./formComponents";
// import Section from "./Section";
// import { FormIcons } from "./formIcons";

// const FormBuilder = () => {
//   const [sections, setSections] = useState([]);
//   const [formSchema, setFormSchema] = useState({
//     formTitle: "Untitled form",
//     formDescription: "Description",
//     sections: [],
//   });

//   const handleTitleChange = (formtitle) => {
//     setFormSchema({ ...formSchema, formTitle: formtitle });
//   };

//   const handleDescriptionChange = (formDescription) => {
//     setFormSchema({ ...formSchema, formDescription: formDescription });
//   };

//   const addSection = (event) => {
//     //Get Sequenction number for Section.
//     const newSequenceNumber = sections.length + 1;
//     // Create the new section
//     const newSection = {
//       id: Date.now(), // or use a unique identifier like UUID
//       title: `Section ${newSequenceNumber}`,
//       content: "",
//       sequence: newSequenceNumber,
//       subsections: [],
//       fields: [],
//     };

//     // Update the state with the new section
//     setSections([...sections, newSection]);
//     // Add sections data in JsonSchema
//     var newFormSchema = formSchema.sections.slice();
//     newFormSchema.push(newSection);
//     setFormSchema({ ...formSchema, sections: newFormSchema });
//   };

//   const deleteSection = (id) => {
//     setSections(sections.filter((section) => section.id !== id));
//     //Remove section data from JsonSchema
//     var filterFormSchema = formSchema.sections
//       .slice()
//       .filter((section) => section.id !== id);
//     setFormSchema({ ...formSchema, sections: filterFormSchema });
//   };

//   const updateSection = (updatedSection) => {
//     console.log("call updateSection", updatedSection);
//     console.log("sectionId", updatedSection.id);
//     alert(JSON.stringify(updatedSection));
//     alert(
//       sections.map((section) =>
//         section.id === updatedSection.id ? "updatedSection" : "section"
//       )
//     );

//     setSections(
//       sections.map((section) =>
//         section.id === updatedSection.id ? updatedSection : section
//       )
//     );

//     alert(JSON.stringify(sections));

//     setFormSchema({ ...formSchema, sections: sections });
//   };

//   return (
//     <div className={`container-fluid ${styles["formBuilderPage"]}`}>
//       <div className="row">
//         <div className="col-sm-1"> </div>
//         <div className={`${styles["form-content"]} col-sm-10`}>
//           <FormComponents.FormTitle onTitleChange={handleTitleChange} />
//           <FormComponents.FormDescription
//             onDescriptionChange={handleDescriptionChange}
//           />
//           <div className="">
//             {sections.map((section) => (
//               <Section
//                 key={section.id}
//                 section={section}
//                 updateSection={updateSection}
//                 deleteSection={deleteSection}
//               />
//             ))}

//             <div className={`${styles.tooltip}`} onClick={addSection}>
//               <img
//                 src={FormIcons.SectionIcon}
//                 alt="Add Section"
//                 className={`${styles.addSectionIcon}`}
//               />
//               <span className={`${styles.tooltiptext}`}>Add Section</span>
//             </div>
//           </div>
//         </div>
//         <div className="col-sm-1"></div>
//       </div>
//     </div>
//   );
// };

// export default FormBuilder;



// Mine 


// FormBuilder.jsx

import React, { useState } from "react";
import styles from "./FormBuilder.module.css";
import { FormComponents } from "./formComponents";
import Section from "./Section";
import { FormIcons } from "./formIcons";

const FormBuilder = () => {
  const [sections, setSections] = useState([]);
  const [formSchema, setFormSchema] = useState({
    formTitle: "Untitled form",
    formDescription: "Description",
    sections: [],
  });

  const handleTitleChange = (formTitle) => {
    setFormSchema({ ...formSchema, formTitle: formTitle });
  };

  const handleDescriptionChange = (formDescription) => {
    setFormSchema({ ...formSchema, formDescription: formDescription });
  };

  const addSection = () => {
    const newSection = {
      id: Date.now(),
      title: `Untitled Section`,
      subsections: [],
    };

    setSections([...sections, newSection]);
    setFormSchema({ ...formSchema, sections: [...formSchema.sections, newSection] });
  };

  const deleteSection = (id) => {
    const updatedSections = sections.filter((section) => section.id !== id);
    setSections(updatedSections);
    setFormSchema({ ...formSchema, sections: updatedSections });
  };

  const updateSection = (updatedSection) => {
    const updatedSections = sections.map((section) => (section.id === updatedSection.id ? updatedSection : section));
    setSections(updatedSections);
    setFormSchema({ ...formSchema, sections: updatedSections });
  };

  return (
    <div className={`container-fluid ${styles["formBuilderPage"]}`}>
      <div className="row">
        <div className="col-sm-1"></div>
        <div className={`${styles["form-content"]} col-sm-10`}>
          <FormComponents.FormTitle onTitleChange={handleTitleChange} />
          <FormComponents.FormDescription onDescriptionChange={handleDescriptionChange} />
          <div className="">
            {sections.map((section) => (
              <Section
                key={section.id}
                section={section}
                updateSection={updateSection}
                deleteSection={deleteSection}
              />
            ))}
            <div className={`${styles.tooltip}`} onClick={addSection}>
              <img
                src={FormIcons.SectionIcon}
                alt="Add Section"
                className={`${styles.addSectionIcon}`}
              />
              <span className={`${styles.tooltiptext}`}>Add Section</span>
            </div>
          </div>
        </div>
        <div className="col-sm-1"></div>
      </div>
    </div>
  );
};

export default FormBuilder;
