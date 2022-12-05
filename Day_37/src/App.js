// PUBLIC === INDEX.JS === APP.JS ================ ALL FILES
import React, { useState } from "react";
import Localstorage from "./components/Localstorage/Localstorage";
import Form from "./components/Form/Form";

const App = () => {
  const [data, setData] = useState({});

  const GetDataHandler = (email, password) => {
    setData({ email: email, password: password });
  };

  return (
    <div>
      <Form send={GetDataHandler} />
      <Localstorage status={data} />
    </div>
  );
};

export default App;
