import React from "react";
import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./components/pages/Home";
import AboutUs from "./components/pages/AboutUs";
import { Listings } from "./components/pages/Listings";
import Apply from "./components/pages/Apply";
import Footer from "./components/Footer";
import { Admin } from "./components/pages/Admin";
import ScrollToTop from "./components/ScrollToTop";
import { Login } from "./components/pages/Login";
import { ProtectedRoute } from "./components/pages/Protected.route";
function App() {
  return (
    <>
      <Router>
        <ScrollToTop />
        <Navbar />
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/listings" component={Listings} />
          <Route path="/about-us" component={AboutUs} />
          <Route path="/apply" component={Apply} />
          <Route path="/login" component={Login} />
          <ProtectedRoute exact path="/admin" component={Admin} />
          {/* <Route path="/admin" component={Admin} /> */}
          <Route path="*" component={() => "404 NOT FOUND"} />
        </Switch>
        <Footer />
      </Router>
    </>
  );
}

export default App;
