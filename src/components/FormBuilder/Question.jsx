// Question.jsx

import React, { useState } from "react";

const ShortAnswerQuestion = ({ question, updateQuestion }) => {
  const [answer, setAnswer] = useState(question.answer || "");

  const handleAnswerChange = (event) => {
    const newAnswer = event.target.value;
    setAnswer(newAnswer);
    updateQuestion({ ...question, answer: newAnswer });
  };

  return (
    <div>
      <label>{question.title}</label>
      <input type="text" value={answer} onChange={handleAnswerChange} />
    </div>
  );
};

const CheckboxQuestion = ({ question, updateQuestion }) => {
  const [selectedOptions, setSelectedOptions] = useState(question.answer || []);

  const handleOptionChange = (option) => {
    const updatedOptions = selectedOptions.includes(option)
      ? selectedOptions.filter((o) => o !== option)
      : [...selectedOptions, option];
    setSelectedOptions(updatedOptions);
    updateQuestion({ ...question, answer: updatedOptions });
  };

  return (
    <div>
      <label>{question.title}</label>
      {question.options.map((option) => (
        <div key={option}>
          <input
            type="checkbox"
            checked={selectedOptions.includes(option)}
            onChange={() => handleOptionChange(option)}
          />
          <label>{option}</label>
        </div>
      ))}
    </div>
  );
};

const MultipleChoiceQuestion = ({ question, updateQuestion }) => {
  const [selectedOption, setSelectedOption] = useState(question.answer || "");

  const handleOptionChange = (event) => {
    const newOption = event.target.value;
    setSelectedOption(newOption);
    updateQuestion({ ...question, answer: newOption });
  };

  return (
    <div>
      <label>{question.title}</label>
      <select value={selectedOption} onChange={handleOptionChange}>
        {question.options.map((option) => (
          <option key={option} value={option}>
            {option}
          </option>
        ))}
      </select>
    </div>
  );
};

const LongAnswerQuestion = ({ question, updateQuestion }) => {
  const [answer, setAnswer] = useState(question.answer || "");

  const handleAnswerChange = (event) => {
    const newAnswer = event.target.value;
    setAnswer(newAnswer);
    updateQuestion({ ...question, answer: newAnswer });
  };

  return (
    <div>
      <label>{question.title}</label>
      <textarea value={answer} onChange={handleAnswerChange} />
    </div>
  );
};

export { ShortAnswerQuestion, CheckboxQuestion, MultipleChoiceQuestion, LongAnswerQuestion };

