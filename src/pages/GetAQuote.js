import React from "react";
import emailjs from "emailjs-com";
import EmailIcon from "@mui/icons-material/Email";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";

import getAQuotePic from "../assets/images/get_a_quote_pic.jpeg";

export default function GetAQuote() {
  function sendEmail(e) {
    e.preventDefault();
    emailjs
      .sendForm(
        "service_qhegpx5",
        "template_425rwji",
        e.target,
        "user_FtQBAN4vdc9YOCMxGB78Y"
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
    e.target.reset();
    alert(
      "Thank you for contacting us.\n\nWe will get back to you as soon as possible!"
    );
  }
  return (
    <div className="get-a-quote">
      <div className="quote-middle-part">
        <div
          className="get-a-quote__left-side"
          style={{ backgroundImage: `url(${getAQuotePic})` }}
        ></div>
        <div className="get-a-quote__right-side">
          <h1 style={{ color: "#21569c" }}>
            Tell us more about your project or idea.
          </h1>
          <form id="contact-form" onSubmit={sendEmail}>
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
            <input name="company" placeholder="Company" type="text" />
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
              name="message"
              placeholder="Type a message here... *"
              required
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
