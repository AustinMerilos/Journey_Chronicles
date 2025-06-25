import React, { useState } from "react";
import MapComponent from "../utils/map";
import Timeline from "../utils/timeline";
import MapFilterSidebar from "../utils/mapFilters";

const filterOptions = [
  { label: "All", value: "all" },
  { label: "Europe", value: "europe" },
  { label: "Asia", value: "asia" },
  { label: "North America", value: "north america" },
];

const MapPage: React.FC = () => {
  const [filter, setFilter] = useState("all");

  const tripData = [
    {
      id: 1,
      title: "Amalfi Coast, Italy",
      lat: 40.6281,
      lng: 14.4849,
      image: "",
      url: "",
      date: "June 2025",
      description:
        "Winding coastlines, seafood pasta, and sunsets over Positano.",
      region: "europe",
    },
    {
      id: 2,
      title: "Tokyo, Japan",
      lat: 35.6762,
      lng: 139.6503,
      image: "",
      url: "",
      date: "May 2025",
      description: "Cherry blossoms, sushi trains, and Shibuya crossing.",
      region: "asia",
    },
    {
      id: 3,
      title: "NewYork, U.S",
      lat: 55.6762,
      lng: 0.6503,
      image: "",
      url: "",
      date: "May 2025",
      description: "Cherry blossoms, sushi trains, and Shibuya crossing.",
      region: "north america",
    },
  ];

  const filteredLocations = tripData.filter(
    (trip) => filter === "all" || trip.region === filter
  );

  return (
    <div style={{ display: "flex", gap: "2rem", position: "relative" }}>
      <div style={{ flex: 1 }}>
        <h1>Journey Map</h1>
        <MapComponent locations={filteredLocations} />
        <MapFilterSidebar
          options={filterOptions}
          selected={filter}
          onChange={(val) => setFilter(val)}
        />
        <Timeline items={tripData} />
      </div>
    </div>
  );
};

export default MapPage;
