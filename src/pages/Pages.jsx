import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { Home } from "../components/home/Home";
import { SideContent } from "../components/side/SideContent";

export const Pages = () => {
  return (
    <>
      <div className="main-div">
        <div className="side">
            <SideContent />
        </div>
        <main>
          <Router>
            <Switch>
              <Route exact path="/" component={Home} />
            </Switch>
          </Router>
        </main>
      </div>
    </>
  );
};
