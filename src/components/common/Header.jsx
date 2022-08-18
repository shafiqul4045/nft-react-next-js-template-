import React, { useEffect, useReducer, useState } from "react";
import { Link, NavLink } from "react-router-dom";
import WOW from 'wowjs';
/*---------Using reducer mange the active or inactive menu----------*/
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

function Header() {
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
      <Link to={"#"} id="scroll-top" className="back-to-top-btn">
        <i className="bx bx-chevron-up"></i>
      </Link>

      <header>
        <nav>
          <div className="header-menu-area">
            <div className="container-lg container-fluid">
              <div className="row">
                <div className="col-xl-2 col-lg-2 col-sm-6 col-6">
                  <div className="logo text-left">
                    <Link to={`${process.env.PUBLIC_URL}/`}>
                      <img
                        src={process.env.PUBLIC_URL + "/images/logo.png"}
                        alt="headerImage"
                      />
                    </Link>
                  </div>
                </div>
                <div className="col-xl-7 col-lg-7 col-sm-6 col-6">
                  <Link to={"#"} onClick={handleSidbarMenu} className={sidebar ===1 ? "hidden-lg hamburger":"hidden-lg hamburger h-active"}>
                    <span className="h-top" />
                    <span className="h-middle" />
                    <span className="h-bottom" />
                  </Link>
                  <nav className={sidebar ===1 ? "main-nav": "main-nav slidenav"}>
                    <div className="logo mobile-ham-logo d-lg-none d-block text-left">
                      <Link to={`${process.env.PUBLIC_URL}/`}>
                        <img
                          src={process.env.PUBLIC_URL + "/images/logo.png"}
                          alt="headerImage"
                        />
                      </Link>
                    </div>
                    <ul>
                      <li className="has-child-menu" onClick={() => dispatch({type: 'homeOne'})}>
                        <Link to={"#"}>Home</Link>
                        <i className="fl flaticon-plus">+</i>
                        <ul className={ state.activeMenu ==='homeOne'  ? "sub-menu d-block"  : "sub-menu d-none"  } >
                          <li>
                            <NavLink
                              activeClassName="active"
                              to={`${process.env.PUBLIC_URL}/`}
                              onClick={scrollTop}
                            >
                              Home 1
                            </NavLink>
                          </li>
                          <li>
                            <Link
                              to={`${process.env.PUBLIC_URL}/homepage-2`}
                              onClick={scrollTop}
                            >
                              Home 2
                            </Link>
                          </li>
                        </ul>
                      </li>
                      <li className="has-child-menu" onClick={()=> dispatch({type:"explore"})}>
                        <Link to={"#"}>Explore</Link>
                        <i className="fl flaticon-plus">+</i>
                        <ul className={ state.activeMenu ==='explore'  ? "sub-menu d-block"  : "sub-menu d-none"  }>
                          <li>
                            <NavLink
                              activeClassName="active"
                              to={`${process.env.PUBLIC_URL}/auction`}
                              onClick={scrollTop}
                            >
                              Auction
                            </NavLink>
                          </li>
                          <li>
                            <Link
                              to={`${process.env.PUBLIC_URL}/discover-auction`}
                              onClick={scrollTop}
                            >
                              Discover Auction
                            </Link>
                          </li>
                          <li>
                            <Link
                              to={`${process.env.PUBLIC_URL}/auction-details`}
                              onClick={scrollTop}
                            >
                              Auction Details
                            </Link>
                          </li>
                        </ul>
                      </li>
                      <li className="has-child-menu" onClick={()=> dispatch({type:"community"})}>
                        <Link to={"#"}>Community</Link>
                        <i className="fl flaticon-plus">+</i>
                        <ul className={ state.activeMenu ==='community'  ? "sub-menu d-block"  : "sub-menu d-none"  }>
                          <li>
                            <Link
                              to={`${process.env.PUBLIC_URL}/blog`}
                              onClick={scrollTop}
                            >
                              Blog
                            </Link>
                          </li>
                          <li>
                            <Link
                              to={`${process.env.PUBLIC_URL}/blog-details`}
                              onClick={scrollTop}
                            >
                              Blog Details
                            </Link>
                          </li>
                        </ul>
                      </li>
                      <li className="has-child-menu" onClick={()=> dispatch({type:"page"})}>
                        <Link to={"#"}>Pages</Link>
                        <i className="fl flaticon-plus">+</i>
                        <ul className={ state.activeMenu ==='page'  ? "sub-menu d-block"  : "sub-menu d-none"  }>
                          <li></li>
                          <li>
                            <NavLink
                              to={`${process.env.PUBLIC_URL}/author`}
                              onClick={scrollTop}
                            >
                              Author
                            </NavLink>
                          </li>
                          <li>
                            <Link
                              to={`${process.env.PUBLIC_URL}/author-details`}
                              onClick={scrollTop}
                            >
                              Author Details
                            </Link>
                          </li>
                          <li>
                            <Link
                              to={`${process.env.PUBLIC_URL}/login`}
                              onClick={scrollTop}
                            >
                              Login
                            </Link>
                          </li>
                          <li>
                            <Link
                              to={`${process.env.PUBLIC_URL}/sign-up`}
                              onClick={scrollTop}
                            >
                              Sign Up
                            </Link>
                          </li>
                          <li>
                            <Link
                              to={`${process.env.PUBLIC_URL}/forget-passsword`}
                              onClick={scrollTop}
                            >
                              Forget Password
                            </Link>
                            <NavLink
                              activeClassName="active"
                              to={`${process.env.PUBLIC_URL}/error`}
                              onClick={scrollTop}
                            >
                              Error
                            </NavLink>
                          </li>
                        </ul>
                      </li>
                      <li>
                        <Link
                          to={`${process.env.PUBLIC_URL}/contact`}
                          onClick={scrollTop}
                        >
                          Contact
                        </Link>
                      </li>
                    </ul>
                    <div className="menu-search-wrap d-block d-lg-none">
                      <form action="#" className="menu-form">
                        <Link to={"#"}>
                          <i className="bx bx-search" />
                        </Link>
                        <input type="text" placeholder="Search Here" />
                      </form>
                    </div>
                  </nav>
                </div>
                <div className="col-xl-3 col-lg-3 d-none d-lg-block">
                  <div className="menu-search-wrap">
                    <form action="#" className="menu-form">
                      <Link to={"#"}>
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
      </header>
    </>
  );
}

export default Header;
