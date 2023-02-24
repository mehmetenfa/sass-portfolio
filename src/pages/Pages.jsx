import React from "react";
import { BrowserRouter as Route, Router, Switch } from "react-router-dom";
import { Home } from "../components/home/Home";

export const Pages = () => {
  return (
    <>
      <div className="main-div">
        <div className="side">
          <main>
            <Router>
              <Switch>
                <Route exact path="/" component={Home} />
              </Switch>
            </Router>
          </main>
        </div>
      </div>
    </>
  );
};
