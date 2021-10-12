// Core
import React from "react";
import ReactDOM from "react-dom";
// Components
import App from "./App";

// Instruments
import "./theme/index.css";

// import { FormFormik } from "./examples/formik/example1";
// import { WithMaterialUI } from "./examples/formik/example2";
// import { WithMaterialFormik } from "./examples/formik/example3";
import { Registration } from "./page/Registration/Registration";
import { ToDoList } from "./examples/todo";

import { LoginForm } from "./examples/form/example2";
import { WithMaterialFormik } from "./examples/formik/example3";
import { ExampleUseEffect } from "./examples/hooks/useEffect/5";

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById("root")
);
