import React, { useState } from "react";
import Button from 'react-bootstrap/Button';
import { useNavigate } from "react-router-dom";

function Login({ setIsLoggedIn }) {
  const history = useNavigate();
  const [formData, setFormData] = useState({
    username: "",
    dob: "",
  });

  function handleChange(e) {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  }

  function handleSubmit(e) {
    e.preventDefault();
    // fetch("http://localhost:3001/.Login", {
    //   method: "POST",
    //   headers: {
    //     "Content-Type": "application/json",
    //   },
    //   body: JSON.stringify(formData),
    // })
    //   .then((r) => r.json())
    //   .then((user) => {
        setIsLoggedIn(true);

    history("/");
//   })
}

  return (
    <div id="login">
      <form widths="equal" onSubmit={handleSubmit}>
      
        <h3 id="logincolor"> Sign In</h3>
        <div className="mb-3">
          <input
              className="input"
              type="text"
              name="username"
              placeholder="Username"
              fluid label="username"
              value={formData.username}
              onChange={handleChange}
          />
        </div>
        <div className="mb-3">
          <input
              className="input"
              type="dob"
              name="dob"
              placeholder="Password"
              value={formData.dob}
              onChange={handleChange}
          />
        </div>
        <div>
          <Button id="newmovie" variant="secondary" className="ui button" type="submit">Login</Button>
        </div>
      </form>
    </div>
  );
}


export default Login;
