import React, { useState } from "react";
import { UilSearch, 
    UilLocationPoint,
    UilToggleOff, 
    UilToggleOn 
} from "@iconscout/react-unicons";
import { toast } from "react-toastify";

function Inputs({ setQuery, units, setUnits }) {
  const [city, setCity] = useState("");
  const [metric, setMetric] = useState(true);

  const handleUnitsChange = (e) => {
    const selectedUnit = e.currentTarget.name;
    if (units !== selectedUnit){
      setUnits(selectedUnit);
      setMetric(!metric);
    }
  };

  const handleSearchClick = () => {
    if (city !== "") setQuery({ q: city });
  };

  const handleLocationClick = () => {
    if (navigator.geolocation) {
      toast.info("Fetching users location.");
      navigator.geolocation.getCurrentPosition((position) => {
        toast.success("Location fetched!");
        let lat = position.coords.latitude;
        let lon = position.coords.longitude;

        setQuery({
          lat,
          lon,
        });
      });
    }
  };

  return (
    <div className="flex flex-row justify-center my-5 md:my-10 ml-3">
      <div className="flex flex-row w-3/4 items-center justify-left space-x-4 mr-4">
        <input
          value={city}
          onChange={(e) => setCity(e.currentTarget.value)}
          type="text"
          placeholder="Search for city...."
          className="text-m md:text-xl rounded font-light p-2 w-full shadow-xl focus:outline-none capitalize placeholder:normal-case"
        />
        <UilSearch
          size={30}
          className="text-[#FF7F50] rounded-xl cursor-pointer transition ease-out hover:scale-125"
          onClick={handleSearchClick}
        />
        <UilLocationPoint
          size={30}
          className="text-[#FF7F50] cursor-pointer transition ease-out hover:scale-125"
          onClick={handleLocationClick}
        />
      </div>

      <div className="flex flex-row w-1/4 items-center justify-center text-xl">
        <button
          name="metric"
          onClick={handleUnitsChange}
          className="text-white font-light transition ease-out hover:scale-125"
        >
          °C
        </button>
        <p className="flex items-center justify-center text-white mx-1">
          {metric ? 
          <button name='imperial' onClick={handleUnitsChange} className='text-[#FF7F50] transition ease-out hover:scale-110'>
            <UilToggleOff size={30}/>
          </button>
             : 
          <button name='metric' onClick={handleUnitsChange} className='text-[#FF7F50] transition ease-out hover:scale-110' >
            <UilToggleOn size={30}/>
          </button>
            
          }
        </p>
        <button
          name="imperial"
          onClick={handleUnitsChange}
          className="text-white font-light transition ease-out hover:scale-125"
        >
          °F
        </button>
      </div>
    </div>
  );
}

export default Inputs;
