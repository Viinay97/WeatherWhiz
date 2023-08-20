import React from "react";
import {
  UilSun,
  UilSunset,
} from "@iconscout/react-unicons";
import {iconUrlFromCode } from "../services/weatherService";
import { formatToLocalTime } from '../services/weatherService';

function PrimaryDetails({
  units,
  weather: {
    details,
    icon,
    temp,
    temp_min,
    temp_max,
    sunrise,
    sunset,
    speed,
    humidity,
    feels_like,
    timezone,
  },
}) {
  return (
    <div>
        <div className="flex items-center justify-center py-2 text-3xl  text-[#ffc550] ">
            <p>{details.charAt(0).toUpperCase() + details.slice(1)}</p>
        </div>
        <div className="my-0 sm:my-1 md:my-2 text-white">
            <div className='flex flex-row text-center justify-evenly'>
              <img src={iconUrlFromCode(icon)} alt="" className="flex items-center justify-center w-20" />
              <p className="flex items-center max-[450px]:text-3xl text-5xl">{`${temp.toFixed()} ${units === 'metric'? '°C': '°F'}`}</p>
            </div>
            <div className="flex flex-row text-sm items-center justify-evenly mb-1.5">
                <div className="flex items-center justify-left font-light">
                    <UilSun size={25} className="text-[#FF7F50] mr-1" />
                    Sunrise:
                    <span className="font-medium ml-1">{formatToLocalTime(sunrise, timezone, "hh:mm a")}</span>
                </div>
                <div className="flex items-center justify-left font-light">
                    <UilSunset size={25} className="text-[#FF7F50] mr-1" />
                    Sunset:
                    <span className="font-medium ml-1">{formatToLocalTime(sunset, timezone, "hh:mm a")}</span>
                </div>
            </div>
        </div>
    </div>
  );
}

export default PrimaryDetails;
