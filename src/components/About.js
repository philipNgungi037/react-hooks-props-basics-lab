import React from "react";

function About({props}) {
  return (
    <div id="about">
      <h2>About Me</h2>
      <p>{props.bio}</p>
      <img src="https://i.imgur.com/mV8PQxj.gif" alt="I made this" />

      <h1>Links</h1>
      <a href="f">
      <p>{props.links.github}</p>
      <p>{props.links.linkedin}</p>
      </a>
      
      {/* add your <Links /> component here */}
    </div>
  );
}

export default About;
