import React from "react";
import { Link } from "react-router-dom";

function TagWidget() {
  return (
    <>
      <div className="sidebar-wrap">
        <div className="single-sidebar">
          <div className="sidebar-title">
            <h3>Tags</h3>
          </div>
          <div className="tag-list">
            <ul>
              <li>
                <Link to={"#"}>Bitcoin</Link>
              </li>
              <li>
                <Link to={"#"}>Crypto</Link>
              </li>
              <li>
                <Link to={"#"}>Etherium</Link>
              </li>
              <li>
                <Link to={"#"}>Digital Art</Link>
              </li>
              <li>
                <Link to={"#"}>Marketplace</Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
}

export default TagWidget;
