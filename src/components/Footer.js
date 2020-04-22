import React from "react";
import { Link } from "gatsby";

import logo from "../img/logo.svg";
import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import NavigationData from "../configs/navigation.yml";

const Footer = class extends React.Component {
  render() {
    return (
      <footer className="footer has-background-black-bis has-text-centered">
        <img src={logo} alt="Kaldi" style={{ width: "14em", height: "10em" }} />
        <div className="container">
          <section className="columns is-multiline menu-list">
            {NavigationData.links
              .filter((data) => data.showInFooter)
              .map((data) => {
                if (data.useExternalLink) {
                  return (
                    <a
                      key={data.path}
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
                  <Link
                    key={data.path}
                    className="navbar-item column"
                    to={data.path}
                  >
                    {data.text}
                  </Link>
                );
              })}
            <div className="column">
              <div className="columns is-size-5">
                <a
                  className="column"
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
                  className="column"
                  title="LinkedIn"
                  href="https://www.linkedin.com/in/brian-mcilwain/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <span className="icon">
                    <FaLinkedin />
                  </span>
                </a>
              </div>
            </div>
          </section>
        </div>
      </footer>
    );
  }
};

export default Footer;
