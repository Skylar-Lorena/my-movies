import React from "react";
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { NavLink, useNavigate } from "react-router-dom";

const NavBar = ({isLoggedIn, setIsLoggedIn}) => {
  const history = useNavigate();

  function handleLogout() {
    setIsLoggedIn(false);
    history("/.Login");
  }

  const renderLogout = isLoggedIn ? <Button id="newmovie" className="ui logout" variant="dark" type="submit"> Logout </Button> : null

  return (
    <div>
      <div className="navbar">
        <div className="link-container">
          <NavLink className="navlink home" to="/"> Home </NavLink>
          <NavLink className="navlink contacts" to="/.Contact"> Contact </NavLink>
        </div>
        <Form onSubmit={handleLogout}>
          {renderLogout}
        </Form>
      </div>
    </div>
  );
};

export default NavBar;