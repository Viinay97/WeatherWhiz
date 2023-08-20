import React from "react";
import { formatToLocalTime } from "../services/weatherService";

function TimeAndLocation({ weather: { dt, timezone, name, country }}) {
  return (
    <div>
      <div className="flex items-center justify-center my-3">
        <p className="text-white text-4xl font-medium">{`${name}, ${country}`}</p>
      </div>
      <div className="flex flex-col sm:flex-row items-center sm:justify-evenly my-4 sm:my-6">
        <p className="flex items-center justify-center text-white text-2xl md:text-4xl font-extralight">
          {formatToLocalTime(dt, timezone, "hh:mm a")}
        </p>
        <p className="flex items-center justify-center text-white text-xl md:text-2xl font-extralight">
          {formatToLocalTime(dt, timezone)}
        </p>
      </div>

    </div>
  );
}

export default TimeAndLocation;
