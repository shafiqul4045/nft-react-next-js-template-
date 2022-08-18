import React from "react";
import BlogComments from "./BlogComments";
import CatagoryWidget from "./CatagoryWidget";
import RecentBlogWidget from "./RecentBlogWidget";
import SingleCommentDetails from "./SingleCommentDetails";
import TagWidget from "./TagWidget";

function BlogDetailsWrap() {
  return (
    <>
      <div className="blog-details-area mt-100">
        <div className="container">
          <div className="row">
            <div className="col-xl-8 col-lg-8 col-md-12 col-sm-12 col-12">
              <SingleCommentDetails />
              <BlogComments />
            </div>
            <div className="col-xl-4 col-lg-4 col-md-12 col-sm-12 col-12 both-small-50">
              <div className="blog-sidebar-wrap">
                <CatagoryWidget />
                <TagWidget />
                <RecentBlogWidget />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default BlogDetailsWrap;
