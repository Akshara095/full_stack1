import React from 'react';
import '../FunctionalComponents/footer.css';
import { useState } from 'react';

const Footer = () => {
    var submit = useState();
    function sub(){
        console.log(submit("Form submitted successfully"))
    }

  return (
    <footer className="footer">
      <h1>This is a simple footer</h1>
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
          <button type="submit" onClick={()=>{submit()}}>Submit</button>
          <button type="reset">Reset</button>
        </div>
      </form>
    </footer>
  );
};

export default Footer;
