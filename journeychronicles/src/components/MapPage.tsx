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
  duration?: string[];
  tripType?: string[];
  season?: string[];
  image: string;
  url: string;
  content: string;
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
  return "unknown";
};

const getTypeFromTags = (tags: any): string => {
  if (tags?.city) return "city";
  if (tags?.beach) return "beach";
  if (tags?.park) return "park";
  return "other";
};

const getOtherFromTags = (tags: any, key: string): string[] => {
  const categoryValues: Record<string, string[]> = {
    season: ["spring", "summer", "fall", "winter"],
    duration: ["weekend", "week", "extended"],
    tripType: ["solo", "couples", "group"],
  };

  const values = categoryValues[key] || [];

  return values.filter((val) => tags?.[val]) || [];
};

const filterGroups = [
  {
    title: "Region",
    name: "region",
    options: [
      { label: "Europe", value: "europe" },
      { label: "Asia", value: "asia" },
      { label: "North America", value: "north-america" },
    ],
  },
  {
    title: "Location Type",
    name: "type",
    options: [
      { label: "City", value: "city" },
      { label: "Beach", value: "beach" },
      { label: "Park", value: "park" },
    ],
  },
  {
    title: "Season",
    name: "season",
    options: [
      { label: "Spring", value: "spring" },
      { label: "Summer", value: "summer" },
      { label: "Fall", value: "fall" },
      { label: "Winter", value: "winter" },
    ],
  },
  {
    title: "Duration",
    name: "duration",
    options: [
      { label: "Weekend", value: "weekend" },
      { label: "1 Week", value: "week" },
      { label: "2+ Weeks", value: "extended" },
    ],
  },
  {
    title: "Trip Type",
    name: "tripType",
    options: [
      { label: "Solo", value: "solo" },
      { label: "Couples", value: "couples" },
      { label: "Group", value: "group" },
    ],
  },
];

const MapPage: React.FC = () => {
  const [filters, setFilters] = useState<Record<string, string[]>>({
    region: [],
    type: [],
    season: [],
    duration: [],
    tripType: [],
  });

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

            const tags = post.tags || {};

            return {
              id: post.ID,
              title: post.title,
              date: new Date(post.date).toLocaleDateString(),
              description: post.excerpt || "",
              link: post.URL,
              lat: coords[0],
              lng: coords[1],
              region: getRegionFromTags(tags),
              type: getTypeFromTags(tags),
              season: getOtherFromTags(tags, "season"),
              duration: getOtherFromTags(tags, "duration"),
              tripType: getOtherFromTags(tags, "tripType"),
              image: post.featured_image || "",
              url: post.URL,
              content: post.content,
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

  const handleFilterChange = (group: string, value: string) => {
    setFilters((prev) => {
      const alreadySelected = prev[group].includes(value);
      return {
        ...prev,
        [group]: alreadySelected
          ? prev[group].filter((v) => v !== value)
          : [...prev[group], value],
      };
    });
  };

  const filteredTrips = tripData.filter((trip) =>
    Object.entries(filters).every(([key, selectedValues]) => {
      if (selectedValues.length === 0) return true;

      const tripValues = (trip as any)[key];

      if (Array.isArray(tripValues)) {
        return selectedValues.some((val) => tripValues.includes(val));
      }

      return selectedValues.includes(tripValues);
    })
  );

  return (
    <div style={{ display: "flex", flexDirection: "column", gap: "2rem" }}>
      <h1>Journey Map</h1>
      <MapFilterSidebar
        filters={filterGroups}
        selectedFilters={filters}
        onChange={handleFilterChange}
      />

      <div>
        <MapComponent locations={filteredTrips} />
        <Timeline items={filteredTrips} />
      </div>
    </div>
  );
};

export default MapPage;
