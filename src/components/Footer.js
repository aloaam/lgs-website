import React from "react";
import Instagram from "@mui/icons-material/Instagram";
import Facebook from "@mui/icons-material/Facebook";
import Twitter from "@mui/icons-material/Twitter";
import Linkedin from "@mui/icons-material/LinkedIn";

export default function Footer() {
  return (
    <div className="footer">
      <div className="socialMedia">
        <Instagram />
        <Facebook />
        <Twitter />
        <Linkedin />
      </div>
      <p> &copy; 2021 lgs-usa.com</p>
    </div>
  );
}
