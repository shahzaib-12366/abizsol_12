import React from "react";
import "./Footer.css";
import logo from "../../assets/abisol.png";
import {
  footerLinks,
  footerCommunity,
  footerResources,
  footerSupport,
} from "../constant/Constants";
import { FaLinkedin, FaTwitter, FaFacebookF } from "react-icons/fa";

export default function Footer() {
  return (
    <div className="b_g_footer">
      <footer className="Footer">
        <div className="Footer_inner">
          <div className="footer_container">
            <div className="footer_logo">
              <div>
                <a href="/" className="header__logo logo_name_container">
                  <img
                    className="logo_image"
                    src={logo}
                    alt="Clexu"
                    width={160.51}
                    height={62.88}
                    margin-top={70}
                  />
                </a>
              </div>
              <div className="footer_logo_details">
                At aBizSol, we take pride in being at the forefront of digital
                innovation. Established in [Year of Establishment], our journey
                has been marked by a relentless pursuit of excellence.
              </div>
            </div>
            <div className="links_title_container">
              <div className="links_title">
                <b>Services</b>
              </div>
              {footerLinks.map((item) => (
                <a key={item.key} href={item.path} className="links_child">
                  {item.name}
                </a>
              ))}
            </div>
            <div className="m_l_120px links_title_container">
              <div className="links_title">
                <b>Quick links</b>
              </div>
              {footerCommunity.map((item) => (
                <a key={item.key} href={item.path} className="links_child">
                  {item.name}
                </a>
              ))}
            </div>
            <div className="m_l_120px links_title_container">
              <div className="links_title">
                <b>Company</b>
              </div>
              {footerResources.map((item) => (
                <a key={item.key} href={item.path} className="links_child">
                  {item.name}
                </a>
              ))}
            </div>
            <div className="m_l_120px links_title_container">
              <div className="links_title">
                <b>Products</b>
              </div>
              {footerSupport.map((item) => (
                <a key={item.key} href={item.path} className="links_child">
                  {item.name}
                </a>
              ))}
                 <div className="icon-Container">
                <a href="https://www.facebook.com/">
                    <FaFacebookF />
                </a>

                <a href="https://www.linkedin.com/">
                    <FaLinkedin />
                </a>
                <a href="https://twitter.com/">
                    <FaTwitter />
                </a>
            </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
