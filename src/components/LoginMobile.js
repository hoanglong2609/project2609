import React, { Component } from 'react';

class LoginMobile extends Component {
    render() {
        return (
    <label htmlFor="Login-mobile" className="header__mobile-users">
  <input
    type="checkbox"
    id="Login-mobile"
    hidden
    className="header__mobile-login-check"
  />
  <div className="header__mobile-users--icon">
    <svg
      version="1.1"
      x="0px"
      y="0px"
      viewBox="0 0 23 23"
      enableBackground="new 0 0 23 23"
      xmlSpace="preserve"
    >
      <g>
        <path
          fill="currentColor"
          d="M11.5,14.1c-2.2,0-4-1.8-4-4c0-2.2,1.8-4,4-4s4,1.8,4,4C15.5,12.3,13.7,14.1,11.5,14.1z M11.5,7.3
                    c-1.6,0-2.8,1.3-2.8,2.8c0,1.6,1.3,2.8,2.8,2.8s2.8-1.3,2.8-2.8C14.3,8.5,13,7.3,11.5,7.3z"
        />
        <path
          fill="currentColor"
          d="M11.5,23c-3.1,0-5.9-1.2-8.1-3.4c-2.2-2.2-3.4-5-3.4-8.1s1.2-5.9,3.4-8.1c2.2-2.2,5-3.4,8.1-3.4
                    s5.9,1.2,8.1,3.4c2.2,2.2,3.4,5,3.4,8.1s-1.2,5.9-3.4,8.1C17.4,21.8,14.5,23,11.5,23z M11.5,1.2C5.8,1.2,1.2,5.9,1.2,11.5
                    s4.6,10.3,10.3,10.3s10.3-4.6,10.3-10.3S17.1,1.2,11.5,1.2z"
        />
        <path
          fill="currentColor"
          d="M11.5,23c-1.5,0-2.9-0.3-4.2-0.8c-0.2-0.1-0.4-0.3-0.4-0.6v-5.3c0-1.8,1.5-3.3,3.3-3.3h2.6
                    c1.8,0,3.3,1.5,3.3,3.3v5.3c0,0.2-0.1,0.5-0.4,0.6C14.4,22.7,12.9,23,11.5,23z M8.1,21.2c1.1,0.4,2.2,0.6,3.4,0.6s2.3-0.2,3.4-0.6
                    v-4.9c0-1.2-0.9-2.1-2.1-2.1h-2.6c-1.2,0-2.1,0.9-2.1,2.1V21.2z"
        />
      </g>
    </svg>
  </div>
  <div className="header__mobile-login">
    <div className="header__mobile-login-inner">
      {/* register and login */}
      <ul className="header__mobile-login-heading">
        <li className="header__mobile-login-1">
          <a href>LOGNIN</a>
        </li>
        <li className="header__mobile-login-1 header__mobile-no-select">
          <a href>REGISTER</a>
        </li>
      </ul>
      {/* Form mobile */}
      <div className="header__mobile-form">
        <div className="header__mobile-form-heading">
          <h4 className="header__mobile-form-title">Sign In Here!</h4>
          <p className="header__mobile-form-description">
            Log into your account in just a few simple steps.
          </p>
        </div>
        <div className="header__mobile-form-input">
          <div className="header__mobile-form-name">
            <div className="header__mobile-icon-heading">
              <i className="fas fa-user" />
            </div>
            <input
              type="text"
              className="header__mobile-input-name"
              placeholder="User Name"
              title="Three or more characters"
            />
          </div>
          <div className="header__mobile-form-name">
            <div className="header__mobile-icon-heading">
              <i className="ti-lock" />
            </div>
            <input
              type="password"
              className="header__mobile-input-name"
              placeholder="Password"
            />
          </div>
        </div>
        <div className="header__mobile-form-remember">
          <input
            type="checkbox"
            hidden
            id="header__mobile-check-circle"
            className="header__mobile-circle"
          />
          <div className="header__mobile-form-check">
            <i className="fas fa-circle" />
          </div>
          <label
            htmlFor="header__mobile-check-circle"
            className="header__mobile-form--text"
          >
            Remember me
          </label>
        </div>
        <div className="header__mobile-lost-password">
          <span>Lost Your password?</span>
        </div>
        <button className="header__mobile-btn">
          <span>SIGN IN</span>
        </button>
        <div className="header__mobile-social-title">
          Sign in with Facebook or Google+
        </div>
      </div>
      {/* Social mobile */}
      <div className="header__mobile-social">
        <div className="header__mobile-social-fb">Facebook</div>
        <div className="header__mobile-social-gg">Google+</div>
      </div>
    </div>
  </div>
  <label
    htmlFor="Login-mobile"
    className="header__mobile-login-overlay"
  ></label>
</label>

        );
    }
}

export default LoginMobile;