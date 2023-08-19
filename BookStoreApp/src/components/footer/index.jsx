import React from "react";
import { Link } from "react-router-dom";
import { footerStyle } from "./style";
import siteLogo from "../../assets/images/site-logo.svg";
import siteLogo1 from "../../assets/images/bookflix_1.png";

const Footer = () => {
  const classes = footerStyle();
  return (
    <div className={classes.footerWrapper}>
      <footer className="site-footer" id="footer">
        <div className="bottom-footer">
          <div className="container">
            <div className="text-center">
              <div className="footer-logo">
                <Link to="/" title="logo">
                  <img src={siteLogo1} alt="sitelogo" />
                </Link>
              </div>
              <p className="copyright-text">
                © 2023 Bookflix.com. All rights reserved.
              </p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
