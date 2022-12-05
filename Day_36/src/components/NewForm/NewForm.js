import React, { useState, useRef } from "react";
import "./NewForm.css";

const NewForm = () => {
  const [form, setForm] = useState(false);
  const nameInputRef = useRef();
  const mobileInputRef = useRef();

  const formSubmitHandler = (e) => {
    e.preventDefault();
    setForm(true);
    console.log(nameInputRef.current.value);
    console.log(mobileInputRef.current.value);
  };

  return (
    <div>
      {form && (
        <h1 className="heading">
          Hey {nameInputRef.current.value} : {mobileInputRef.current.value}
        </h1>
      )}

      <form className="form" onSubmit={formSubmitHandler}>
        <div className="form__items">
          <label htmlFor="Name">Name</label>
          <input type="text" ref={nameInputRef} placeholder="Enter your name" />
        </div>

        <div className="form__items">
          <label htmlFor="Mobile">Mobile</label>
          <input
            type="text"
            ref={mobileInputRef}
            placeholder="Enter your number"
          />
        </div>

        <div className="form__items">
          <button type="submit" className="btn form__btn">
            Submit
          </button>
        </div>
      </form>
    </div>
  );
};

export default NewForm;
