import React from "react";
import PizzaLeft from "../assets/images/pizzaLeft.jpg";

export default function Contact() {
  return (
    <div className="contact">
      <div
        className="leftSide"
        style={{ backgroundImage: `url(${PizzaLeft})` }}
      ></div>
      <div className="rightSide">
        <h1>Contact Us</h1>
        <form id="contact-form" method="POST">
          <label htmlFor="name"></label>
          <input name="name" placeholder="Enter full name..." type="text" />
          <label htmlFor="Email"></label>
          <input name="email" placeholder="name@example.com" type="email" />
          <label htmlFor="message">Message</label>
          <textarea
            rows="6"
            placeholder="What do you want to say, : )"
            name="message"
            required
          ></textarea>
          <button type="submit">Send Message</button>
        </form>
      </div>
    </div>
  );
}
