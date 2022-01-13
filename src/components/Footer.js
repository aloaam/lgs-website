import React from "react";
import EmailIcon from "@mui/icons-material/Email";
import CopyrightIcon from "@mui/icons-material/Copyright";

export default function Footer() {
  return (
    <div className="footer">
      <div className="footer__links">
        <span className="footer__links--email">
          <EmailIcon />
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
