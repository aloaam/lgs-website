import React from "react";
import EmailIcon from "@mui/icons-material/Email";
import CopyrightIcon from "@mui/icons-material/Copyright";

export default function Footer() {
  return (
    <div className="footer">
      <div className="socialMedia">
        <EmailIcon />
      </div>
      <p>
        <CopyrightIcon />
        {new Date().getFullYear()} LGS by Leslie Glass Suppliers, Corp. All
        rights reserved
      </p>
    </div>
  );
}
