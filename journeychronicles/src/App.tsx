import React from "react";
import Layout from "./components/Layout";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "leaflet/dist/leaflet.css";

import AboutPage from "./components/AboutPage";
import HompePage from "./components/HomePage";
import DestinationsPage from "./components/DestinationsPage";
import ContactPage from "./components/ContactPage";
import MapPage from "./components/MapPage";
import TravelTipsPage from "./components/TravelTips";
import ScrollToTop from "./utils/scrollToTop";
import PostPage from "./components/PostPage";

// inside <Routes>

function App() {
  return (
    <Router>
      <Layout>
        <ScrollToTop />
        <Routes>
          <Route path="/post/:id" element={<PostPage />} />;
          <Route path="/home" element={<HompePage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/destinations" element={<DestinationsPage />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="/map" element={<MapPage />} />
          <Route path="/tips" element={<TravelTipsPage />} />
        </Routes>
      </Layout>
    </Router>
  );
}

export default App;
