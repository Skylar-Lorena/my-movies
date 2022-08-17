import React from "react";
import NavBar from "./NavBar";

const Contact = () => {

  return (
    <>
      <NavBar />
      <div id="contacts">
        <div id="space" />
        <h1>// Contact</h1>
        <div id="space" />
          <h2>Thomas Cook</h2>
            <div><a href="mailto: tlncook85@gmail.com">tlncook85@gmail.com</a></div>
            <div><a href="https://github.com/TLNCook">github</a></div>
            <div><a href="https://www.linkedin.com/in/thomas-cook-118414239/">linkedin</a></div>
          <h2>Ikmann Bhullar</h2>
            <div><a href="mailto: ikmann12@gmail.com">ikmann12@gmail.com</a></div>
            <div><a href="https://github.com/Catchthembodies">github</a></div>
            <div><a href="https://www.linkedin.com/in/ikmannbhullar/">linkedin</a></div>
          <h2>Erik Quintana </h2>
            <div><a href="mailto: erik.quintana@icloud.com">erik.quintana@icloud.com</a></div>
            <div><a href="https://github.com/Equint11">github</a></div>
            <div><a href="https://www.linkedin.com/in/erik-quintan-caro/">linkedin</a></div>
      </div>
</>
  );
};

export default Contact;