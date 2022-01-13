import React from "react";
import getAQuotePic from "../assets/images/get_a_quote_pic.jpeg";

export default function GetAQuote() {
  return (
    <div className="getAQuote">
      <div className="getAQuote__right-side">
        <h1>Request a Quote or reach us at (956) 340 6882</h1>
        <form id="contact-form" method="POST">
          <input name="first-name" placeholder="First Name..." type="text" />
          <input name="last-name" placeholder="Last Name..." type="text" />
          <input name="company" placeholder="Company..." type="text" />
          <input
            name="email"
            placeholder="yourcompany@domain.com"
            type="email"
            required
          />
          <input name="phone-number" placeholder="Phone Number..." type="tel" />
          <input name="city" placeholder="City..." type="text" />
          <input name="state" placeholder="State..." type="text" />
          <input name="subject" placeholder="Subject..." type="text" required />
          <textarea
            rows="6"
            name="Message"
            placeholder="Type a message here..."
          />
          <button type="submit">Request Quote</button>
        </form>
      </div>
    </div>
  );
}
