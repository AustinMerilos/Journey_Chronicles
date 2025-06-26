import React, { useEffect, useState } from "react";
import axios from "axios";
import MapComponent from "../utils/map";
import Timeline from "../utils/timeline";
import MapFilterSidebar from "../utils/mapFilters";

const filterOptions = [
  { label: "All", value: "all" },
  { label: "Europe", value: "europe" },
  { label: "Asia", value: "asia" },
];

type TripData = {
  id: number;
  title: string;
  date: string;
  description: string;
  link: string;
  lat: number;
  lng: number;
  region: string;
  image: string;
  url: string;
};

const extractCoordsFromContent = (content: string): [number, number] | null => {
  const match = content.match(/\[coords:\s*(-?\d+\.?\d*),\s*(-?\d+\.?\d*)\]/i);
  if (match) return [parseFloat(match[1]), parseFloat(match[2])];
  return null;
};

const MapPage: React.FC = () => {
  const [filter, setFilter] = useState("all");
  const [tripData, setTripData] = useState<TripData[]>([]);

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const response = await axios.get(
          "https://public-api.wordpress.com/rest/v1.1/sites/journeychronicles4.wordpress.com/posts"
        );

        const posts = response.data.posts;

        const mapped = posts
          .map((post: any): TripData | null => {
            const coords = extractCoordsFromContent(post.content);
            if (!coords) return null;

            const region = post.tags?.europe ? "europe" : "asia";

            return {
              id: post.ID,
              title: post.title,
              date: new Date(post.date).toLocaleDateString(),
              description: post.excerpt || "",
              link: post.URL,
              lat: coords[0],
              lng: coords[1],
              region,
              image: post.featured_image || "",
              url: post.URL,
            };
          })
          .filter(Boolean) as TripData[];

        setTripData(mapped);
      } catch (err) {
        console.error("Error fetching posts:", err);
      }
    };

    fetchPosts();
  }, []);

  const filteredTrips =
    filter === "all"
      ? tripData
      : tripData.filter((trip) => trip.region === filter);

  return (
    <div style={{ display: "flex", gap: "2rem", position: "relative" }}>
      <MapFilterSidebar
        options={filterOptions}
        selected={filter}
        onChange={(val) => setFilter(val)}
      />
      <div style={{ flex: 1 }}>
        <h1>Journey Map</h1>
        <MapComponent locations={filteredTrips} />
        <Timeline items={filteredTrips} />
      </div>
    </div>
  );
};

export default MapPage;
