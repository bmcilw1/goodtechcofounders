import React from "react";
import { Link } from "gatsby";
import { FaLinkedin } from "react-icons/fa";
import logo from "../img/logo.svg";
import NavigationData from "../configs/navigation.yml";

const Navbar = class extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      active: false,
      navBarActiveClass: "",
    };
  }

  toggleHamburger = () => {
    // toggle the active boolean in the state
    this.setState(
      {
        active: !this.state.active,
      },
      // after state has been updated,
      () => {
        // set the class in state for the navbar accordingly
        this.state.active
          ? this.setState({
              navBarActiveClass: "is-active",
            })
          : this.setState({
              navBarActiveClass: "",
            });
      }
    );
  };

  render() {
    return (
      <nav
        className="navbar is-fixed-top is-dark"
        role="navigation"
        aria-label="main-navigation"
      >
        <div className="container">
          <div className="navbar-brand">
            <Link to="/" className="navbar-item" title="Logo">
              <img src={logo} alt="Kaldi" style={{ width: "88px" }} />
            </Link>
            {/* Hamburger menu */}
            <div
              className={`navbar-burger burger ${this.state.navBarActiveClass}`}
              data-target="navMenu"
              role="button"
              tabIndex={0}
              onClick={() => this.toggleHamburger()}
              onKeyPress={() => this.toggleHamburger()}
            >
              <span />
              <span />
              <span />
            </div>
          </div>
          <div
            id="navMenu"
            className={`navbar-menu ${this.state.navBarActiveClass}`}
          >
            <div className="navbar-start has-text-centered">
              {NavigationData.links
                .filter((data) => data.showInHeader)
                .map((data) => {
                  if (data.useExternalLink) {
                    return (
                      <a
                        key={data.path}
                        className="navbar-item"
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
                      className="navbar-item"
                      to={data.path}
                    >
                      {data.text}
                    </Link>
                  );
                })}
            </div>
            <div className="navbar-end has-text-centered">
              <a
                className="navbar-item is-size-5"
                title="LinkedIn"
                href="https://www.linkedin.com/company/cofounderscompass/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <span className="icon">
                  <FaLinkedin />
                </span>
              </a>
            </div>
          </div>
        </div>
      </nav>
    );
  }
};

export default Navbar;
