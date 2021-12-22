import React, { Component } from 'react'

export default class HeaderNavbarList extends Component {
    render() {
        return (
    
            <ul className="header__navbar-list">
            <li className="header__navbar-item">
              <a
                href="#"
                className="header__navbar-link header__navbar-link--has-color"
              >
                Home Page
              </a>
             
            </li>
            <li className="header__navbar-item">
              <a href="" className="header__navbar-link">
                {" "}
                About us{" "}
              </a>
              <div className="header__inner">
                <ul className="header__inner-list">
                  <li className="header__inner-item">
                    <a href="#" className="header__inner-link">
                      About Us
                    </a>
                  </li>
                  <li className="header__inner-item">
                    <a href="#" className="header__inner-link">
                      What We Offer
                    </a>
                  </li>
                  <li className="header__inner-item">
                    <a href="#" className="header__inner-link">
                      Our Team
                    </a>
                  </li>
                  <li className="header__inner-item">
                    <a href="#" className="header__inner-link">
                      Get In Touch
                    </a>
                  </li>
                  <li className="header__inner-item">
                    <a href="#" className="header__inner-link">
                      Contact Us
                    </a>
                  </li>
                  <li className="header__inner-item">
                    <a href="#" className="header__inner-link">
                      FAQ Page
                    </a>
                  </li>
                  <li className="header__inner-item">
                    <a href="#" className="header__inner-link">
                      Coming Soon
                    </a>
                  </li>
                  <li className="header__inner-item">
                    <a href="#" className="header__inner-link">
                      Error Page
                    </a>
                  </li>
                </ul>
              </div>
            </li>
            <li className="header__navbar-item">
              <a href="#" className="header__navbar-link">
                {" "}
                Programs{" "}
              </a>
              <div className="header__inner">
                <ul className="header__inner-list">
                  <li className="header__inner-item">
                    <a href="#" className="header__inner-link">
                      Courses
                    </a>
                  </li>
                  <li className="header__inner-item">
                    <a href ="#"className="header__inner-link">
                      Full Stack Web Development
                    </a>
                  </li>
                  <li className="header__inner-item">
                    <a href="#" className="header__inner-link">
                      Destination Item
                    </a>
                  </li>
                </ul>
              </div>
            </li>
            <li className="header__navbar-item">
              <a href="#" className="header__navbar-link">
                {" "}
                Student{" "}
              </a>
              <div className="header__inner">
                <ul className="header__inner-list">
                  <li className="header__inner-item">
                    <a href="#" className="header__inner-link">
                      Class Schedule
                    </a>
                  </li>
                  <li className="header__inner-item">
                    <a href="#" className="header__inner-link">
                      Office List
                    </a>
                  </li>
                  <li className="header__inner-item">
                    <a href="#" className="header__inner-link">
                      Products 
                    </a>
                  </li>
                  <li className="header__inner-item">
                    <a href className="header__inner-link">
                      Payment
                    </a>
                  </li>
                </ul>
              </div>
            </li>
            <li className="header__navbar-item">
              <a href="#" className="header__navbar-link">
                {" "}
                Blog{" "}
              </a>
              <div className="header__inner">
                <ul className="header__inner-list">
                  <li className="header__inner-item">
                    <a href className="header__inner-link">
                      Blog Masonry
                    </a>
                  </li>
                  <li className="header__inner-item">
                    <div className="header__inner--Blog">
                      <a href className="header__inner-link">
                        {" "}
                        Blog Standard{" "}
                      </a>
                      <span className="arrow-right">
                        <i className="ti-angle-right" />
                      </span>
                    </div>
                    <ul className="header__inner-extra">
                      <li className="header__inner-extra-item">
                        <a href className="header__inner-extra-link">
                          Right Sidebar
                        </a>
                      </li>
                      <li className="header__inner-extra-item">
                        <a href className="header__inner-extra-link">
                          Left Sidebar
                        </a>
                      </li>
                      <li className="header__inner-extra-item">
                        <a href className="header__inner-extra-link">
                          Without Sidebar
                        </a>
                      </li>
                    </ul>
                  </li>
                  <li className="header__inner-item">
                    <div className="header__inner--Blog">
                      <a href className="header__inner-link">
                        Post Types
                      </a>
                      <span className="arrow-right">
                        <i className="ti-angle-right" />
                      </span>
                    </div>
                    <ul className="header__inner-extra">
                      <li className="header__inner-extra-item">
                        <a href className="header__inner-extra-link">
                          Standard
                        </a>
                      </li>
                      <li className="header__inner-extra-item">
                        <a href className="header__inner-extra-link">
                          Gallery
                        </a>
                      </li>
                      <li className="header__inner-extra-item">
                        <a href className="header__inner-extra-link">
                          {" "}
                          Link{" "}
                        </a>
                      </li>
                      <li className="header__inner-extra-item">
                        <a href className="header__inner-extra-link">
                          {" "}
                          Quote{" "}
                        </a>
                      </li>
                      <li className="header__inner-extra-item">
                        <a href className="header__inner-extra-link">
                          {" "}
                          Video{" "}
                        </a>
                      </li>
                      <li className="header__inner-extra-item">
                        <a href className="header__inner-extra-link">
                          {" "}
                          Audio{" "}
                        </a>
                      </li>
                      <li className="header__inner-extra-item">
                        <a href className="header__inner-extra-link">
                          No Sidebar
                        </a>
                      </li>
                    </ul>
                  </li>
                </ul>
              </div>
            </li>
            <li className="header__navbar-item">
              <a href="#" className="header__navbar-link">
                {" "}
                Contact{" "}
              </a>
              <div className="header__inner">
                <ul className="header__inner-list">
                  <li className="header__inner-item">
                    <a href className="header__inner-link">
                      Product List
                    </a>
                  </li>
                  <li className="header__inner-item">
                    <a href className="header__inner-link">
                      Product Single
                    </a>
                  </li>
                  <li className="header__inner-item">
                    <div className="header__inner--Blog">
                      <a href className="header__inner-link">
                        Shops Layouts
                      </a>
                      <span className="arrow-right">
                        <i className="ti-angle-right" />
                      </span>
                    </div>
                    <ul className="header__inner-extra">
                      <li className="header__inner-extra-item">
                        <a href className="header__inner-extra-link">
                          Threes Column
                        </a>
                      </li>
                      <li className="header__inner-extra-item">
                        <a href className="header__inner-extra-link">
                          Four Column
                        </a>
                      </li>
                      <li className="header__inner-extra-item">
                        <a href className="header__inner-extra-link">
                          Full Width
                        </a>
                      </li>
                    </ul>
                  </li>
                  <li className="header__inner-item">
                    <div className="header__inner--Blog">
                      <a href className="header__inner-link">
                        Shop Pages
                      </a>
                      <span className="arrow-right">
                        <i className="ti-angle-right" />
                      </span>
                    </div>
                    <ul className="header__inner-extra">
                      <li className="header__inner-extra-item">
                        <a href className="header__inner-extra-link">
                          My account
                        </a>
                      </li>
                      <li className="header__inner-extra-item">
                        <a href className="header__inner-extra-link">
                          {" "}
                          Cart{" "}
                        </a>
                      </li>
                      <li className="header__inner-extra-item">
                        <a href className="header__inner-extra-link">
                          Checkout
                        </a>
                      </li>
                    </ul>
                  </li>
                </ul>
              </div>
            </li>
            <li className="header__navbar-item">
              <a href className="header__navbar-link">
                {" "}
                E3 Talk{" "}
              </a>
              <div className="header__inner header__inner--ful-width">
                <ul className="header__inner-list">
                  <li className="header__inner-item">
                    <a href className="header__inner-link header__inner--text">
                      Featured
                    </a>
                  </li>
                  <li className="header__inner-item">
                    <a href className="header__inner-link">
                      Tour list
                    </a>
                  </li>
                  <li className="header__inner-item">
                    <a href className="header__inner-link">
                      Tour Carousel
                    </a>
                  </li>
                  <li className="header__inner-item">
                    <a href className="header__inner-link">
                      Destination With Tours
                    </a>
                  </li>
                  <li className="header__inner-item">
                    <a href className="header__inner-link">
                      Destination list
                    </a>
                  </li>
                  <li className="header__inner-item">
                    <a href className="header__inner-link">
                      Destination Fullscreen Slider
                    </a>
                  </li>
                  <li className="header__inner-item">
                    <a href className="header__inner-link">
                      Fullscreen sections
                    </a>
                  </li>
                  <li className="header__inner-item">
                    <a href className="header__inner-link">
                      reviews Carousel
                    </a>
                  </li>
                </ul>
                <ul className="header__inner-list">
                  <li className="header__inner-item">
                    <a href className="header__inner-link header__inner--text">
                      presentation
                    </a>
                  </li>
                  <li className="header__inner-item">
                    <a href className="header__inner-link">
                      team
                    </a>
                  </li>
                  <li className="header__inner-item">
                    <a href className="header__inner-link">
                      blog list
                    </a>
                  </li>
                  <li className="header__inner-item">
                    <a href className="header__inner-link">
                      Shop list
                    </a>
                  </li>
                  <li className="header__inner-item">
                    <a href className="header__inner-link">
                      Testimonials
                    </a>
                  </li>
                  <li className="header__inner-item">
                    <a href className="header__inner-link">
                      Banner
                    </a>
                  </li>
                  <li className="header__inner-item">
                    <a href className="header__inner-link">
                      Clients
                    </a>
                  </li>
                  <li className="header__inner-item">
                    <a href className="header__inner-link">
                      Parallax Section
                    </a>
                  </li>
                  <li className="header__inner-item">
                    <a href className="header__inner-link">
                      Video button
                    </a>
                  </li>
                </ul>
                <ul className="header__inner-list">
                  <li className="header__inner-item">
                    <a href className="header__inner-link header__inner--text">
                      classic
                    </a>
                  </li>
                  <li className="header__inner-item">
                    <a href className="header__inner-link">
                      accordions
                    </a>
                  </li>
                  <li className="header__inner-item">
                    <a href className="header__inner-link">
                      tabs
                    </a>
                  </li>
                  <li className="header__inner-item">
                    <a href className="header__inner-link">
                      buttons
                    </a>
                  </li>
                  <li className="header__inner-item">
                    <a href className="header__inner-link">
                      googles maps
                    </a>
                  </li>
                  <li className="header__inner-item">
                    <a href className="header__inner-link">
                      progress bar
                    </a>
                  </li>
                  <li className="header__inner-item">
                    <a href className="header__inner-link">
                      countdown
                    </a>
                  </li>
                  <li className="header__inner-item">
                    <a href className="header__inner-link">
                      counters
                    </a>
                  </li>
                  <li className="header__inner-item">
                    <a href className="header__inner-link">
                      call to action
                    </a>
                  </li>
                  <li className="header__inner-item">
                    <a href className="header__inner-link">
                      contact form
                    </a>
                  </li>
                </ul>
                <ul className="header__inner-list">
                  <li className="header__inner-item">
                    <a href className="header__inner-link header__inner--text">
                      Typography
                    </a>
                  </li>
                  <li className="header__inner-item">
                    <a href className="header__inner-link">
                      Headings
                    </a>
                  </li>
                  <li className="header__inner-item">
                    <a href className="header__inner-link">
                      Columns
                    </a>
                  </li>
                  <li className="header__inner-item">
                    <a href className="header__inner-link">
                      section title
                    </a>
                  </li>
                  <li className="header__inner-item">
                    <a href className="header__inner-link">
                      blockquote
                    </a>
                  </li>
                  <li className="header__inner-item">
                    <a href className="header__inner-link">
                      dropcaps
                    </a>
                  </li>
                  <li className="header__inner-item">
                    <a href className="header__inner-link">
                      highlights
                    </a>
                  </li>
                  <li className="header__inner-item">
                    <a href className="header__inner-link">
                      icon with text
                    </a>
                  </li>
                  <li className="header__inner-item">
                    <a href className="header__inner-link">
                      separators
                    </a>
                  </li>
                  <li className="header__inner-item">
                    <a href className="header__inner-link">
                      custom font
                    </a>
                  </li>
                </ul>
              </div>
            </li>
          </ul>
        )
    }
}
