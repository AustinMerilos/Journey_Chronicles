import React from "react";
import Layout from "./components/Header"; // or Layout
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import AboutPage from "./components/AboutPage";
import HompePage from "./components/HomePage";

function App() {
  return (
    <Router>
      <Layout>
        <Routes>
          <Route path="/" element={<HompePage />} />
          <Route path="/about" element={<AboutPage />} />
        </Routes>
      </Layout>
    </Router>
  );
}

export default App;
