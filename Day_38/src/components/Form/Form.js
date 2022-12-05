import React, { useRef } from "react";

const Form = (props) => {
  const emailUseRef = useRef();
  const passwordUseRef = useRef();

  const FormSubmitHandler = (e) => {
    e.preventDefault();
    localStorage.setItem("isLoggedIn", "LOGGED_IN");
    props.send(emailUseRef.current.value, passwordUseRef.current.value);
  };

  return (
    <div>
      <form className="form" onSubmit={FormSubmitHandler}>
        <div className="form__items">
          <label htmlFor="Email">Email</label>
          <input
            type="email"
            ref={emailUseRef}
            placeholder="Enter your email"
          />
        </div>

        <div className="form__items">
          <label htmlFor="Password">Password</label>
          <input
            type="password"
            ref={passwordUseRef}
            placeholder="Enter your password"
          />
        </div>

        <div className="form__items">
          <button className="btn form__btn">Login</button>
        </div>
      </form>
    </div>
  );
};

export default Form;
