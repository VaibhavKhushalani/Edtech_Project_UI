import React, { useState, useEffect } from "react";
import { Form, Col, Row, Modal, Button } from "react-bootstrap";

const Popup = ({ show, setShow, setState, state, id, setId, select }) => {
  const [input, setInput] = useState({
    name: "",
    class: "",
    gender: "",
    physics: "",
    math: "",
    english: "",
    id: state.length + 1,
  });
  const handleClose = () => setShow(false);
  const handleInput = (e) => {
    const { name } = e.target;
    setInput({ ...input, [name]: e.target.value });
  };
  const updateData = (e) => {
    e.preventDefault();
    if (id !== "") {
      console.log(id);
      const fields = state.filter((x) => x.id !== id);
      fields.push(input);
      setState(fields);
    } else {
      setState([...state, input]);
    }

    setInput({
      name: "",
      class: "",
      gender: "",
      physics: "",
      math: "",
      english: "",
      id: state.length + 1,
    });
    setId("");
    handleClose();
  };

  console.log(input);
  useEffect(() => {
    if (id) {
      setShow(true);
      const fields = state.find((x) => x.id === id);
      setInput(fields);
    }
  }, [id]);

  return (
    <Modal size="lg" centered show={show} onHide={handleClose}>
      <Modal.Header closeButton>
        <Modal.Title>Add Student</Modal.Title>
      </Modal.Header>
      <Form onSubmit={updateData}>
        <Modal.Body>
          {select === "class" ? (
            <Row className="mb-3">
              <Form.Group as={Col} controlId="formGridState">
                <Form.Label>Class</Form.Label>
                <Form.Control
                  value={input.class}
                  onChange={handleInput}
                  name="class"
                  type="text"
                ></Form.Control>
              </Form.Group>
            </Row>
          ) : (
            <Row className="mb-3">
              <Form.Group as={Col} controlId="formGridCity">
                <Form.Label>Name</Form.Label>
                <Form.Control
                  type="text"
                  value={input.name}
                  onChange={handleInput}
                  name="name"
                  required
                  placeholder="Enter Name"
                />
              </Form.Group>
              {select === "student" && (
                <Form.Group as={Col} controlId="formGridState">
                  <Form.Label>Class</Form.Label>
                  <Form.Select
                    value={input.class}
                    onChange={handleInput}
                    name="class"
                  >
                    <option>Choose...</option>
                    <option>X</option>
                    <option>XI</option>
                    <option>XII</option>
                  </Form.Select>
                </Form.Group>
              )}
              <Form.Group as={Col} controlId="formGridState">
                <Form.Label>Gender</Form.Label>
                <Form.Select
                  value={input.gender}
                  onChange={handleInput}
                  name="gender"
                >
                  <option>Choose...</option>
                  <option>Male</option>
                  <option>Female</option>
                </Form.Select>
              </Form.Group>
            </Row>
          )}
          {select === "student" && (
            <Row className="mb-3">
              <Form.Group as={Col} controlId="formGridCity">
                <Form.Label>Physics</Form.Label>
                <Form.Control
                  type="number"
                  required
                  placeholder="Enter Marks"
                  value={input.physics}
                  onChange={handleInput}
                  name="physics"
                />
              </Form.Group>

              <Form.Group as={Col} controlId="formGridCity">
                <Form.Label>Math</Form.Label>
                <Form.Control
                  type="number"
                  required
                  placeholder="Enter Marks"
                  value={input.math}
                  onChange={handleInput}
                  name="math"
                />
              </Form.Group>

              <Form.Group as={Col} controlId="formGridCity">
                <Form.Label>English</Form.Label>
                <Form.Control
                  type="number"
                  value={input.english}
                  onChange={handleInput}
                  name="english"
                  required
                  placeholder="Enter Marks"
                />
              </Form.Group>
            </Row>
          )}
        </Modal.Body>
        <Modal.Footer className="center">
          <Button variant="outline-primary" type="submit">
            Update Data
          </Button>
          <Button variant="outline-secondary" onClick={handleClose}>
            Cancel
          </Button>
        </Modal.Footer>
      </Form>
    </Modal>
  );
};

export default Popup;
