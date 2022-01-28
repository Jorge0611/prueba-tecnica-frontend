import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import reportWebVitals from "./reportWebVitals";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Navbar from "./components/Navbar";

//  Elements
import App from "./App";
import Home from "./routes/Home";
import Departments from "./routes/Mantenimientos/Departments/Index";
import NewDepartments from "./routes/Mantenimientos/Departments/New";
import EditDepartments from "./routes/Mantenimientos/Departments/Edit";
import Employees from "./routes/Mantenimientos/Employees/Index";
import NewEmployees from "./routes/Mantenimientos/Employees/New";
import EditEmployees from "./routes/Mantenimientos/Employees/Edit";
import Studies from "./routes/Mantenimientos/Studies/Index";
import NewStudies from "./routes/Mantenimientos/Studies/New";
import EditStudies from "./routes/Mantenimientos/Studies/Edit";

ReactDOM.render(
  <Navbar>
    <BrowserRouter>
      <Routes>
        <Route index element={<Home />} />
        <Route path="departments">
          <Route index element={<Departments />} />
          <Route path="new" element={<NewDepartments />} />
          <Route path="edit/:id" element={<EditDepartments />} />
        </Route>
        <Route path="employees">
          <Route index element={<Employees />} />
          <Route path="new" element={<NewEmployees />} />
          <Route path="edit/:id" element={<EditEmployees />} />
        </Route>
        <Route path="studies">
          <Route index element={<Studies />} />
          <Route path="new" element={<NewStudies />} />
          <Route path="edit/:id" element={<EditStudies />} />
        </Route>
      </Routes>
    </BrowserRouter>
  </Navbar>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
