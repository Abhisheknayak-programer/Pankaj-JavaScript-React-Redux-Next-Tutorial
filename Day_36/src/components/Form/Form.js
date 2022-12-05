import React, { useState } from "react";
import "./Form.css";

const Form = () => {
  const [Name, SetName] = useState("");
  const [Mobile, SetMobile] = useState("");
  const [form, setForm] = useState(false);

  const NameChangeHandler = (e) => {
    SetName(e.target.value);
  };

  const NumberChangeHandler = (e) => {
    SetMobile(e.target.value);
  };

  const formSubmitHandler = (e) => {
    e.preventDefault();
    setForm(true);

    setTimeout(() => {
      SetMobile("");
      SetName("");
      setForm(false);
    }, 5000);
  };

  return (
    <div>
      {form && (
        <h1 className="heading">
          Hey {Name} : {Mobile}
        </h1>
      )}

      <form className="form" onSubmit={formSubmitHandler}>
        <div className="form__items">
          <label htmlFor="Name">Name</label>
          <input
            type="text"
            value={Name}
            placeholder="Enter your name"
            onChange={NameChangeHandler}
          />
        </div>

        <div className="form__items">
          <label htmlFor="Mobile">Mobile</label>
          <input
            type="text"
            value={Mobile}
            placeholder="Enter your number"
            onChange={NumberChangeHandler}
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

export default Form;
