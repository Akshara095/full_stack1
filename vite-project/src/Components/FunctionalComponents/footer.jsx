import React from 'react';
import '../FunctionalComponents/footer.css';
import { useState } from 'react';

const Footer = () => {
    var [submit,setText]= useState("Form submitted successfully");
    function setText(){
        console.log("Form submitted successfully")
    }

  return (
    <footer className="footer">
      <div>
      <form >
        <h2>Feedback Form</h2>
        <div >
          <label>Name:</label>
          <input type="text" placeholder="Enter your name" required />
          <p></p>
        </div>
        <div>
          <label>Email:</label>
          <input type="email" placeholder="Enter your email" required />
          <p></p>
        </div>
        <div>
          <label>Feedback:</label>
          <textarea placeholder="Enter your feedback" required></textarea>
          <p></p>
        </div>
        <div className="form-buttons">
          <button type="submit"  onSubmit={setText}>Submit</button>
          <button type="reset">Reset</button>
        </div>
      </form>
      </div>
    </footer>
  );
};

export default Footer;
