import React, { useState } from "react";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import Container from "react-bootstrap/Container";
import logo from "../Assets/image/fullannlogo/logo.png";
import frflag from "../Assets/image/lang/france-flag.svg";
import usaflag from "../Assets/image/lang/united-states-of-america-flag-usa.svg";
import Button from "react-bootstrap/Button";
import { Link } from "react-router-dom";
import { CgGitFork } from "react-icons/cg";
import config from '../config.js';
import i18n from "i18next";
import { withTranslation } from 'react-i18next';
import {
  AiFillStar,
  AiOutlineHome,
  AiOutlineFundProjectionScreen,
  AiOutlineUser,
} from "react-icons/ai";

import { CgFileDocument } from "react-icons/cg";
import { BiCoffeeTogo } from "react-icons/bi";
import { MdOutgoingMail } from "react-icons/md";

function NavBar({ t }) {
  const [expand, updateExpanded] = useState(false);
  const [navColour, updateNavbar] = useState(false);

  function scrollHandler() {
    if (window.scrollY >= 20) {
      updateNavbar(true);
    } else {
      updateNavbar(false);
    }
  }

  function handleFrenchClick() {
    i18n.changeLanguage('fr-FR');
  };

  function handleEnglishClick() {
    i18n.changeLanguage('en-US');
  };
  window.addEventListener("scroll", scrollHandler);

  return (
    <Navbar
      expanded={expand}
      fixed="top"
      expand="md"
      className={navColour ? "sticky" : "navbar"}
    >
      <Container>
        <Navbar.Brand href="/" className="d-flex">
          <img src={logo} className="img-fluid logo" alt="brand" />
        </Navbar.Brand>
        <Navbar.Toggle
          aria-controls="responsive-navbar-nav"
          onClick={() => {
            updateExpanded(expand ? false : "expanded");
          }}
        >
          <span></span>
          <span></span>
          <span></span>
        </Navbar.Toggle>
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="ms-auto" defaultActiveKey="#home">
            <Nav.Item>
              <Nav.Link as={Link} to="/" onClick={() => updateExpanded(false)}>
                <AiOutlineHome style={{ marginBottom: "2px" }} /> {t('menu.home')}
              </Nav.Link>
            </Nav.Item>
            {config.about.enabled && (
              <Nav.Item>
                <Nav.Link
                  as={Link}
                  to="/about"
                  onClick={() => updateExpanded(false)}
                >
                  <AiOutlineUser style={{ marginBottom: "2px" }} /> {t('menu.about')}
                </Nav.Link>
              </Nav.Item>
            )}

            {config.projects.enabled && (
              <Nav.Item>
                <Nav.Link
                  as={Link}
                  to="/project"
                  onClick={() => updateExpanded(false)}
                >
                  <AiOutlineFundProjectionScreen
                    style={{ marginBottom: "2px" }}
                  />{" "}
                   {t('menu.projects')}
                </Nav.Link>
              </Nav.Item>
            )}
            {config.resume.enabled && (
              <Nav.Item>
                <Nav.Link
                  as={Link}
                  to="/resume"
                  onClick={() => updateExpanded(false)}
                >
                  <CgFileDocument style={{ marginBottom: "2px" }} />  {t('menu.cv')}
                </Nav.Link>
              </Nav.Item>
            )}

            {config.contact.enabled && (
              <Nav.Item>
                <Nav.Link
                  as={Link}
                  to='/contact'
                  onClick={() => updateExpanded(false)}
                >
                  <MdOutgoingMail style={{ marginBottom: "2px" }} />  {t('menu.contact')}
                </Nav.Link>
              </Nav.Item>)}
            {config.laguageSwitcher.enabled && (
              <Nav.Item>
                <div style={{display:"flex"}}>
                  <button className="flag-button" onClick={() => handleFrenchClick()}>
                    <img src={frflag} className="" alt="frlanguage" />
                  </button>
                  <button className="flag-button nav-link" onClick={() => handleEnglishClick()}>
                    <img src={usaflag} className="" alt="andlanguage" />
                  </button>
                </div>
              </Nav.Item>
            )}
             {config.buyMeACoffee.enabled && (
              <Nav.Item className="fork-btn">
                <Button
                  href={config.forkProjet.link}
                  target="_blank"
                  className="fork-btn-inner"
                >
                  <BiCoffeeTogo style={{ fontSize: "1.2em" }} />{" "}
                  {t('menu.coffee')}
                </Button>
              </Nav.Item>
            )}
            {config.forkProjet.enabled && (
              <Nav.Item className="fork-btn">
                <Button
                  href={config.forkProjet.link}
                  target="_blank"
                  className="fork-btn-inner"
                >
                  <CgGitFork style={{ fontSize: "1.2em" }} />{" "}
                  <AiFillStar style={{ fontSize: "1.1em" }} />
                </Button>
              </Nav.Item>
            )}

          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default withTranslation(['translation', 'common'])(NavBar);
