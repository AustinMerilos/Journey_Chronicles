import React from "react";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import L from "leaflet";

delete (L.Icon.Default.prototype as any)._getIconUrl;

L.Icon.Default.mergeOptions({
  iconRetinaUrl: require("leaflet/dist/images/marker-icon-2x.png"),
  iconUrl: require("leaflet/dist/images/marker-icon.png"),
  shadowUrl: require("leaflet/dist/images/marker-shadow.png"),
});

const defaultPosition: [number, number] = [40.7128, -74.006];
const locations = [
  {
    id: 1,
    title: "New York",
    lat: 40.7128,
    lng: -74.006,
    image: "",
    url: "",
  },
  {
    id: 2,
    title: "Paris",
    lat: 48.8566,
    lng: 2.3522,
    image: "",
    url: "",
  },
];

const MapComponent: React.FC = () => {
  return (
    <MapContainer
      center={defaultPosition}
      zoom={5}
      scrollWheelZoom={true}
      style={{ height: "600px", width: "100%", borderRadius: "1rem" }}
    >
      <TileLayer
        attribution='&copy; <a href="https://osm.org/copyright">OpenStreetMap</a>'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />

      {locations.map((loc) => (
        <Marker key={loc.id} position={[loc.lat, loc.lng]}>
          <Popup>
            <div style={{ maxWidth: "200px" }}>
              <img
                src={loc.image}
                alt={loc.title}
                style={{
                  width: "100%",
                  borderRadius: "8px",
                  marginBottom: "0.5rem",
                }}
              />
              <h3>{loc.title}</h3>
              <a href={loc.url} target="_blank" rel="noopener noreferrer">
                Check Out
              </a>
            </div>
          </Popup>
        </Marker>
      ))}
    </MapContainer>
  );
};

export default MapComponent;
