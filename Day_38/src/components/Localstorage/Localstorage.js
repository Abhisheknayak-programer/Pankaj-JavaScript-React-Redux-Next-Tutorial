import React, { useState, useEffect } from "react";

const Localstorage = (props) => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    const userLocalStorageData = localStorage.getItem("isLoggedIn");
    if (userLocalStorageData === "LOGGED_IN") {
      setIsLoggedIn(true);
    }
  }, [props]);

  const LogoutHandler = () => {
    localStorage.clear();
    setIsLoggedIn(false);
  };

  // console.log(props);
  return (
    <div className="Conatiner">
      {isLoggedIn && <p>You are Logged In</p>}
      {!isLoggedIn && <p>You are Not Logged In</p>}
      {isLoggedIn && (
        <button className="btn btn__logout" onClick={LogoutHandler}>
          Logout
        </button>
      )}
    </div>
  );
};

export default Localstorage;
