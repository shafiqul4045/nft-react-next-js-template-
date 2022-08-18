import React from "react";
import { Link } from "react-router-dom";

function LogInWrapper() {
  const scrollTop = () => window.scrollTo({ top: 0, behavior: "smooth" });
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
                        <p>Welcome Back</p>
                        <h1>Log Into your account</h1>
                      </div>
                      <form
                        onSubmit={(e) => e.preventDefault()}
                        action="#"
                        className="contat-input identify-form-input mt-50"
                      >
                        <div className="row">
                          <div className="col-xl-12 col-lg-12 col-sm-12 col-12">
                            <label>E-mail Or User Name</label>
                            <input
                              type="email"
                              name="email"
                              required
                              placeholder="Please type your Email"
                            />
                          </div>
                          <div className="col-xl-12 col-lg-12 col-sm-12 col-12">
                            <label>Password</label>
                            <input
                              type="password"
                              name="pwd"
                              required
                              placeholder="*****"
                            />
                          </div>
                          <div className="identify-button">
                            <button
                              type="submit"
                              className="common-btn design-6"
                            >
                              Log In
                            </button>
                          </div>
                          <div className="col-xl-12 col-lg-12 col-sm-12 col-12">
                            <div className="check-box-wrap">
                              <label className="shop-check">
                                Remember Password.
                                <input type="checkbox" />
                                <span className="checkmark" />
                              </label>
                              <div className="remember-password">
                                <Link
                                  onClick={scrollTop}
                                  to={`${process.env.PUBLIC_URL}/forget-passsword`}
                                >
                                  Forget Password ?
                                </Link>
                              </div>
                            </div>
                          </div>
                        </div>
                      </form>
                      <div className="sign-up-here-wrap text-center">
                        <h6>
                          Not registered yet?{" "}
                          <>
                            {" "}
                            <Link
                              to={`${process.env.PUBLIC_URL}/sign-up`}
                              onClick={scrollTop}
                            >
                              SIGN UP
                            </Link>
                          </>
                        </h6>
                      </div>
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

export default LogInWrapper;
