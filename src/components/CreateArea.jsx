import React, { useState } from "react";

function CreateArea(props) {
  const [inputText, setInputText] = useState({ title: "", content: "" });

  function handleChange(event) {
    const { name, value } = event.target;
    setInputText((preValue) => {
      return { ...preValue, [name]: value };
    });
  }
  return (
    <div>
      <form onSubmit={(e) => e.preventDefault()}>
        <input
          onChange={handleChange}
          name="title"
          placeholder="Title"
          value={inputText.title}
        />
        <textarea
          onChange={handleChange}
          name="content"
          placeholder="Take a note..."
          value={inputText.content}
          rows="3"
        />
        <button
          type="submit"
          onClick={() => {
            props.onAdd(inputText);
            setInputText({ title: "", content: "" });
          }}
        >
          Add
        </button>
      </form>
    </div>
  );
}

export default CreateArea;
