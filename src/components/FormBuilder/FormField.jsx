import React from 'react';

const FormField = ({ field, updateField }) => {
  const handleChange = (e) => {
    const updatedField = { ...field, [e.target.name]: e.target.value };
    updateField(updatedField);
  };

  return (
    <div style={{ margin: '5px 0' }}>
      <input
        type="text"
        name="label"
        value={field.label}
        onChange={handleChange}
        placeholder="Field Label"
      />
      <input
        type="text"
        name="value"
        value={field.value}
        onChange={handleChange}
        placeholder="Field Value"
      />
    </div>
  );
};

export default FormField;