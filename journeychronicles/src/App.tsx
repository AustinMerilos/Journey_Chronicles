import React from "react";
import Layout from "./components/Layout";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import AboutPage from "./components/AboutPage";
import HompePage from "./components/HomePage";
import DestinationsPage from "./components/DestinationsPage";

function App() {
  return (
    <Router>
      <Layout>
        <Routes>
          <Route path="/home" element={<HompePage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/destinations" element={<DestinationsPage />} />
        </Routes>
      </Layout>
    </Router>
  );
}

export default App;
