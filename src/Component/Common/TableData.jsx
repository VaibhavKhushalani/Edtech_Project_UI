import React from "react";
import Table from "react-bootstrap/Table";

const TableData = ({ state, setState, setId, select }) => {
  const Role = localStorage.getItem("role");
  const Remove = (index) => {
    let data = [...state];
    data.splice(index, 1);
    setState(data);
  };

  return (
    <div className="table-main">
      <Table striped bordered hover variant="dark">
        <thead>
          <tr>
            {select === "class" ? (
              <>
                <th>Sno</th>
                <th>Class</th>
              </>
            ) : (
              <>
                <th>Sno</th>
                <th>Name</th>
                <th>Gender</th>
                {select === "student" && (
                  <>
                    <th>Class</th>
                    <th>Physics</th>
                    <th>Maths</th>
                    <th>English</th>
                  </>
                )}
              </>
            )}
            {Role === "admin" && <th>Action</th>}
          </tr>
        </thead>
        <tbody>
          {state.map((ele, id) => {
            return (
              <tr key={id}>
                {select === "class" ? (
                  <>
                    <th>{id + 1}</th>
                    <th>{ele.class}</th>
                  </>
                ) : (
                  <>
                    <td>{id + 1}</td>
                    <td>{ele.name}</td>
                    <td>{ele.gender}</td>
                    {select === "student" && (
                      <>
                        <th>{ele.class}</th>
                        <td>{ele.physics}</td>
                        <td>{ele.math}</td>
                        <td>{ele.english}</td>
                      </>
                    )}
                  </>
                )}

                {Role === "admin" && (
                  <td className="d-flex justify-content-around">
                    <span className="table-btn" onClick={() => setId(ele.id)}>
                      Update
                    </span>
                    <span className="table-btn" onClick={() => Remove(id)}>
                      {" "}
                      Delete
                    </span>
                  </td>
                )}
              </tr>
            );
          })}
        </tbody>
      </Table>
      <br />
    </div>
  );
};

export default TableData;
