import React, { useEffect } from "react";
import Layout from "./components/Layout";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  useNavigate,
  useLocation,
} from "react-router-dom";
import "leaflet/dist/leaflet.css";

import AboutPage from "./components/AboutPage";
import HomePage from "./components/HomePage";
import DestinationsPage from "./components/DestinationsPage";
import ContactPage from "./components/ContactPage";
import MapPage from "./components/MapPage";
import TravelTipsPage from "./components/TravelTips";
import ScrollToTop from "./utils/scrollToTop";
import PostPage from "./components/PostPage";

function RedirectHandler() {
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    const params = new URLSearchParams(location.search);
    const redirect = params.get("redirect");

    if (redirect) {
      navigate(redirect, { replace: true });
    }
  }, [location, navigate]);

  return null;
}

function App() {
  return (
    <Router basename="/Journey_Chronicles">
      <Layout>
        <ScrollToTop />
        <RedirectHandler />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/post/:id" element={<PostPage />} />
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
