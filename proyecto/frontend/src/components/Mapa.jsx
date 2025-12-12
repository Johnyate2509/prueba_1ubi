import { GoogleMap, Marker, useJsApiLoader } from "@react-google-maps/api";
import { useEffect, useState } from "react";
import { API_URL } from "../api";

export default function Mapa() {
  const [repartidores, setRepartidores] = useState([]);

  useEffect(() => {
    const interval = setInterval(() => {
      fetch(API_URL + "/repartidores")
        .then(res => res.json())
        .then(data => setRepartidores(data));
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  const { isLoaded } = useJsApiLoader({
    googleMapsApiKey: "YOUR_GOOGLE_MAPS_API_KEY"
  });

  if (!isLoaded) return "Cargando mapa...";

  return (
    <GoogleMap
      center={{ lat: 4.6097, lng: -74.0817 }}
      zoom={12}
      mapContainerStyle={{ width: "100%", height: "500px" }}
    >
      {repartidores.map(rep => (
        <Marker
          key={rep.id}
          position={{ lat: Number(rep.lat), lng: Number(rep.lng) }}
          label={rep.nombre}
          icon={{
            url: rep.activo
              ? "https://maps.google.com/mapfiles/ms/icons/yellow-dot.png"
              : "https://maps.google.com/mapfiles/ms/icons/grey-dot.png"
          }}
        />
      ))}
    </GoogleMap>
  );
}
