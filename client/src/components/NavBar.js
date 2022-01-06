import React from "react";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { LinkContainer } from "react-router-bootstrap";
import { useHistory } from "react-router-dom";

function NavBar({ user, setUser }) {
  let history = useHistory();
  function handleLogoutClick() {
    fetch("/logout", { method: "DELETE" }).then((r) => {
      if (r.ok) {
        setUser(null)
        history.push("/");
      }
    });
  }

  return (
    <div>
      <Navbar collapseOnSelect bg="light" expand="md" className="mb-3">
        <LinkContainer to="/">
          <Navbar.Brand className="font-weight-bold text-muted">
          🌱FitnessGG
          </Navbar.Brand>
        </LinkContainer>

        <Navbar.Toggle />

        <Navbar.Collapse className="justify-content-end">
          <Nav activeKey={window.location.pathname}>
          {user ? (
            <>
              <LinkContainer to="/nutrition">
                <Nav.Link>🍎Nutrition</Nav.Link>
              </LinkContainer>
              <LinkContainer to="/workout">
                <Nav.Link>💪Workout</Nav.Link>
              </LinkContainer>
              <LinkContainer to="/profile">
                <Nav.Link>❤️Profile</Nav.Link>
              </LinkContainer>
              <Nav.Link onClick={handleLogoutClick}>❌Logout</Nav.Link>
            </>
          ) : (
          <>
            <LinkContainer to="/signup">
                <Nav.Link>Signup</Nav.Link>
            </LinkContainer>
            <LinkContainer to="/login">
                <Nav.Link>Login</Nav.Link>
            </LinkContainer>
          </>
          )}
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </div>

  );
}

export default NavBar;