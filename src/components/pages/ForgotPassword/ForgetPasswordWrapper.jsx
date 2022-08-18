import React from "react";
import { Link } from "react-router-dom";

function ForgetPasswordWrapper() {
  return (
    <>
      <div className="forget-passsword-wrap mt-100 ">
        <div className="container">
          <div className="row">
            <div className="col-xl-5 col-lg-6 col-md-12 col-sm-12 col-12">
              <div className="forget-passsword-img">
                <img
                  className="w-100"
                  src={
                    process.env.PUBLIC_URL + "/images/forget-passsword-img.png"
                  }
                  alt="PasswordIMG"
                />
              </div>
            </div>
            <div className="col-xl-7 col-lg-6 col-md-12 col-sm-12 col-12 both-small-50">
              <div className="identify-wrap d-flex h-100 align-items-center">
                <div className="row justify-content-center">
                  <div className="col-xl-10 col-lg-12 col-md-12 col-sm-12 col-12">
                    <div className="identify-form-box-content">
                      <div className="identify-form-title text-center">
                        <h1>Reset Password</h1>
                      </div>
                      <form
                        onSubmit={(e) => {
                          e.preventDefault();
                        }}
                        action="#"
                        className="contat-input identify-form-input mt-50"
                      >
                        <div className="row">
                          <div className="col-xl-12 col-lg-12 col-sm-12 col-12">
                            <input
                              type="email"
                              name="pwd"
                              required
                              placeholder="Email Address"
                            />
                          </div>
                          <div className="col-xl-12 col-lg-12 col-sm-12 col-12">
                            <div className="return-login-wrap">
                              <ul>
                                <li>
                                  <Link
                                    onClick={() => {
                                      window.scrollTo({
                                        top: 0,
                                        behavior: "smooth",
                                      });
                                    }}
                                    to={`${process.env.PUBLIC_URL}/login`}
                                  >
                                    <span>Login</span>
                                  </Link>
                                  <Link
                                    onClick={() => {
                                      window.scrollTo({
                                        top: 0,
                                        behavior: "smooth",
                                      });
                                    }}
                                    to={`${process.env.PUBLIC_URL}/sign-up`}
                                  >
                                    <span>Sign Up</span>
                                  </Link>
                                </li>
                              </ul>
                            </div>
                          </div>
                          <div className="identify-button">
                            <button
                              type="submit"
                              className="common-btn design-6"
                            >
                              Reset Now
                            </button>
                          </div>
                        </div>
                      </form>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default ForgetPasswordWrapper;
