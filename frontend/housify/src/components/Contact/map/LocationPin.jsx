import React from "react";
// import { Icon } from '@iconify/react'
// import locationIcon from '@iconify/icons-mdi/map-marker'
import { FaLocationArrow } from "react-icons/fa";


const LocationPin = ({ text }) => (
  <div className="pin">
    <FaLocationArrow className="pin-icon" />
    <p className="pin-text">{text}</p>
  </div>
)
export default LocationPin;