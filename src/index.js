import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

// all css file import
import "./index.css"

// import all components
import Layout from './components/App';
import SecoundLayout from './components/layout/Main-Two.jsx';
import MainLayout from './components/layout/MainLayout';
import Author from './components/pages/Author/Author';
import Blog from './components/pages/community/Blog/Blog';
import BlogDetails from './components/pages/community/BlogDetails/BlogDetails';
import Contact from './components/pages/contact/Contact';
import Error from './components/pages/Error/Error';
import Auction from './components/pages/explor/auction/Auction';
import AuctionDetails from './components/pages/explor/AuctionDetails/AuctionDetails';
import DiscoverAuction from './components/pages/explor/DiscoverAuction/DiscoverAuction';
import ForgetPasword from './components/pages/ForgotPassword/ForgetPasword';
import Login from './components/pages/LogIn/Login';
import Signup from './components/pages/signup/Signup';
import AuthorDetails from './components/pages/authorDetails/AuthorDetails';

//Default Warniing Error Hide
console.log = console.warn = console.error = () => {};

/*
=>version : 0.1
=>Event : Rendering al content to web
=>Action: define all routes and page
@return HTML
*/

 

function Root() {
  return (
    <>
      <BrowserRouter basename="/">
      <Switch>
        
        <Route exact path="/" component={MainLayout}/>
        <Route exact path="/homepage-2" component={SecoundLayout} />
        <Layout>

        <Route exact path={`${process.env.PUBLIC_URL}/auction`} component={Auction} />
        <Route exact path={`${process.env.PUBLIC_URL}/discover-auction`} component={DiscoverAuction} />
        <Route exact path={`${process.env.PUBLIC_URL}/auction-details`} component={AuctionDetails} />

        <Route exact path={`${process.env.PUBLIC_URL}/blog`} component={Blog} />
        <Route exact path={`${process.env.PUBLIC_URL}/blog-details`} component={BlogDetails} />

        <Route exact path={`${process.env.PUBLIC_URL}/author`} component={Author} />
        <Route exact path={`${process.env.PUBLIC_URL}/author-details`} component={AuthorDetails} />
        <Route exact path={`${process.env.PUBLIC_URL}/login`} component={Login} />
        <Route exact path={`${process.env.PUBLIC_URL}/sign-up`} component={Signup} />
        <Route exact path={`${process.env.PUBLIC_URL}/forget-passsword`} component={ForgetPasword} />
        <Route exact path={`${process.env.PUBLIC_URL}/error`} component={Error} />

        <Route exact path={`${process.env.PUBLIC_URL}/contact`} component={Contact} />
        </Layout>
      </Switch>
      </BrowserRouter>
      </>
  )
}

export default Root
ReactDOM.render(
  <React.StrictMode>
    <Root />
  </React.StrictMode> ,document.getElementById('root')
);

