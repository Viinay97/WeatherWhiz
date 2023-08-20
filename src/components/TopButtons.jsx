import React from "react";

function TopButtons({ setQuery }) {
  const cities = [
    {
      id: 1,
      title: "Delhi",
    },
    {
      id: 2,
      title: "Mumbai",
    },
    {
      id: 3,
      title: "London",
    },
    {
      id: 4,
      title: "Tokyo",
    },
  ];

  return (
    <div className="grid grid-cols-2 md:grid-cols-4  gap-4 my-2">
      {cities.map((city) => (
        <button
          key={city.id}
          className="text-white text-base md:text-lg font-medium mb-2 md:mb-0 md:mr-4"
          onClick={() => setQuery({ q: city.title })}
        >
          {city.title}
        </button>
      ))}
    </div>
  );
}

export default TopButtons;
