import React from "react";
import "./Contact.css";
import { useAuth0 } from "@auth0/auth0-react";

const Contact = () => {
  const { isAuthenticated, user } = useAuth0();
  if (!isAuthenticated) {
    return <div className="contact_error">Please log in to access the contact form.</div>;
  }

  return (
    <>
      <div className="contact_info">
        <div className="container-fluid"></div>
        <div className="contact_form">
          <form action="https://formspree.io/f/xoqoannp" method="POST">
            <div className="form-group">
              <label htmlFor="name">Name:</label>
              <input
                type="text"
                className="form-control"
                name="Username"
                id="name"
                placeholder="Enter Your Name:"
                required
                value={isAuthenticated ? user.name : ""}
                readOnly={!isAuthenticated}
              />
            </div>
            <div className="form-group">
              <label htmlFor="email">Email:</label>
              <input
                type="email"
                className="form-control"
                name="Email"
                id="email"
                placeholder="Enter Your Email:"
                required
                value={isAuthenticated ? user.email : ""}
                readOnly={!isAuthenticated}
              />
            </div>
            <div className="form-group">
              <label htmlFor="message">Message:</label>
              <textarea
                className="form-control"
                id="message"
                name="Message"
                rows="5"
                placeholder="Enter you Message:"
                required
              ></textarea>
            </div>
            <button type="submit" className="btn btn-primary">
              Submit
            </button>
          </form>
        </div>
      </div>
    </>
  );
};

export default Contact;
