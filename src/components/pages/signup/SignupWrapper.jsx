import React from "react";
import { Link } from "react-router-dom";
function SignupWrapper() {
  return (
    <>
      <div className="login-wrap mt-100">
        <div className="container">
          <div className="row">
            <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12">
              <div className="identify-wrap">
                <div className="row justify-content-center">
                  <div className="col-xl-6 col-lg-8 col-md-12 col-sm-12 col-12">
                    <div className="identify-form-box-content">
                      <div className="identify-form-title text-center">
                        <p>New Member?</p>
                        <h1>Sign Up Here</h1>
                      </div>
                      <div className="identify-connect text-center">
                        <h5>Connect With</h5>
                        <ul>
                          <li className="color-1">
                            <a
                              rel="noopener noreferrer"
                              href="https://www.google.com/"
                              target="_blank"
                            >
                              <i className="bx bxl-google-plus" />
                            </a>
                          </li>
                          <li className="color-2">
                            <a
                              rel="noopener noreferrer"
                              href="https://www.facebook.com/"
                              target="_blank"
                            >
                              <i className="bx bxl-facebook" />
                            </a>
                          </li>
                          <li className="color-3">
                            <a
                              rel="noopener noreferrer"
                              href="https://www.twitter.com/"
                              target="_blank"
                            >
                              <i className="bx bxl-twitter" />
                            </a>
                          </li>
                        </ul>
                        <p>Or</p>
                      </div>
                      <form
                        onSubmit={(e) => e.preventDefault()}
                        action="#"
                        className="contat-input identify-form-input mt-50"
                      >
                        <div className="row">
                          <div className="col-xl-6 col-lg-6 col-md-6 col-sm-12 col-12">
                            <label>First Name</label>
                            <input
                              type="text"
                              name="name"
                              placeholder="First Name"
                              required
                            />
                          </div>
                          <div className="col-xl-6 col-lg-6 col-md-6 col-sm-12 col-12">
                            <label>Last Name</label>
                            <input
                              type="text"
                              name="name"
                              placeholder="Last Name"
                              required
                            />
                          </div>
                          <div className="col-xl-12 col-lg-12 col-sm-12 col-12">
                            <label>Email Address</label>
                            <input
                              type="email"
                              name="email"
                              placeholder="Email"
                              required
                            />
                          </div>
                          <div className="col-xl-12 col-lg-12 col-sm-12 col-12">
                            <label>Date Of Birth</label>
                            <div className="row">
                              <div className="col-xl-4 col-lg-4 col-md-6 col-sm-12 col-12">
                                <div className="sign-up-select-wrap">
                                  <div className="custom-select filter-options">
                                    <input
                                      type="number"
                                      min={1}
                                      placeholder="Date"
                                    />
                                  </div>
                                </div>
                              </div>
                              <div className="col-xl-4 col-lg-4 col-md-6 col-sm-12 col-12">
                                <div className="sign-up-select-wrap">
                                  <div className="">
                                    <input
                                      type="number"
                                      min={1}
                                      max={12}
                                      placeholder="Month"
                                    />
                                  </div>
                                </div>
                              </div>
                              <div className="col-xl-4 col-lg-4 col-md-6 col-sm-12 col-12">
                                <div className="sign-up-select-wrap">
                                  <div className="custom-select filter-options">
                                    <input
                                      type="number"
                                      placeholder="Year"
                                      min={1980}
                                    />
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div className="col-xl-12 col-lg-12 col-sm-12 col-12">
                            <label>Country</label>
                            <input
                              type="text"
                              name="country"
                              required
                              placeholder="Country"
                            />
                          </div>
                          <div className="col-xl-12 col-lg-12 col-sm-12 col-12">
                            <label>Phone Number</label>
                            <input
                              type="tel"
                              required
                              placeholder="Phone"
                              name="phone"
                            />
                          </div>
                          <div className="col-xl-12 col-lg-12 col-sm-12 col-12">
                            <label>Password</label>
                            <input
                              type="password"
                              name="pwd"
                              required
                              placeholder="password"
                            />
                          </div>
                          <div className="col-xl-12 col-lg-12 col-sm-12 col-12">
                            <label className="shop-check">
                              I Agree With NAFLAB
                              <Link to={"#"}>Terms &amp; Condition</Link>
                              <input type="checkbox" />
                              <span className="checkmark" />
                            </label>
                          </div>
                          <div className="identify-button mt-50">
                            <button
                              type="submit"
                              className="common-btn design-6"
                            >
                              Create My Account
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

export default SignupWrapper;
