import React from "react";

// The About component accepts 'image' and 'about' as destructured props.
// A default value for 'image' is provided directly in the function signature,
// so if no 'image' prop is passed from the parent, it will use the placeholder.
function About({ image = "https://via.placeholder.com/215", about }) {
  // Ensure 'about' is a string before rendering.
  // If 'about' is an object or not a string, it will be converted to an empty string.
  // This prevents the "Objects are not valid as a React child" error.
  const aboutText = typeof about === 'string' ? about : '';

  return (
    <aside>
      {/*
        The <img> src attribute uses the 'image' prop.
        The alt attribute is set to "blog logo" for accessibility.
      */}
      <img src={image} alt="blog logo"></img>
      {/*
        The <p> element displays the 'aboutText' variable, ensuring it's a string.
      */}
      <p>{aboutText}</p>
    </aside>
  );
}

export default About;