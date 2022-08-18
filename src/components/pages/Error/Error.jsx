import React from "react";
import { Link } from "react-router-dom";

function Error() {
  return (
    <>
      <div className="error-area pt-100">
        <div className="container">
          <div className="row">
            <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12">
              <div className="error-wrap text-center">
                <img
                  className="w-100"
                  src={process.env.PUBLIC_URL + "/images/error-img.png"}
                  alt="images"
                />
                <div className="error-content text-center">
                  <Link
                    className="common-btn design-5"
                    onClick={() =>
                      window.scrollTo({ top: 0, behavior: "auto" })
                    }
                    to={`${process.env.PUBLIC_URL}/`}
                  >
                    Back To Home
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Error;
