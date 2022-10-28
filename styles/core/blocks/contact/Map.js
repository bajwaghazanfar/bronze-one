import { useState } from "react";
import Map from "react-map-gl";

const Map_Component = () => {
  const [viewport, setViewport] = useState({
    width: "500",
    height: "900",
    // The latitude and longitude of the center of London
    latitude: 51.5074,
    longitude: -0.1278,
    zoom: 10,
  });
  return (
    <>
      <Map
        mapStyle="mapbox://styles/bajwaghazanfar/ckb3w6zif0zi11ikln1ck0vi5"
        mapboxAccessToken="pk.eyJ1IjoiYmFqd2FnaGF6YW5mYXIiLCJhIjoiY2w4cDc5cGJqMDJ5aTNvcHJlejZvMzBjOSJ9.QOqiur3iL6a6l6SAx9Equw"
        initialViewState={{
          longitude: -122.4,
          latitude: 37.8,
          zoom: 14,
          width: "100%",
          height: "100%",
        }}
      />
    </>
  );
};
export default Map_Component;
