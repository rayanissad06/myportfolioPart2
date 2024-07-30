import React from "react";

const Contactpage = () => {
  return (
    <section id="Contact" className="contact--section">
      <div>
        <h2>Contactez-moi</h2>
        <p className="text-lg">
         
        </p>
      </div>
      <form className="contact--form--container">
        <div className="container">
          <label htmlFor="first-name" className="contact--label">
            <span className="text-md">Prénom</span>
            <input
              type="text"
              className="contact--input text-md"
              name="first-name"
              id="first-name"
              required
            />
          </label>
          
          <label htmlFor="email" className="contact--label">
            <span className="text-md">Email</span>
            <input
              type="email"
              className="contact--input text-md"
              name="email"
              id="email"
              required
            />
          </label>
          
        </div>

        <label htmlFor="message" className="contact--label">
          <span className="text-md">Message</span>
          <textarea
            className="contact--input text-md"
            id="message"
            rows="8"
            placeholder="Saisissez votre message..."
          />
        </label>

        <div>
          <button className="btn btn-primary contact--form--btn">envoyer</button>
        </div>
      </form>
      <footer className="footer">
        <div className="footer--links">
          <a href="" target="_blank" rel="noopener noreferrer">GitHub</a>
          <a href="" target="_blank" rel="noopener noreferrer">LinkedIn</a>
          
        </div>
        <p className="footer--text">2024</p>
      </footer>
    </section>
  );
};

export default Contactpage;
