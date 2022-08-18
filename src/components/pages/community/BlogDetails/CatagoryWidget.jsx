import React from "react";
import { Link } from "react-router-dom";

function CatagoryWidget() {
  return (
    <>
      <div className="sidebar-wrap">
        <div className="menu-search-wrap">
          <form action="#" className="menu-form">
            <Link to={"#"}>
              <i className="bx bx-search" />
            </Link>
            <input type="text" placeholder="Search Here" />
          </form>
        </div>
      </div>
      <div className="sidebar-wrap">
        <div className="single-sidebar">
          <div className="sidebar-title">
            <h3>Categories</h3>
          </div>
          <div className="category-list">
            <ul>
              <li>
                <Link to={"#"}>
                  Arts<span>22</span>
                </Link>
              </li>
              <li>
                <Link to={"#"}>
                  Photography<span>20</span>
                </Link>
              </li>
              <li>
                <Link to={"#"}>
                  Sports<span>22</span>
                </Link>
              </li>
              <li>
                <Link to={"#"}>
                  Collectibles<span>18</span>
                </Link>
              </li>
              <li>
                <Link to={"#"}>
                  Domains<span>10</span>
                </Link>
              </li>
              <li>
                <Link to={"#"}>
                  Technology<span>27</span>
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
}

export default CatagoryWidget;
