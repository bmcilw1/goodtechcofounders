import React, { useCallback } from "react";
import { Link } from "gatsby";
import { FaLinkedin, FaSun, FaMoon } from "react-icons/fa";
import logo from "../img/logo.svg";
import NavigationData from "../configs/navigation.yml";
import { useTheme } from "../components/Theme";

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
        className="navbar is-transparent"
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
            <div className="navbar-end has-text-centered is-size-5">
              <DarkThemeToggleButton />
              <a
                className="navbar-item"
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
        </div>
      </nav>
    );
  }
};

export default Navbar;

const DarkThemeToggleButton = () => {
  const [theme, setTheme] = useTheme();
  const changeTheme = useCallback(
    () => setTheme(theme === "dark" ? "light" : "dark"),
    [theme, setTheme]
  );

  return (
    <div
      className="navbar-item"
      role="button"
      tabIndex={0}
      onClick={changeTheme}
      onKeyPress={changeTheme}
      style={{ cursor: "pointer" }}
    >
      <span className="icon">{theme === "dark" ? <FaSun /> : <FaMoon />}</span>
    </div>
  );
};
