import React, { useState, useRef, useEffect } from 'react';

const AutoResizeInput = () => {
  const [text, setText] = useState('');
  const textAreaRef = useRef(null);

  const handleTextChange = (event) => {
    setText(event.target.value);
  };

  useEffect(() => {
    // Adjust the height of the textarea to fit the content
    if (textAreaRef.current) {
      textAreaRef.current.style.height = 'auto';
      textAreaRef.current.style.height = textAreaRef.current.scrollHeight + 'px';
    }
  }, [text]);

  return (
    <input ref={textAreaRef} value={text}
      onChange={handleTextChange}
      style={{
        width: '100%',
        boxSizing: 'border-box',
        overflow: 'hidden',
        resize: 'none', // prevent manual resizing
      }}
      rows={1} // initial rows to set the minimum height
    />
  );
};

export default AutoResizeInput;