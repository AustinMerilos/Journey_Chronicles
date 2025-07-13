import React from "react";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import L from "leaflet";
import { Link } from "react-router-dom";

delete (L.Icon.Default.prototype as any)._getIconUrl;

L.Icon.Default.mergeOptions({
  iconRetinaUrl: require("leaflet/dist/images/marker-icon-2x.png"),
  iconUrl: require("leaflet/dist/images/marker-icon.png"),
  shadowUrl: require("leaflet/dist/images/marker-shadow.png"),
});
interface Location {
  id: number;
  title: string;
  lat: number;
  lng: number;
  image: string;
  url: string;
  region: string;
  duration?: string | string[];
  tripType?: string | string[];
  type?: string;
  season?: string | string[];
}

interface MapComponentProps {
  locations: Location[];
}

const defaultPosition: [number, number] = [40.7128, -74.006];

const MapComponent: React.FC<MapComponentProps> = ({ locations }) => {
  return (
    <MapContainer
      center={defaultPosition}
      zoom={3}
      minZoom={2}
      scrollWheelZoom={true}
      style={{ height: "600px", width: "100%", borderRadius: "1rem" }}
      worldCopyJump={false}
      maxBounds={[
        [-85, -180],
        [85, 180],
      ]}
      maxBoundsViscosity={1.0}
    >
      <TileLayer
        attribution='&copy; <a href="https://carto.com/">CARTO</a>'
        url="https://{s}.basemaps.cartocdn.com/light_all/{z}/{x}/{y}{r}.png"
        noWrap={true}
      />

      {locations.map((loc) => (
        <Marker key={loc.id} position={[loc.lat, loc.lng]}>
          <Popup>
            <div style={{ maxWidth: "200px" }}>
              {loc.image && (
                <img
                  src={loc.image}
                  alt={loc.title}
                  style={{
                    width: "100%",
                    borderRadius: "8px",
                    marginBottom: "0.5rem",
                  }}
                />
              )}
              <h3>{loc.title}</h3>
              <Link to={`/post/${loc.id}`} rel="noopener noreferrer">
                Check Out
              </Link>
            </div>
          </Popup>
        </Marker>
      ))}
    </MapContainer>
  );
};

export default MapComponent;
