import React from "react";
import { Link } from "react-router-dom";

function BlogComments() {
  return (
    <div>
      <div className="details-comment-wrap mt-100">
        <div className="comment-title">
          <h3>Comment</h3>
        </div>
        <div className="single-comment-content">
          <div className="comment-img">
            <img
              src={
                process.env.PUBLIC_URL +
                "/images/blog/blog-details-comment-1.png"
              }
              alt="blogDetailsIMFG"
            />
          </div>
          <div className="comment-content-wrap">
            <div className="comment-content-title">
              <ul>
                <li>
                  <div>
                    Brooklyn Simmons
                    <div className="blog-comment-meta">
                      <div className="blog-comment-meta-time">
                        <p>5 min ago</p>
                      </div>
                      <div className="blog-comment-meta-like">
                        <p>
                          <Link to={"#"}>
                            <i className="bx bx-heart" />
                          </Link>
                          500 Like
                        </p>
                      </div>
                    </div>
                  </div>
                  <Link to={"#"}>
                    <span>
                      <i className="bx bxs-share" />
                      Reply
                    </span>
                  </Link>
                </li>
              </ul>
            </div>
            <p>
              It is a long established fact that a reader will be distracted by
              the readable content of a page when looking at its layout. The
              point of using Lorem Ipsum is that it has a more-or-less normal
              distribution of letters, as opposed to using 'Content here
            </p>
          </div>
        </div>
        <div className="single-comment-content">
          <div className="comment-img">
            <img
              src={
                process.env.PUBLIC_URL +
                "/images/blog/blog-details-comment-2.png"
              }
              alt="blogDetailsIMFG"
            />
          </div>
          <div className="comment-content-wrap">
            <div className="comment-content-title">
              <ul>
                <li>
                  <div>
                    Cameron Willison
                    <div className="blog-comment-meta">
                      <div className="blog-comment-meta-time">
                        <p>7 min ago</p>
                      </div>
                      <div className="blog-comment-meta-like">
                        <p>
                          <Link to={"#"}>
                            <i className="bx bx-heart" />
                          </Link>
                          500 Like
                        </p>
                      </div>
                    </div>
                  </div>
                  <Link to={"#"}>
                    <span>
                      <i className="bx bxs-share" />
                      Reply
                    </span>
                  </Link>
                </li>
              </ul>
            </div>
            <p>
              It is a long established fact that a reader will be distracted by
              the readable content of a page when looking at its layout. The
              point of using Lorem Ipsum is that it has a more-or-less normal
              distribution of letters, as opposed to using 'Content here
            </p>
          </div>
        </div>
        <div className="single-comment-content">
          <div className="comment-img">
            <img
              src={
                process.env.PUBLIC_URL +
                "/images/blog/blog-details-comment-3.png"
              }
              alt="blogDetailsIMFG"
            />
          </div>
          <div className="comment-content-wrap">
            <div className="comment-content-title">
              <ul>
                <li>
                  <div>
                    Savan Simmons
                    <div className="blog-comment-meta">
                      <div className="blog-comment-meta-time">
                        <p>2 min ago</p>
                      </div>
                      <div className="blog-comment-meta-like">
                        <p>
                          <Link to={"#"}>
                            <i className="bx bx-heart" />
                          </Link>
                          500 Like
                        </p>
                      </div>
                    </div>
                  </div>
                  <Link to={"#"}>
                    <span>
                      <i className="bx bxs-share" />
                      Reply
                    </span>
                  </Link>
                </li>
              </ul>
            </div>
            <p>
              It is a long established fact that a reader will be distracted by
              the readable content of a page when looking at its layout. The
              point of using Lorem Ipsum is that it has a more-or-less normal
              distribution of letters, as opposed to using 'Content here
            </p>
          </div>
        </div>
      </div>
      <div className="details-form-wrap mt-100">
        <div className="comment-title">
          <h3>Leave A Comment</h3>
        </div>
        <div className="contact-form-wrap mt-50">
          <form
            onSubmit={(e) => e.preventDefault()}
            id="contact-form"
            action="mail.php"
            method="POST"
            className="contat-input"
          >
            <div className="row">
              <div className="col-xl-12 col-lg-12 col-sm-12 col-12">
                <input type="text" name="name" placeholder="Full Name" />
              </div>
              <div className="col-xl-12 col-lg-12 col-sm-12 col-12">
                <input type="email" name="email" placeholder="Your Email" />
              </div>
              <div className="col-xl-12 col-lg-12 col-sm-12 col-12">
                <textarea
                  name="message"
                  id="message"
                  cols={30}
                  rows={5}
                  placeholder="Write Comment Here"
                  defaultValue={""}
                />
              </div>
              <div className="col-xl-12 col-lg-12 col-sm-12 col-12">
                <label className="shop-check">
                  Save my name &amp; email in this browser for the next time I
                  comment.
                  <input type="checkbox" />
                  <span className="checkmark" />
                </label>
              </div>
              <div className="details-page-reply-btn-wrap mt-50">
                <button type="submit" className="common-btn design-5">
                  Submit
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default BlogComments;
