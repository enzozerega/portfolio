import React, { Fragment } from "react";
import "./style/App.scss";
import { Route, Switch, Redirect, useLocation } from "react-router-dom";
import { AnimatePresence } from "framer-motion";
import NavBar from "./components/NavBar";
import About from "./components/About";
import Education from "./components/Education";
import Skills from "./components/Skills";
import Portfolio from "./components/Portfolio";
import Contact from "./components/Contact";
import Home from "./components/Home";
import NotFound from "./components/NotFound";
import Footer from "./components/Footer";
import { IconContext } from "react-icons";

const App = () => {
  const location = useLocation();
  return (
    <Fragment>
      <IconContext.Provider value={{ color: "red", size: "2rem" }}>
        <NavBar />
        <main>
          <AnimatePresence exitBeforeEnter>
            <Switch location={location} key={location.pathname}>
              <Route path="/about" component={About} />
              <Route path="/education" component={Education} />
              <Route path="/skills" component={Skills} />
              <Route path="/portfolio" component={Portfolio} />
              <Route path="/contact" component={Contact} />
              <Route path="/not-found" exact component={NotFound} />
              <Route path="/" exact component={Home} />
              <Redirect to="not-found" />
            </Switch>
          </AnimatePresence>
        </main>
        <Footer />
      </IconContext.Provider>
    </Fragment>
  );
};

export default App;
