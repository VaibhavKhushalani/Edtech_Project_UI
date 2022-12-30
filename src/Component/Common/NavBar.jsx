import React from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
const NavBar = ({ setSelect }) => {
  const Role = localStorage.getItem("role");
  return (
    <div>
      <Navbar bg="dark" variant="dark">
        <Container>
          <Navbar.Brand href="#home">EdTech Panel</Navbar.Brand>
          <Nav className="me-auto">
            {Role === "admin" || Role === "student" ? (
              <Nav.Link href="#class" onClick={() => setSelect("class")}>
                Our Classes
              </Nav.Link>
            ) : (
              ""
            )}
            {Role === "admin" || Role === "teacher" ? (
              <Nav.Link href="#student" onClick={() => setSelect("student")}>
                All Students
              </Nav.Link>
            ) : (
              ""
            )}
            {Role === "admin" && (
              <Nav.Link href="#teacher" onClick={() => setSelect("teacher")}>
                All Teachers
              </Nav.Link>
            )}
          </Nav>
          <Nav className="mr-auto">
            <Nav.Link href="#home">{Role.toUpperCase()}</Nav.Link>
            <Nav.Link href="/">Logout</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
    </div>
  );
};

export default NavBar;
