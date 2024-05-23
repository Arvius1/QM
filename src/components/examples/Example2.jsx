import { useState, useEffect, useRef } from "react"; 

function Example1() {
  const [inputValue, setInputValue] = useState("a");
  const count = useRef(null);

  const handleinputChange = (event) => {
    setInputValue(event.target.value);
  };

  useEffect(() => {
    alert('Use Effect');
    count.current = count.current + 1;
  }, []);

  return (
    <>
      <input
        type="text"
        value={inputValue}
        onChange={handleinputChange}
      />
      <h1>Render Count: {count.current}</h1>
    </>
  );
}

export default Example1