import React, { lazy } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
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
      <Router basename="/Charles-Coldwell-Portfolio">
        <HelmetMeta />
        <Routes>
          <Route path="/" element={<Home />} />
          {/* <Route path="/resume" element={<Resume />} /> */}
          <Route path="*" element={<PageNotFound />} />
        </Routes>
      </Router>
    </TheThemeProvider>
  );
};
