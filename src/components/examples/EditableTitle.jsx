import React, { useState, useRef, useEffect } from 'react';

const EditableTitle = () => {
  const [title, setTitle] = useState('Form Title');
  const titleRef = useRef(null);

  const handleTitleChange = (event) => {
    setTitle(event.target.innerText);
  };

  const setCursorToEnd = () => {
    const el = titleRef.current;
    if (el && document.createRange && window.getSelection) {
      const range = document.createRange();
      const sel = window.getSelection();
      range.selectNodeContents(el);
      range.collapse(false); // Collapse the range to the end point
      sel.removeAllRanges();
      sel.addRange(range);
    }
  };

  useEffect(() => {
    if (titleRef.current) {
      setCursorToEnd();
    }
  }, []);

  return (
    <div
      ref={titleRef}
      contentEditable
      suppressContentEditableWarning
      onInput={handleTitleChange}
      onFocus={setCursorToEnd}
      style={{
        border: '1px solid #ccc',
        padding: '10px',
        fontSize: '24px',
        fontWeight: 'bold',
        cursor: 'text',
        minHeight: '40px',
        marginBottom: '20px'
      }}
    >
      {title}
    </div>
  );
};

export default EditableTitle;