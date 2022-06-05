import React from "react";
import {
  GoogleMap,
  Marker,
  useJsApiLoader,
  Autocomplete,
  DirectionsRenderer,
} from "@react-google-maps/api";
import { useState, useRef } from "react";
import "./Map.css";
import logo from "./logo.jpg";
import loc from './loc.png'
require('dotenv').config()
let center = {
  lat: 12.971599,
  lng: 77.594566,
};

function Map() {
  const [directionResponse, setDirectionResponse] = useState(null);
  const [distance, setDistance] = useState("");
  const [originVal, setOriginVal] = useState("");
  const [destVal, setDestVal] = useState("");
  
  /** @type React.MutableRefObject<HTMLInputElement> */
  const originRef = useRef();

  /** @type React.MutableRefObject<HTMLInputElement> */
  const destinationRef = useRef();
  const { isLoaded } = useJsApiLoader({
    googleMapsApiKey: process.env.REACT_APP_MAP_API,
    libraries: ["places"],
  });

  if (!isLoaded) {
    return <p>Hi I'm feeling great</p>;
  }

  async function calculateRoute() {
    setOriginVal(originRef.current.value);
    setDestVal(destinationRef.current.value);
    if (originRef.current.value === "" || destinationRef.current.value === "")
      return;
    // eslint-disable-next-line no-undef
    const directionService = new google.maps.DirectionsService();
    const results = await directionService.route({
      origin: originRef.current.value,
      destination: destinationRef.current.value,
      // eslint-disable-next-line no-undef
      travelMode: google.maps.TravelMode.DRIVING,
    });
    setDirectionResponse(results);
    setDistance(results.routes[0].legs[0].distance.text);
  }

  return (
    <div className="full">
      <div className="header">
        <img src={logo} alt="logo" />
      </div>
      <div className="center">
      <p>
        Let's calculate <b>distance</b> from Google maps
      </p>
      <div className="content">
          <div className="insideContent">
        <label >Origin</label>
        {/* <img src={loc} alt="" /> */}
       
        <Autocomplete>
          <input type="text" placeholder="" ref={originRef} />
        </Autocomplete>
        <br />
        
        <label>Destination</label>
        {/* <img src={loc} alt="" /> */}
       
        <Autocomplete>
          <input type="text" placeholder="" ref={destinationRef} />
        </Autocomplete>
        
        
        <div className="footer">
          <div className="distance">Distance</div>
          <h1>{distance}</h1>
        </div>
        <div className="fooText">
          The distance between <b>{originVal}</b> and <b>{destVal}</b> is {distance}
        </div>
      </div>
      <button style={{
          marginTop:"6vh",marginRight:"5vw"
      }}onClick={calculateRoute}>Calculate</button>
      
      <GoogleMap
        center={center}
        zoom={15}
        mapContainerStyle={{ width: "40vw", height: "50vh" }}
        options={{
          zoomControl: false,
          streetViewControl: false,
          mapTypeControl: false,
          fullscreenControl: false,
        }}
      >
        <Marker position={center} />
        {directionResponse && (
          <DirectionsRenderer directions={directionResponse} />
        )}
      </GoogleMap>
     
      </div>
      
      </div>
    </div>
  );
}

export default Map;
