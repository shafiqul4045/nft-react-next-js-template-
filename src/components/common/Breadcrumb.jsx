import React from "react";
import { Link } from "react-router-dom";

function Breadcrumb(props) {
  return (
    <>
      <div className="breadcrumb-area">
        <div className="container">
          <div className="row">
            <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12">
              <div className="breadcrumb-content text-center">
                <h1>{props.name}</h1>
                <p>
                  <Link to={`${process.env.PUBLIC_URL}/`}>Home</Link>
                  <i className="bi bi-chevron-right" /> {props.page}
                  <i className="bi bi-chevron-right" /> {props.name}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Breadcrumb;
