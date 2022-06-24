import React, { useState } from "react";
import "./Header.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faXmark } from "@fortawesome/free-solid-svg-icons";
import logo from "../../Assets-furniture/logo.webp";
function Header() {
  const [open, setOpen] = useState(false);

  return (
    <div className="header">
      <div className="navbar-mobile">
        <a href="#" className="central-header">
          <img src={logo} alt="" className="logo" />
        </a>
        <FontAwesomeIcon
          onClick={() => {
            setOpen((prev) => !prev);
          }}
          icon={open ? faXmark : faBars}
        />
        <div className={`abs-menu ${open ? "active-menu" : ""}`}>
          <a
            onClick={() => {
              setOpen((prev) => !prev);
              setTimeout(() => {
                window.scrollTo(0, 0);
              }, 200);
            }}
            href="#"
            className="nav-links"
          >
            Home
          </a>

          <a
            onClick={() => {
              setOpen((prev) => !prev);
              setTimeout(() => {
                window.scrollTo(0, 0);
              }, 200);
            }}
            href="#"
            className="nav-links"
          >
            Brands
          </a>

          <a
            onClick={() => {
              setOpen((prev) => !prev);
              setTimeout(() => {
                window.scrollTo(0, 0);
              }, 200);
            }}
            href="#"
            className="nav-links"
          >
            Team
          </a>
          <a
            onClick={() => {
              setOpen((prev) => !prev);
              setTimeout(() => {
                window.scrollTo(0, 0);
              }, 200);
            }}
            href="#"
            className="nav-links"
          >
            Contact
          </a>
          <div className="nav-link-div">
            <a
              onClick={() => {
                setOpen((prev) => !prev);
                setTimeout(() => {
                  window.scrollTo(0, 0);
                }, 200);
              }}
              href={"#"}
              className="nav-links living-link"
            >
              Hair
            </a>
            <div className="dropdown-nav living-link-drop">
              <div className="drop-col">
                <h1>Hair Color</h1>
                <a href="...">Hair Color</a>
                <a href="...">Hair Color Additives</a>
                <a href="...">Bleaches & Lighteners</a>
                <a href="...">Developers & Peroxides</a>
                <a href="...">Color Removers & Correctors</a>
                <a href="...">Highlighting Foil</a>
              </div>
              <div className="drop-col">
                <h1>Hair Color</h1>
                <a href="...">Hair Color</a>
                <a href="...">Hair Color Additives</a>
                <a href="...">Bleaches & Lighteners</a>
                <a href="...">Developers & Peroxides</a>
                <a href="...">Color Removers & Correctors</a>
                <a href="...">Highlighting Foil</a>
              </div>
              <div className="drop-col">
                <h1>Hair Color</h1>
                <a href="...">Hair Color</a>
                <a href="...">Hair Color Additives</a>
                <a href="...">Bleaches & Lighteners</a>
                <a href="...">Developers & Peroxides</a>
                <a href="...">Color Removers & Correctors</a>
                <a href="...">Highlighting Foil</a>
              </div>
              <div className="drop-col">
                <h1>Hair Color</h1>
                <a href="...">Hair Color</a>
                <a href="...">Hair Color Additives</a>
                <a href="...">Bleaches & Lighteners</a>
                <a href="...">Developers & Peroxides</a>
                <a href="...">Color Removers & Correctors</a>
                <a href="...">Highlighting Foil</a>
              </div>
              <div className="drop-col">
                <h1>Hair Color</h1>
                <a href="...">Hair Color</a>
                <a href="...">Hair Color Additives</a>
                <a href="...">Bleaches & Lighteners</a>
                <a href="...">Developers & Peroxides</a>
                <a href="...">Color Removers & Correctors</a>
                <a href="...">Highlighting Foil</a>
              </div>
              <div className="drop-col">
                <h1>Hair Color</h1>
                <a href="...">Hair Color</a>
                <a href="...">Hair Color Additives</a>
                <a href="...">Bleaches & Lighteners</a>
                <a href="...">Developers & Peroxides</a>
                <a href="...">Color Removers & Correctors</a>
                <a href="...">Highlighting Foil</a>
              </div>
            </div>
          </div>
          <div className="nav-link-div">
            <a
              onClick={() => {
                setOpen((prev) => !prev);
                setTimeout(() => {
                  window.scrollTo(0, 0);
                }, 200);
              }}
              href="#"
              className="nav-links dining-link"
            >
              Nails
            </a>
            <div className="dropdown-nav dining-link-drop">
              <div className="drop-col">
                <h1>Hair Color</h1>
                <a href="...">Hair Color</a>
                <a href="...">Hair Color Additives</a>
                <a href="...">Bleaches & Lighteners</a>
                <a href="...">Developers & Peroxides</a>
                <a href="...">Color Removers & Correctors</a>
                <a href="...">Highlighting Foil</a>
              </div>
              <div className="drop-col">
                <h1>Hair Color</h1>
                <a href="...">Hair Color</a>
                <a href="...">Hair Color Additives</a>
                <a href="...">Bleaches & Lighteners</a>
                <a href="...">Developers & Peroxides</a>
                <a href="...">Color Removers & Correctors</a>
                <a href="...">Highlighting Foil</a>
              </div>
              <div className="drop-col">
                <h1>Hair Color</h1>
                <a href="...">Hair Color</a>
                <a href="...">Hair Color Additives</a>
                <a href="...">Bleaches & Lighteners</a>
                <a href="...">Developers & Peroxides</a>
                <a href="...">Color Removers & Correctors</a>
                <a href="...">Highlighting Foil</a>
              </div>
              <div className="drop-col">
                <h1>Hair Color</h1>
                <a href="...">Hair Color</a>
                <a href="...">Hair Color Additives</a>
                <a href="...">Bleaches & Lighteners</a>
                <a href="...">Developers & Peroxides</a>
                <a href="...">Color Removers & Correctors</a>
                <a href="...">Highlighting Foil</a>
              </div>
            </div>
          </div>
          <div className="nav-link-div">
            <a
              onClick={() => {
                setOpen((prev) => !prev);
                setTimeout(() => {
                  window.scrollTo(0, 0);
                }, 200);
              }}
              href="#"
              className="nav-links bedroom-link"
            >
              Skin & Spa
            </a>
            <div className="dropdown-nav bedroom-link-drop">
              <div className="drop-col">
                <h1>Hair Color</h1>
                <a href="...">Hair Color</a>
                <a href="...">Hair Color Additives</a>
                <a href="...">Bleaches & Lighteners</a>
                <a href="...">Developers & Peroxides</a>
                <a href="...">Color Removers & Correctors</a>
                <a href="...">Highlighting Foil</a>
              </div>
              <div className="drop-col">
                <h1>Hair Color</h1>
                <a href="...">Hair Color</a>
                <a href="...">Hair Color Additives</a>
                <a href="...">Bleaches & Lighteners</a>
                <a href="...">Developers & Peroxides</a>
                <a href="...">Color Removers & Correctors</a>
                <a href="...">Highlighting Foil</a>
              </div>
              <div className="drop-col">
                <h1>Hair Color</h1>
                <a href="...">Hair Color</a>
                <a href="...">Hair Color Additives</a>
                <a href="...">Bleaches & Lighteners</a>
                <a href="...">Developers & Peroxides</a>
                <a href="...">Color Removers & Correctors</a>
                <a href="...">Highlighting Foil</a>
              </div>
              <div className="drop-col">
                <h1>Hair Color</h1>
                <a href="...">Hair Color</a>
                <a href="...">Hair Color Additives</a>
                <a href="...">Bleaches & Lighteners</a>
                <a href="...">Developers & Peroxides</a>
                <a href="...">Color Removers & Correctors</a>
                <a href="...">Highlighting Foil</a>
              </div>
              <div className="drop-col">
                <h1>Hair Color</h1>
                <a href="...">Hair Color</a>
                <a href="...">Hair Color Additives</a>
                <a href="...">Bleaches & Lighteners</a>
                <a href="...">Developers & Peroxides</a>
                <a href="...">Color Removers & Correctors</a>
                <a href="...">Highlighting Foil</a>
              </div>
            </div>
          </div>
          <div className="nav-link-div">
            <a
              onClick={() => {
                setOpen((prev) => !prev);
                setTimeout(() => {
                  window.scrollTo(0, 0);
                }, 200);
              }}
              href="#"
              className="nav-links workspace-link"
            >
              Hair Removal
            </a>

            <div className="dropdown-nav workspace-link-drop">
              <div className="drop-col">
                <h1>Hair Color</h1>
                <a href="...">Hair Color</a>
                <a href="...">Hair Color Additives</a>
                <a href="...">Bleaches & Lighteners</a>
                <a href="...">Developers & Peroxides</a>
                <a href="...">Color Removers & Correctors</a>
                <a href="...">Highlighting Foil</a>
              </div>
              <div className="drop-col">
                <h1>Hair Color</h1>
                <a href="...">Hair Color</a>
                <a href="...">Hair Color Additives</a>
                <a href="...">Bleaches & Lighteners</a>
                <a href="...">Developers & Peroxides</a>
                <a href="...">Color Removers & Correctors</a>
                <a href="...">Highlighting Foil</a>
              </div>
            </div>
          </div>
          <div className="nav-link-div">
            <a
              onClick={() => {
                setOpen((prev) => !prev);
                setTimeout(() => {
                  window.scrollTo(0, 0);
                }, 200);
              }}
              href="#"
              className="nav-links outdoor-link"
            >
              Basics
            </a>

            <div className="dropdown-nav outdoor-link-drop">
              <div className="drop-col">
                <h1>Hair Color</h1>
                <a href="...">Hair Color</a>
                <a href="...">Hair Color Additives</a>
                <a href="...">Bleaches & Lighteners</a>
                <a href="...">Developers & Peroxides</a>
                <a href="...">Color Removers & Correctors</a>
                <a href="...">Highlighting Foil</a>
              </div>
              <div className="drop-col">
                <h1>Hair Color</h1>
                <a href="...">Hair Color</a>
                <a href="...">Hair Color Additives</a>
                <a href="...">Bleaches & Lighteners</a>
                <a href="...">Developers & Peroxides</a>
                <a href="...">Color Removers & Correctors</a>
                <a href="...">Highlighting Foil</a>
              </div>
              <div className="drop-col">
                <h1>Hair Color</h1>
                <a href="...">Hair Color</a>
                <a href="...">Hair Color Additives</a>
                <a href="...">Bleaches & Lighteners</a>
                <a href="...">Developers & Peroxides</a>
                <a href="...">Color Removers & Correctors</a>
                <a href="...">Highlighting Foil</a>
              </div>
              <div className="drop-col">
                <h1>Hair Color</h1>
                <a href="...">Hair Color</a>
                <a href="...">Hair Color Additives</a>
                <a href="...">Bleaches & Lighteners</a>
                <a href="...">Developers & Peroxides</a>
                <a href="...">Color Removers & Correctors</a>
                <a href="...">Highlighting Foil</a>
              </div>
              <div className="drop-col">
                <h1>Hair Color</h1>
                <a href="...">Hair Color</a>
                <a href="...">Hair Color Additives</a>
                <a href="...">Bleaches & Lighteners</a>
                <a href="...">Developers & Peroxides</a>
                <a href="...">Color Removers & Correctors</a>
                <a href="...">Highlighting Foil</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Header;
