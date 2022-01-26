import React from "react";
import { Navbar, Container, Nav, Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import { BsBoxArrowUpRight, BsFillPlayFill } from "react-icons/bs";

const Header = () => {
  return (
    <div className="main-banner">
      <div className="nav-bar py-3">
        <Navbar expand="lg">
          <Container>
            <Navbar.Brand as={Link} to="/">
              <span className="text-white fw-bold h4">travelFast.</span>
            </Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
              <Nav className="ms-auto">
                <Nav.Link as={Link} to="/" className="text-white px-3">
                  Home
                </Nav.Link>
                <Nav.Link as={Link} to="/places" className="text-white px-3">
                  Place
                </Nav.Link>
                <Nav.Link as={Link} to="/blogs" className="text-white px-3">
                  Explore Blogs
                </Nav.Link>
                <Nav.Link as={Link} to="/compare" className="text-white px-3">
                  Compare
                </Nav.Link>
                <Nav.Link as={Link} to="/about" className="text-white px-3">
                  About
                </Nav.Link>
                <Nav.Link as={Link} to="/account" className="text-black ps-4 icon-area back-glow rounded">
                      Sing Up <span className="singup-icon rounded ms-2 text-left"><BsBoxArrowUpRight /></span>
                </Nav.Link>
              </Nav>
            </Navbar.Collapse>
          </Container>
        </Navbar>
      </div>
      <div className="py-5 mt-4">
        <Container>
          <h1 className="text-white display-1 banner-fs fw-bolder">
            Discover the <br /> Touch of Nature
          </h1>
          <div className="my-5 pt-4 d-flex align-items-center">
            <button className="play-button back-dark text-white rounded-start">
              Play Intro
            </button>
            <button className="play-icon back-glow rounded-end">
              <span className="icon-size">
                <BsFillPlayFill />
              </span>
            </button>
          </div>
        </Container>
      </div>
      <div className="back-dark p-4 mb-5 header-paragraph shadow">
          <p className="text-white">If you visit Bangladesh and look to see. There is a brief window of time when then low, October Autumn-sun sets low over the city towards the Dhaka District.</p>
          <div className="">
          <p className="d-flex align-items-center color-primary h-line">READ MORE </p>
          </div>
      </div>
    </div>
  );
};

export default Header;
