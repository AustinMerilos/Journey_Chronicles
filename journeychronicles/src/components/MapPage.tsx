import React, { useEffect, useState } from "react";
import axios from "axios";
import MapComponent from "../utils/map";
import Timeline from "../utils/timeline";
import MapFilterSidebar from "../utils/mapFilters";

type TripData = {
  id: number;
  title: string;
  date: string;
  description: string;
  link: string;
  lat: number;
  lng: number;
  region: string;
  type: string;
  image: string;
  url: string;
};

const extractCoordsFromContent = (content: string): [number, number] | null => {
  const match = content.match(/\[coords:\s*(-?\d+\.?\d*),\s*(-?\d+\.?\d*)\]/i);
  if (match) return [parseFloat(match[1]), parseFloat(match[2])];
  return null;
};

const getRegionFromTags = (tags: any): string => {
  if (tags?.europe) return "europe";
  if (tags?.asia) return "asia";
  if (tags?.["north-america"]) return "north-america";
  if (tags?.africa) return "africa";
  return "unknown";
};

const getTypeFromTags = (tags: any): string => {
  if (tags?.city) return "city";
  if (tags?.beach) return "beach";
  if (tags?.park) return "park";
  return "other";
};

const regionOptions = [
  { label: "All Regions", value: "all" },
  { label: "Europe", value: "europe" },
  { label: "Asia", value: "asia" },
  { label: "North America", value: "north-america" },
  { label: "Africa", value: "africa" },
];

const typeOptions = [
  { label: "All Types", value: "all" },
  { label: "City", value: "city" },
  { label: "Beach", value: "beach" },
  { label: "Park", value: "park" },
];

const MapPage: React.FC = () => {
  const [regionFilter, setRegionFilter] = useState("all");
  const [typeFilter, setTypeFilter] = useState("all");
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

            const region = getRegionFromTags(post.tags);
            const type = getTypeFromTags(post.tags);

            return {
              id: post.ID,
              title: post.title,
              date: new Date(post.date).toLocaleDateString(),
              description: post.excerpt || "",
              link: post.URL,
              lat: coords[0],
              lng: coords[1],
              region,
              type,
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

  const filteredTrips = tripData.filter((trip) => {
    const regionMatch = regionFilter === "all" || trip.region === regionFilter;
    const typeMatch = typeFilter === "all" || trip.type === typeFilter;
    return regionMatch && typeMatch;
  });

  return (
    <div style={{ display: "flex", gap: "2rem", position: "relative" }}>
      <div style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
        <MapFilterSidebar
          title="Filter by Region"
          options={regionOptions}
          selected={regionFilter}
          onChange={setRegionFilter}
        />
        <MapFilterSidebar
          title="Filter by Type"
          options={typeOptions}
          selected={typeFilter}
          onChange={setTypeFilter}
        />
      </div>

      <div style={{ flex: 1 }}>
        <h1>Journey Map</h1>
        <MapComponent locations={filteredTrips} />
        <Timeline items={filteredTrips} />
      </div>
    </div>
  );
};

export default MapPage;
