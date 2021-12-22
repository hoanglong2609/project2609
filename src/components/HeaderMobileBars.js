import React, { Component } from 'react';

class HeaderMobileBars extends Component {
    render() {
        return (
        <div className="header__mobile-bars">
  <label
    htmlFor="header__mobile-navbars-check"
    className="header__mobile-bars-icon"
  >
    <svg
      style={{ fill: "white" }}
      version="1.1"
      xmlns="http://www.w3.org/2000/svg"
      xmlnsXlink="http://www.w3.org/1999/xlink"
      x="0px"
      y="0px"
      width="19px"
      height="17px"
      viewBox="0 0 26 20"
      enableBackground="new 0 0 26 20"
      xmlSpace="preserve"
    >
      <rect x="10.5" width="13.7" height="2.4" />
      <rect x={8} y="8.8" width="16.2" height="2.4" />
      <rect x="1.7" y="17.6" width="22.5" height="2.4" />
    </svg>
  </label>
  <input
    type="checkbox"
    hidden
    id="header__mobile-navbars-check"
    className="header__mobile-bar-check"
  />
  <div className="nav__mobile">
    <ul className="nav__mobile-list">
      <label htmlFor="nav__mobile-ancestor-check" className="nav__mobile-item">
        <input
          type="checkbox"
          hidden
          id="nav__mobile-ancestor-check"
          className="nav__mobile-ancestor-link"
        />
        <div className="nav__mobile-home">Home</div>
        <ul className="nav__mobile-sub">
          <li className="nav__mobile-sub-item">
            <a href className="nav__mobile-sub-link">
              travel agency
            </a>
          </li>
          <li className="nav__mobile-sub-item">
            <a href className="nav__mobile-sub-link">
              winter Holidays
            </a>
          </li>
          <li className="nav__mobile-sub-item">
            <a href className="nav__mobile-sub-link">
              exotic destinations
            </a>
          </li>
          <li className="nav__mobile-sub-item">
            <a href className="nav__mobile-sub-link">
              summer Holidays
            </a>
          </li>
          <li className="nav__mobile-sub-item">
            <a href className="nav__mobile-sub-link">
              city tours
            </a>
          </li>
          <li className="nav__mobile-sub-item">
            <a href className="nav__mobile-sub-link">
              destinations carousel
            </a>
          </li>
          <li className="nav__mobile-sub-item">
            <a href className="nav__mobile-sub-link">
              Vacation showcase
            </a>
          </li>
          <li className="nav__mobile-sub-item">
            <a href className="nav__mobile-sub-link">
              Landing
            </a>
          </li>
        </ul>
      </label>
      <label htmlFor="nav__mobile-ancestor-check1" className="nav__mobile-item">
        <input
          type="checkbox"
          hidden
          id="nav__mobile-ancestor-check1"
          className="nav__mobile-ancestor-link"
        />
        <div className="nav__mobile-home">pages</div>
        <ul className="nav__mobile-sub">
          <li className="nav__mobile-sub-item">
            <a href className="nav__mobile-sub-link">
              About us
            </a>
          </li>
          <li className="nav__mobile-sub-item">
            <a href className="nav__mobile-sub-link">
              what we offer
            </a>
          </li>
          <li className="nav__mobile-sub-item">
            <a href className="nav__mobile-sub-link">
              our team
            </a>
          </li>
          <li className="nav__mobile-sub-item">
            <a href className="nav__mobile-sub-link">
              get in touch
            </a>
          </li>
          <li className="nav__mobile-sub-item">
            <a href className="nav__mobile-sub-link">
              contact us
            </a>
          </li>
          <li className="nav__mobile-sub-item">
            <a href className="nav__mobile-sub-link">
              FAQ page
            </a>
          </li>
          <li className="nav__mobile-sub-item">
            <a href className="nav__mobile-sub-link">
              coming soon
            </a>
          </li>
          <li className="nav__mobile-sub-item">
            <a href className="nav__mobile-sub-link">
              Error page
            </a>
          </li>
        </ul>
      </label>
      <label htmlFor="nav__mobile-ancestor-check2" className="nav__mobile-item">
        <input
          type="checkbox"
          hidden
          id="nav__mobile-ancestor-check2"
          className="nav__mobile-ancestor-link"
        />
        <div className="nav__mobile-home">destinations</div>
        <ul className="nav__mobile-sub">
          <li className="nav__mobile-sub-item">
            <a href className="nav__mobile-sub-link">
              destination list
            </a>
          </li>
          <li className="nav__mobile-sub-item">
            <a href className="nav__mobile-sub-link">
              destination slider
            </a>
          </li>
          <li className="nav__mobile-sub-item">
            <a href className="nav__mobile-sub-link">
              destination item
            </a>
          </li>
        </ul>
      </label>
      <label htmlFor="nav__mobile-ancestor-check3" className="nav__mobile-item">
        <input
          type="checkbox"
          hidden
          id="nav__mobile-ancestor-check3"
          className="nav__mobile-ancestor-link"
        />
        <div className="nav__mobile-home">tours</div>
        <ul className="nav__mobile-sub">
          <li className="nav__mobile-sub-item">
            <a href className="nav__mobile-sub-link">
              Standard list
            </a>
          </li>
          <li className="nav__mobile-sub-item">
            <a href className="nav__mobile-sub-link">
              Gallery list
            </a>
          </li>
          <li className="nav__mobile-sub-item">
            <a href className="nav__mobile-sub-link">
              Split list
            </a>
          </li>
          <li className="nav__mobile-sub-item">
            <a href className="nav__mobile-sub-link">
              tour item
            </a>
          </li>
        </ul>
      </label>
      <label htmlFor="nav__mobile-ancestor-check4" className="nav__mobile-item">
        <input
          type="checkbox"
          hidden
          id="nav__mobile-ancestor-check4"
          className="nav__mobile-ancestor-link"
        />
        <div className="nav__mobile-home">blog</div>
        <ul className="nav__mobile-sub">
          <li className="nav__mobile-sub-item">
            <a href className="nav__mobile-sub-link">
              blog Masonry
            </a>
          </li>
          <li className="nav__mobile-sub-item">
            <a href className="nav__mobile-sub-link">
              blog Standard
            </a>
          </li>
          <li className="nav__mobile-sub-item">
            <a href className="nav__mobile-sub-link">
              post types
            </a>
          </li>
        </ul>
      </label>
      <label htmlFor="nav__mobile-ancestor-check5" className="nav__mobile-item">
        <input
          type="checkbox"
          hidden
          id="nav__mobile-ancestor-check5"
          className="nav__mobile-ancestor-link"
        />
        <div className="nav__mobile-home">shop</div>
        <ul className="nav__mobile-sub">
          <li className="nav__mobile-sub-item">
            <a href className="nav__mobile-sub-link">
              product List
            </a>
          </li>
          <li className="nav__mobile-sub-item">
            <a href className="nav__mobile-sub-link">
              product Single
            </a>
          </li>
          <li className="nav__mobile-sub-item">
            <a href className="nav__mobile-sub-link">
              shop layouts
            </a>
          </li>
          <li className="nav__mobile-sub-item">
            <a href className="nav__mobile-sub-link">
              shop pages
            </a>
          </li>
        </ul>
      </label>
      <label htmlFor="nav__mobile-ancestor-check6" className="nav__mobile-item">
        <input
          type="checkbox"
          hidden
          id="nav__mobile-ancestor-check6"
          className="nav__mobile-ancestor-link"
        />
        <div htmlFor="nav__mobile-ancestor-check" className="nav__mobile-home">
          Elements
        </div>
        <ul className="nav__mobile-sub">
          <li className="nav__mobile-sub-item">
            <a href className="nav__mobile-sub-link">
              Featured{" "}
            </a>
          </li>
          <li className="nav__mobile-sub-item">
            <a href className="nav__mobile-sub-link">
              presentation
            </a>
          </li>
          <li className="nav__mobile-sub-item">
            <a href className="nav__mobile-sub-link">
              classic{" "}
            </a>
          </li>
          <li className="nav__mobile-sub-item">
            <a href className="nav__mobile-sub-link">
              Typography
            </a>
          </li>
          <li className="nav__mobile-sub-item">
            <a href className="nav__mobile-sub-link">
              city tours
            </a>
          </li>
          <li className="nav__mobile-sub-item">
            <a href className="nav__mobile-sub-link">
              destinations carousel
            </a>
          </li>
          <li className="nav__mobile-sub-item">
            <a href className="nav__mobile-sub-link">
              Vacation showcase
            </a>
          </li>
          <li className="nav__mobile-sub-item">
            <a href className="nav__mobile-sub-link">
              Landing
            </a>
          </li>
        </ul>
      </label>
    </ul>
  </div>
  <label
    htmlFor="header__mobile-navbars-check"
    className="nav__mobile-overlay"
  />
</div>

        );
    }
}

export default HeaderMobileBars;