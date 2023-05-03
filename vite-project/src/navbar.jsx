import { React, useState } from "react";
import { MdOutlineKeyboardArrowUp } from "react-icons/md";

function Navbar() {
  const [toggle, setToggle] = useState(false);
  const [togglecompany, setToggleCompany] = useState(false);
  const [togglenavmenu, setToggleavmenu] = useState(true);
  return (
    <section>
      <div className="flex atc navbar jcSb">
        <section className="flex atc">
          <img src="logo.png" className="img-logo" alt="logo.png"/>
          <section
            className={`${
              togglenavmenu ? "nav-list-container" : "nav-list-container-active"
            }`}
          >
            <section className="flex nav-list atc">
              <div className=" pointer ft-cont ">
                <div
                  className="flex pointer ft-cont atc"
                  onClick={() => {
                    setToggle((prevToggle) => !prevToggle);
                  }}
                >
                  <p className="nav-items">Feature</p>
                  <MdOutlineKeyboardArrowUp
                    className={`${toggle ? "arrow" : "arrow-up"}`}
                  />
                </div>

                {toggle && (
                  <div className="active1">
                    <div className="flex features atc">
                      <img src="icon-todo.png" alt="icon-calendar.png" />
                      <p>Todo List</p>
                    </div>
                    <div className="flex features atc">
                      <img src="icon-calendar.png" alt="icon-calendar.png" />
                      <p>Calender</p>
                    </div>
                    <div className="flex features atc">
                      <img src="icon-reminders.png" alt="icon-calendar.png" />
                      <p>Reminders</p>
                    </div>
                    <div className="flex features atc">
                      <img src="icon-planning.png" alt="icon-calendar.png" />
                      <p>Planning</p>
                    </div>
                  </div>
                )}
              </div>

              <div className="pointer">
                <div
                  className="flex pointer ft-cont atc"
                  onClick={() => {
                    setToggleCompany((prevToggle) => !prevToggle);
                  }}
                >
                  <p className="nav-items">Company</p>

                  <MdOutlineKeyboardArrowUp
                    className={`${togglecompany ? "arrow" : "arrow-up"}`}
                  />
                </div>

                {togglecompany && (
                  <div className="active2">
                    <p>History</p>
                    <p>Our Team</p>
                    <p>Blog</p>
                  </div>
                )}
              </div>
              <div className="pointer  flex ft-cont">
                <p className="nav-items">Careers</p>
              </div>
              <div className=" flex pointer">
                <p className="nav-items">About</p>
              </div>

              <section className="btn-contain">
                <button className="login-btn pointer">Login</button>
                <button className="btn pointer">Register</button>
              </section>
            </section>
          </section>
        </section>
        <section className="flex atc btn-container">
          <button className="login-btn pointer">Login</button>
          <button className="btn pointer">Register</button>
        </section>
        <section
          className="harmbugger-container  pointer"
          onClick={() => {
            setToggleavmenu((prevToggle) => !prevToggle);
          }}
        >
          <div className={`${togglenavmenu ? "bar" : "bar-active"}`}></div>
          <div className={`${togglenavmenu ? "bar" : "bar-active"}`}></div>
          <div className={`${togglenavmenu ? "bar" : "bar-active"}`}></div>
        </section>
      </div>
      <section></section>
    </section>
  );
}

export default Navbar;
