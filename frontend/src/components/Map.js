import React, { useEffect } from 'react';
import { MapContainer, TileLayer, Marker, Popup, useMap } from 'react-leaflet';
import L from 'leaflet';
import 'leaflet/dist/leaflet.css';
import './Map.css';

const customIcon = new L.DivIcon({
  html: `<div style="font-size: 24px; color: red;"><i class="fas fa-map-marker-alt"></i></div>`,
  iconSize: [24, 24],
  iconAnchor: [12, 24],
  className: 'custom-div-icon'
});

const CustomZoomControl = () => {
  const map = useMap();

  useEffect(() => {
    const zoomControl = L.control.zoom({
      position: 'bottomleft' // Change to 'bottomleft' for the desired position
    });
    zoomControl.addTo(map);

    return () => {
      zoomControl.remove();
    };
  }, [map]);

  return null;
};

const Map = () => {
  const position = [6.9271, 79.8612];

  return (
    <MapContainer
      center={position}
      zoom={13}
      style={{ height: '400px', width: '100%' }}
      scrollWheelZoom={false}
      zoomControl={false} 
    >
      <TileLayer
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
      />
      <Marker position={position} icon={customIcon}>
        <Popup className='Location-Name'>
          DreamParadise
        </Popup>
      </Marker>
      <CustomZoomControl />
    </MapContainer>
  );
};

export default Map;
