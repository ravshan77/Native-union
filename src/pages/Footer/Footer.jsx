import React from "react";
import "./Footer.css";
import Button from "../../components/Button/Button";
import { Link } from "react-router-dom";
import FacebookIcon from "@material-ui/icons/Facebook";
import TelegramIcon from "@material-ui/icons/Telegram";
import InstagramIcon from "@material-ui/icons/Instagram";
import TwitterIcon from "@material-ui/icons/Twitter";

const Footer = () => {
  return (
    <div>
      <div className="footer_container">
        <div className="footer_item_one">
          <div className="footer_items">
            <div className="item_blok">
              <h3>NAVIGATE</h3>
              <p>The Native Union Story</p>
              <p>Explore All Products</p>
              <p>Reviews & Testimonials</p>
              <p>Journal</p>
              <p>Sitemap</p>
            </div>
            <div className="item_blok">
              <h3>CONTACT</h3>
              <p>Press</p>
              <p>Private Label</p>
              <p>Sales Enquiries</p>
              <p>Customer Service</p>
              <p>Careers</p>
            </div>
          </div>
          <div className="footer_items">
            <div className="item_blok">
              <h3>HELP</h3>
              <p>Shipping</p>
              <p>Returns</p>
              <p>Warranty</p>
              <p>Product Registration</p>
              <p>Product Documentation</p>
              <p>Our Code of Conduct</p>
            </div>
            <div className="item_blok">
              <h3>JOIN OUR COMMUNITY</h3>
              <p>
                Subscribe to receive updates, access to exclusive deals, and
                more.
              </p>
              <input
                type="email"
                placeholder="Enter your email adress"
                className="footer_input"
              />
              <Button
                buttonStyle="btn--black"
                buttonPosition="footer_btn"
                buttonSize="btn--medium"
              >
                subScore
              </Button>
              <div className="footer_icon">
                <Link>
                  <FacebookIcon />
                </Link>
                <Link>
                  <TelegramIcon />
                </Link>
                <Link>
                  <InstagramIcon />
                </Link>
                <Link>
                  <TwitterIcon />
                </Link>
              </div>
            </div>
          </div>
        </div>
        <div className="footer_item_two">
          © 2021 NATIVE UNION – ALL RIGHTS RESERVED | TERMS OF USE | TERMS OF
          SALE| PRIVACY
        </div>
      </div>
    </div>
  );
};

export default Footer;
