import React from "react";

function SubscribeArea() {
  return (
    <>
      <div className="subscribe-area pt-100">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-xl-8 col-lg-10 col-md-12 col-sm-12 col-12">
              <div className="subscribe-content text-center">
                <h1>Get It In A Unique Rare Digital Art</h1>
                <p>
                  Let’s start looking for something unique and limited art. Have
                  it the only one in the world.
                </p>
                <form
                  onSubmit={(e) => e.preventDefault()}
                  className="subscribe-form mt-50 wow animate flipInX"
                  data-wow-delay="200ms"
                  data-wow-duration="1500ms"
                >
                  <input type="text" placeholder="Enter your email here" />
                  <button>Subscribe</button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default SubscribeArea;
