import React from "react";
import "./contact.scss";


const Contact = () => {
 
  return (
   
    <>
      <h1 className="contact-heding">Contact Us</h1>
      <div className="contact-div">
        <label className="name-div">Name*:</label>
        <input className="input1" type="text" />

        <label className="mobile-div">Mobile No*:</label>
        <input className="input2" type="number" />

        <hr className="line"></hr>

        <label className="name-div">Email*:</label>
        <input className="input3" type="email" />

        <label className="mobile-div">Topic* :</label>
        <input className="input4" type="text" />

        <hr className="line"></hr>
        <div>
          <label className="describ">Description*:</label>
        </div>
        <textarea className="text-area"></textarea>
        <button className="buton">Submit</button>
      </div>
    </>
  );
};

export default Contact;