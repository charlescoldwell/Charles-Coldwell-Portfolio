import React, { lazy } from "react";

import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { HelmetMeta } from "./HelmetMeta";
import { TheThemeProvider } from "../components/theme/ThemeProvider";
import { CssBaseline } from "@mui/material";

import { Home } from "../pages/Home";

// const Resume = lazy(() => import("../pages/Resume"));
const PageNotFound = lazy(() => import("../pages/PageNotFound"));

export const App = () => {

    return (
      <TheThemeProvider>
        <CssBaseline />
        <Router>
          <HelmetMeta />
          <Switch>
            <Router basename="/Charles-Coldwell-Portfolio">
              <Route path="/" exact component={Home} />
              {/* <Route path="/resume" component={Resume} /> */}
              <Route path="*" component={PageNotFound} />
            </Router>
          </Switch>
        </Router>
      </TheThemeProvider>
    );
};
