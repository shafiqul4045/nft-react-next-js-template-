import React, { useEffect, useReducer, useState } from "react";
import { Link } from "react-router-dom";
import WOW from 'wowjs';
const initialState = {activeMenu:''};

function reducer(state, action) {
  switch (action.type) {
    case 'homeOne':
      return {activeMenu: 'homeOne'};
    case 'explore':
      return {activeMenu: 'explore'};
    case 'community':
      return {activeMenu: 'community'};
    case 'page':
      return {activeMenu: 'page'};
    default:
      return {activeMenu: ''};
  }
}

function HeaderTwo() {
  const [sidebar, setSidebar] = useState(false);
  const [state, dispatch] = useReducer(reducer, initialState);
  useEffect(() => {
    new WOW.WOW({
      live:false
    }).init();
    window.addEventListener("scroll", isSticky);
    return () => {
      window.removeEventListener("scroll", isSticky);
    };
  });
  const isSticky = (e) => {
    const header = document.querySelector(".header-menu-area");
    const menuscrollTop = window.scrollY;
    menuscrollTop >= 20
      ? header.classList.add("sticky")
      : header.classList.remove("sticky");
  };
  const handleSidbarMenu = () => {
    if (sidebar === false || sidebar === 0) {
      setSidebar(1);
    } else {
      setSidebar(false);
    }
  };
  const scrollTop = () => window.scrollTo({ top: 0, behavior: "smooth" });
  return (
    <>
      <nav>
        <div className="header-menu-area design-2">
          <div className="container-lg container-fluid">
            <div className="row">
              <div className="col-xl-2 col-lg-2 col-sm-6 col-6">
                <div className="logo text-left">
                  <Link to={`${process.env.PUBLIC_URL}/`}>
                    <img
                      src={process.env.PUBLIC_URL + "/images/logo-2.png"}
                      alt="logo2"
                    />
                  </Link>
                </div>
              </div>
              <div className="col-xl-7 col-lg-7 col-sm-6 col-6">
                <Link to={"#"} onClick={handleSidbarMenu} className={sidebar ===1 ? "hidden-lg hamburger": " hidden-lg hamburger h-active"}>
                  <span className="h-top" />
                  <span className="h-middle" />
                  <span className="h-bottom" />
                </Link>
                <nav className={sidebar ===1 ? "main-nav": "main-nav slidenav"}>
                  <div className="logo mobile-ham-logo d-lg-none d-block text-left">
                    <Link to={`${process.env.PUBLIC_URL}/`}>
                      <img
                        src={process.env.PUBLIC_URL + "/images/logo.png"}
                        alt="Main logo"
                      />
                    </Link>
                  </div>
                  <ul>
                    <li className="has-child-menu" onClick={() => dispatch({type: 'homeOne'})}>
                      <Link to={"#"}>Home</Link>
                      <i className="fl flaticon-plus">+</i>
                      <ul className={ state.activeMenu ==='homeOne'  ? "sub-menu d-block"  : "sub-menu d-none"}>
                        <li>
                          <Link
                            onClick={scrollTop}
                            to={`${process.env.PUBLIC_URL}/`}
                          >
                            Home 1
                          </Link>
                        </li>
                        <li>
                          <Link
                            onClick={scrollTop}
                            to={`${process.env.PUBLIC_URL}/homepage-2`}
                          >
                            Home 2
                          </Link>
                        </li>
                      </ul>
                    </li>
                    <li className="has-child-menu" onClick={() => dispatch({type: 'explore'})}>
                      <Link onClick={scrollTop} to={"#"}>
                        Explore
                      </Link>
                      <i className="fl flaticon-plus">+</i>
                      <ul className={ state.activeMenu ==='explore'  ? "sub-menu d-block"  : "sub-menu d-none"}>
                        <li>
                          <Link
                            onClick={scrollTop}
                            to={`${process.env.PUBLIC_URL}/auction`}
                          >
                            Auction
                          </Link>
                        </li>
                        <li>
                          <Link
                            onClick={scrollTop}
                            to={`${process.env.PUBLIC_URL}/discover-auction`}
                          >
                            Discover Auction
                          </Link>
                        </li>
                        <li>
                          <Link
                            onClick={scrollTop}
                            to={`${process.env.PUBLIC_URL}/auction-details`}
                          >
                            Auction Details
                          </Link>
                        </li>
                      </ul>
                    </li>
                    <li className="has-child-menu" onClick={() => dispatch({type: 'community'})}>
                      <Link onClick={scrollTop} to={"#"}>
                        Community
                      </Link>
                      <i className="fl flaticon-plus">+</i>
                      <ul className={ state.activeMenu ==='community'  ? "sub-menu d-block"  : "sub-menu d-none"}>
                        <li>
                          <Link
                            onClick={scrollTop}
                            to={`${process.env.PUBLIC_URL}/blog`}
                          >
                            Blog
                          </Link>
                        </li>
                        <li>
                          <Link
                            onClick={scrollTop}
                            to={`${process.env.PUBLIC_URL}/blog-details`}
                          >
                            Blog Details
                          </Link>
                        </li>
                      </ul>
                    </li>
                    <li className="has-child-menu"onClick={() => dispatch({type: 'page'})}>
                      <Link onClick={scrollTop} to={"#"}>
                        Pages
                      </Link>
                      <i className="fl flaticon-plus">+</i>
                      <ul className={ state.activeMenu ==='page'  ? "sub-menu d-block"  : "sub-menu d-none"}>
                        <li>
                          <Link
                            onClick={scrollTop}
                            to={`${process.env.PUBLIC_URL}/error`}
                          >
                            Error
                          </Link>
                        </li>
                        <li>
                          <Link
                            onClick={scrollTop}
                            to={`${process.env.PUBLIC_URL}/author`}
                          >
                            Author
                          </Link>
                        </li>
                        <li>
                          <Link
                            onClick={scrollTop}
                            to={`${process.env.PUBLIC_URL}/author-details`}
                          >
                            Author Details
                          </Link>
                        </li>
                        <li>
                          <Link
                            onClick={scrollTop}
                            to={`${process.env.PUBLIC_URL}/login`}
                          >
                            Login
                          </Link>
                        </li>
                        <li>
                          <Link
                            onClick={scrollTop}
                            to={`${process.env.PUBLIC_URL}/sign-up`}
                          >
                            Sign Up
                          </Link>
                        </li>
                        <li>
                          <Link
                            onClick={scrollTop}
                            to={`${process.env.PUBLIC_URL}/forget-passsword`}
                          >
                            Forget Password
                          </Link>
                        </li>
                      </ul>
                    </li>
                    <li>
                      <Link
                        onClick={scrollTop}
                        to={`${process.env.PUBLIC_URL}/contact`}
                      >
                        Contact
                      </Link>
                    </li>
                  </ul>
                  <div className="menu-search-wrap design-2 d-block d-lg-none">
                    <form action="#" className="menu-form">
                      <Link to={"#"}>
                        <i className="bx bx-search" />
                      </Link>
                      <input  type="text" placeholder="Search Here" />
                    </form>
                  </div>
                </nav>
              </div>
              <div className="col-xl-3 col-lg-3 d-none d-lg-block">
                <div className="menu-search-wrap design-2">
                  <form action="#" className="menu-form">
                    <Link to={"#"} onClick={scrollTop}>
                      <i className="bx bx-search" />
                    </Link>
                    <input type="text" placeholder="Search Here" />
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
}

export default HeaderTwo;
