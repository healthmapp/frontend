import mapboxgl from "mapbox-gl";
import { useEffect } from "react";

const style = {
  wrapper: `flex-1 h-full w-full overflow-hidden overflow-hidden overflow-x-hidden`,
};

mapboxgl.accessToken =
  "pk.eyJ1IjoiY2hpcmFnZG9ncmEiLCJhIjoiY2wzZzJ1d3Q3MGJvaDNrcTdkbDV0eGMzdiJ9.qmmKD3ZPOI0FlrYlVpdApw";

function Map() {
  useEffect(() => {
    const map = new mapboxgl.Map({
      container: "map",
      style: "mapbox://styles/chiragdogra/cl3g3lt7k007g14ndjil11m2m",
      center: [-99.29011, 39.39172],
      zoom: 3,
      
    });
  });
  return <div className={style.wrapper} id="map" />;
}

export default Map;
