import React, { useState, useEffect } from "react";
import NavBar from "./Common/NavBar";
import TableData from "./Common/TableData";
import Button from "react-bootstrap/Button";
import Popup from "./Common/Popup";
import Data from "../data.json";
import ClassData from "../class.json";
const DashBoard = () => {
  const Role = localStorage.getItem("role");
  const display =
    Role === "admin" ? "student" : Role === "teacher" ? "student" : "class";
  const [show, setShow] = useState(false);
  const [select, setSelect] = useState(display);
  const [state, setState] = useState(Data);
  const [id, setId] = useState("");

  useEffect(() => {
    if (select === "class") {
      if (Role === "student") {
        let data = [...ClassData];
        data.splice(1, 9);
        setState(data);
      } else {
        setState(ClassData);
      }
    } else setState(Data);
  }, [select]);

  return (
    <div className="app-main">
      <NavBar setSelect={setSelect} />
      <div className="my-3 mx-5 d-flex justify-content-end">
        {Role === "admin" && (
          <Button variant="outline-primary" onClick={() => setShow(true)}>
            ADD {select.toUpperCase()}
          </Button>
        )}
      </div>
      <TableData
        state={state}
        setState={setState}
        setId={setId}
        select={select}
      />
      <Popup
        show={show}
        setShow={setShow}
        setState={setState}
        state={state}
        id={id}
        setId={setId}
        select={select}
      />
    </div>
  );
};

export default DashBoard;
