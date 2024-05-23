// import React, { useState } from 'react';
// // import FormField from './FormField';

// const Subsection = ({ subsection, updateSubsection }) => {
  
  
//   const addField = () => {
//     const updatedSubsection = {
//       ...subsection,
//       fields: [...subsection.fields, { id: Date.now(), label: '', value: '' }]
//     };
//     updateSubsection(updatedSubsection);
//   };

//   const updateField = (updatedField) => {
//     const updatedSubsection = {
//       ...subsection,
//       fields: subsection.fields.map(field =>
//         field.id === updatedField.id ? updatedField : field
//       )
//     };
//     updateSubsection(updatedSubsection);
//   };

//   return (
//     <div style={{ border: '1px solid gray', padding: '10px', margin: '10px 0' }}>
//       <h3>Subsection</h3>
//       {/* {subsection.fields.map(field => (
//         <FormField key={field.id} field={field} updateField={updateField} />
//       ))}
//       <button onClick={addField}>Add Field</button> */}
//     </div>
//   );
// };

// export default Subsection;


// Mine


import React, { useState } from "react";
import {
  ShortAnswerQuestion,
  CheckboxQuestion,
  MultipleChoiceQuestion,
  LongAnswerQuestion,
} from "./Question";

const Subsection = ({ subsection, updateSection, deleteSubsection }) => {
  const [questions, setQuestions] = useState(subsection.questions || []);

  const addQuestion = (type) => {
    const newQuestion = {
      id: Date.now(),
      type,
      question: "",
      options: type === "multiple-choice" || type === "checkbox" ? ["", ""] : [],
      answer: "",
    };
    setQuestions([...questions, newQuestion]);
  };

  const deleteQuestion = (id) => {
    const updatedQuestions = questions.filter((question) => question.id !== id);
    setQuestions(updatedQuestions);
  };

  const updateQuestion = (updatedQuestion) => {
    const updatedQuestions = questions.map((question) =>
      question.id === updatedQuestion.id ? updatedQuestion : question
    );
    setQuestions(updatedQuestions);
  };

  const renderQuestion = (question) => {
    switch (question.type) {
      case "short-answer":
        return <ShortAnswerQuestion key={question.id} question={question} updateQuestion={updateQuestion} />;
      case "checkbox":
        return <CheckboxQuestion key={question.id} question={question} updateQuestion={updateQuestion} />;
      case "multiple-choice":
        return <MultipleChoiceQuestion key={question.id} question={question} updateQuestion={updateQuestion} />;
      case "long-answer":
        return <LongAnswerQuestion key={question.id} question={question} updateQuestion={updateQuestion} />;
      default:
        return null;
    }
  };

  return (
    <div>
      <div>
        {questions.map((question) => (
          <div key={question.id}>
            {renderQuestion(question)}
            <button style={{margin:"3px"}} onClick={() => deleteQuestion(question.id)}>Delete Answer Option</button>
          </div>
        ))}
      </div>
      <div>
        <button style={{margin:"3px",borderRadius:"2px"}} onClick={() => addQuestion("short-answer")}>Add Short Answer</button>
        <button style={{margin:"3px",borderRadius:"2px"}} onClick={() => addQuestion("checkbox")}>Add Checkbox</button>
        <button style={{margin:"3px",borderRadius:"2px"}} onClick={() => addQuestion("multiple-choice")}>Add Multiple Choice</button>
        <button style={{margin:"3px",borderRadius:"2px"}} onClick={() => addQuestion("long-answer")}>Add Long Answer</button>
      </div>
    </div>
  );
};

export default Subsection;
