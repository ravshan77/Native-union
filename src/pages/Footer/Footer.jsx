import React from "react";
import "./Footer.css";
import Button from "../../components/Button/Button";
import { Link } from "react-router-dom";
import FacebookIcon from "@material-ui/icons/Facebook";
import TelegramIcon from "@material-ui/icons/Telegram";
import InstagramIcon from "@material-ui/icons/Instagram";
import TwitterIcon from "@material-ui/icons/Twitter";
import { useTranslation } from "react-i18next";

const Footer = () => {
  const { t, i18n } = useTranslation();

  return (
    <div className="footer">
      <div className="footer_container">
        <div className="footer_item_one">
          <div className="footer_items">
            <div className="item_blok">
              <Link to="/allProducts">
                <h3>{t("NAVIGATE")}</h3>
                <p>{t("The Native Union Story")}</p>
                <p>{t("Explore All Products")}</p>
                <p>{t("Reviews & Testimonials")}</p>
                <p>{t("JournalL")}</p>
                <p>{t("Sitemap")}</p>
              </Link>
            </div>
            <div className="item_blok">
              <Link to="/journal">
                <h3>{t("CONTACT")}</h3>
                <p>{t("Press")}</p>
                <p>{t("Private Label")}</p>
                <p>{t("Sales Enquiries")}</p>
                <p>{t("Customer Service")}</p>
                <p>{t("Careers")}</p>
              </Link>
            </div>
          </div>
          <div className="footer_items">
            <div className="item_blok">
              <h3>{t("HELP")}</h3>
              <p>{t("Shipping")}</p>
              <p>{t("Returns")}</p>
              <p>{t("Warranty")}</p>
              <p>{t("Product Registration")}</p>
              <p>{t("Product Documentation")}</p>
              <p>{t("Our Code of Conduct")}</p>
            </div>
            <div className="item_blok">
              <h3>{t("JOIN OUR COMMUNITY")}</h3>
              <p>
                {t(
                  "Subscribe to receive updates, access to exclusive deals, and more."
                )}
              </p>
              <input
                type="email"
                placeholder={t("Enter your email adress")}
                className="footer_input"
              />
              <Button
                buttonStyle="btn--black"
                buttonPosition="footer_btn"
                buttonSize="btn--medium"
              >
                {t("subScore")}
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
          {t("© 2021")}© 2021 NATIVE UNION – ALL RIGHTS RESERVED | TERMS OF USE
          | TERMS OF SALE| PRIVACY
        </div>
      </div>
    </div>
  );
};

export default Footer;
