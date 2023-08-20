import React from 'react';
import {
    UilArrowUp,
    UilArrowDown,
    UilTemperature,
    UilTear,
    UilWind,
    UilCompressV,
} from "@iconscout/react-unicons";

const Ticket = ({label, value, icon, unit}) => (
    <div className="bg-[#2b2b2b] bg-opacity-50 m-2 p-4 shadow-xl rounded flex flex-col items-center">
        <div className="flex flex-row items-center space-x-1">
            {icon}
            <p className="font-light text-sm text-[#FF7F50]">{label}</p>
        </div>
        <div className="text-xl font-bold text-white ml-1">{`${value.toFixed()} ${unit}`}</div>
  </div>
)

function SecondaryDetails({units, weather: {feels_like, temp_min, temp_max, humidity, speed, pressure, timezone} }) {

    const TemperatureData = [
        { 
            label: 'Feels Like', 
            value: feels_like, 
            icon: <UilTemperature className="text-[#FF7F50] text-sm"/>,
            unit: units === 'metric' ? '°C' : '°F',
        },
        { 
            label: 'Min', 
            value: temp_min, 
            icon: <UilArrowDown className="text-[#FF7F50] text-sm"/>,
            unit: units === 'metric' ? '°C' : '°F',
        },
        { 
            label: 'Max', 
            value: temp_max, 
            icon: <UilArrowUp className="text-[#FF7F50] text-sm"/>,
            unit: units === 'metric' ? '°C' : '°F',
        },
        { 
            label: 'Humidity', 
            value: temp_max, 
            icon: <UilTear className="text-[#FF7F50] text-sm"/>,
            unit: '%',
        },
        { 
            label: 'Wind', 
            value: speed, 
            icon: <UilWind className="text-[#FF7F50] text-sm"/>,
            unit: units === 'metric' ? 'm/s': 'mph',
        },
        { 
            label: 'Pressure', 
            value: pressure, 
            icon: <UilCompressV className="text-[#FF7F50] text-sm"/>,
            unit: 'hPa'
        },
    ];

    return (
        <div>
            <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-4 mt-5 mb-2">
                {TemperatureData.map((data) => (
                    <Ticket 
                        label={data.label} 
                        icon={data.icon} 
                        value={data.value} 
                        unit={data.unit} 
                    />
                ))}
            </div>
        </div>
    )
}

export default SecondaryDetails;
