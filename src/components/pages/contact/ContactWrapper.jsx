import React from "react";

function ContactWrapper() {
  return (
    <>
      <div className="contact-area mt-100 ">
        <div className="container">
          <div className="row">
            <div className="col-xl-6 col-lg-6 col-md-12 col-sm-12 col-12">
              <div className="contact-content-wrap d-flex h-100 flex-column justify-content-between">
                <div className="location-wrap">
                  <div className="contact-address-wrap">
                    <div className="contact-icon">
                      <i className="bx bxs-phone"></i>
                    </div>
                    <div className="contact-address-content">
                      <span>
                        <a
                          rel="noopener noreferrer"
                          href="tel:+123 456 789 012"
                        >
                          +123 456 789 012
                        </a>
                        <br />
                        <a
                          rel="noopener noreferrer"
                          href="tel:+123 456 789 012"
                        >
                          +123 456 789 012
                        </a>
                      </span>
                    </div>
                  </div>
                  <div className="contact-address-wrap">
                    <div className="contact-icon">
                      <i className="fas fa-globe"> </i>
                    </div>
                    <div className="contact-address-content">
                      <span>
                        <a href="mailto:info@example.com">info@example.com</a>
                        <br />
                        <a href="mailto:support@example.com">
                          support@example.com
                        </a>
                      </span>
                    </div>
                  </div>
                  <div className="contact-address-wrap">
                    <div className="contact-icon">
                      <i className="fas fa-map-marker-alt"> </i>
                    </div>
                    <div className="contact-address-content">
                      <span>
                        Digital Agency Network 20 <br /> Eastbourne Terrace,
                        London
                      </span>
                    </div>
                  </div>
                </div>
                <div className="location-img">
                  <img src={process.env.PUBLIC_URL + "/images/contact-img.png"} alt="images" />
                </div>
              </div>
            </div>
            <div className="col-xl-6 col-lg-6 col-md-12 col-sm-12 col-12 both-small-50">
              <div className="message-wrap">
                <div className="message-form-content">
                  <h1>Drop Us a Message</h1>
                  <p>
                    Feel free to contact us anytime. We’re available here for
                    you.
                  </p>
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
                        <input
                          required
                          type="text"
                          name="name"
                          placeholder="Full Name"
                        />
                      </div>
                      <div className="col-xl-12 col-lg-12 col-sm-12 col-12">
                        <input
                          required
                          type="email"
                          name="email"
                          placeholder="Your Email"
                        />
                      </div>
                      <div className="col-xl-12 col-lg-12 col-sm-12 col-12">
                        <input
                          required
                          type="text"
                          name="subject"
                          placeholder="Subject"
                        />
                      </div>
                      <div className="col-xl-12 col-lg-12 col-sm-12 col-12">
                        <textarea
                          required
                          name="message"
                          id="message"
                          cols={30}
                          rows={4}
                          placeholder="Message"
                          defaultValue={""}
                        />
                      </div>
                      <div className="details-page-reply-btn-wrap">
                        <button type="submit" className="common-btn design-5">
                          Send Message
                        </button>
                      </div>
                      <p className="form-message" />
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default ContactWrapper;
