import React, { Fragment } from "react";
import "./style/App.scss";
import { Route, Switch, useLocation, Redirect } from "react-router-dom";
import NavBar from "./components/NavBar";
import About from "./components/About";
import Portfolio from "./components/Portfolio";
import Contact from "./components/Contact";
import Home from "./components/Home";
import NotFound from "./components/NotFound";
import { IconContext } from "react-icons";
import BDThesis from "./components/BDThesis";
import { AnimatePresence, motion } from "framer-motion";

const App = () => {
  const location = useLocation();
  return (
    <Fragment>
      <IconContext.Provider value={{ color: "black", size: "2rem" }}>
        <NavBar />
        <main>
          <AnimatePresence initial={false} exitBeforeEnter>
            <Switch location={location} key={location.key}>
              <Route exact path="/" component={Home} />
              <Route path="/about" component={About} />
              <Route path="/portfolio" component={Portfolio} />
              <Route path="/contact" component={Contact} />
              <Route path="/not-found" component={NotFound} />
              <Route path="/pdf/BD_Thesis_Enzo_Zerega" component={BDThesis} />
              <motion.Fragment exit="undefined">
                <Redirect to="/not-found" />
              </motion.Fragment>
            </Switch>
          </AnimatePresence>
        </main>
      </IconContext.Provider>
    </Fragment>
  );
};

export default App;
