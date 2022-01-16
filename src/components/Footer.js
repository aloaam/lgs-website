import React from "react";
import { Link } from "react-router-dom";
import EmailIcon from "@mui/icons-material/Email";
import CopyrightIcon from "@mui/icons-material/Copyright";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";

export default function Footer() {
  return (
    <div className="footer">
      <div className="footer__links">
        <span className="footer__links--email">
          <Link to="get-a-quote">
            <EmailIcon />
          </Link>
        </span>
        <span className="footer__links--whatsapp">
          <a href="https://web.whatsapp.com" target="_blank">
            <WhatsAppIcon />
          </a>
        </span>
        <span>Privacy Policy</span>
        <span>Terms of Use</span>
      </div>
      <p>
        <span className="footer__copyright">
          <CopyrightIcon />
        </span>
        {new Date().getFullYear()} LGS Leslie Glass Suppliers, Corp.
      </p>
    </div>
  );
}
