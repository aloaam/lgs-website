import React from "react";
import EmailIcon from "@mui/icons-material/Email";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";

import getAQuotePic from "../assets/images/get_a_quote_pic.jpeg";

export default function GetAQuote() {
  return (
    <div className="get-a-quote">
      <div className="quote-middle-part">
        <div
          className="get-a-quote__left-side"
          style={{ backgroundImage: `url(${getAQuotePic})` }}
        ></div>
        <div className="get-a-quote__right-side">
          <h1>Tell us more about your project or idea.</h1>
          <form id="contact-form" method="POST">
            <input
              name="first-name"
              placeholder="First Name *"
              type="text"
              required
            />
            <input
              name="last-name"
              placeholder="Last Name *"
              type="text"
              required
            />
            <input
              name="company"
              placeholder="Company *"
              type="text"
              required
            />
            <input name="e-mail" placeholder="E-mail *" type="email" required />
            <input name="phone-number" placeholder="Phone Number" type="tel" />
            <input name="state" placeholder="State" type="text" />
            <input name="country" placeholder="Country" type="text" />
            <input
              name="subject"
              placeholder="Subject *"
              type="text"
              required
            />
            <textarea
              rows="6"
              name="Message"
              placeholder="Type a message here..."
            />
            <p className="small-letters">* Mandatory fields</p>
            <button type="submit">Get a Quote</button>
          </form>

          <div className="get-a-quote__right-side--contact-data">
            <div className="get-a-quote__right-side--email">
              <div className="get-a-quote__right-side--email-logo">
                <EmailIcon />
              </div>
              <span className="get-a-quote__right-side--email-text">
                contact@lgs-usa.com
              </span>
            </div>
            <div className="get-a-quote__right-side--whatsapp">
              <div className="get-a-quote__right-side--whatsapp-logo">
                <a href="https://wa.me/message/W3BMJ5TLIXAGH1" target="_blank">
                  <WhatsAppIcon />
                </a>
              </div>
              <div className="get-a-quote__right-side--whatsapp-text">
                <span>+1 (956) 340 6882 </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
