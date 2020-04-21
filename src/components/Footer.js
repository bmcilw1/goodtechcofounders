import React from "react";
import { Link } from "gatsby";

import logo from "../img/logo.svg";
import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import NavigationData from "../configs/navigation.yml";

const Footer = class extends React.Component {
  render() {
    return (
      <footer className="footer has-background-black has-text-white-ter has-text-centered">
        <img src={logo} alt="Kaldi" style={{ width: "14em", height: "10em" }} />
        <div className="container">
          <section className="columns menu-list">
            {NavigationData.links
              .filter((data) => data.showInFooter)
              .map((data) => {
                if (data.useExternalLink) {
                  return (
                    <a
                      className="navbar-item column"
                      href={data.path}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      {data.text}
                    </a>
                  );
                }

                return (
                  <Link className="navbar-item column" to={data.path}>
                    {data.text}
                  </Link>
                );
              })}
            <a
              className="column is-narrow"
              title="Github"
              href="https://github.com/bmcilw1/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <span className="icon">
                <FaGithub />
              </span>
            </a>
            <a
              className="column is-narrow"
              title="LinkedIn"
              href="https://www.linkedin.com/in/brian-mcilwain/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <span className="icon">
                <FaLinkedin />
              </span>
            </a>
          </section>
        </div>
      </footer>
    );
  }
};

export default Footer;
