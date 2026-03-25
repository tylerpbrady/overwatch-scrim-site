"use client";

import { useState } from "react";

type Scrim = {
  region: string;
  platform: string;
  team: string;
  range: string;
  time: string;
};

export default function ScrimBoard({ scrims }: { scrims: Scrim[] }) {
  const [selectedRegion, setSelectedRegion] = useState("Any");

  const filteredScrims = scrims.filter((scrim) => {
    if (selectedRegion === "Any") return true;
    return scrim.region === selectedRegion;
  });

  return (
    <div className="w-full max-w-3xl bg-gray-800 rounded-xl p-6 shadow-2xl/90">
      <h2 className="text-2xl font-semibold mb-4">Available Scrims</h2>

      <select
        className="w-35 bg-gray-900 text-white px-4 py-2 rounded mb-3 mr-5"
        value={selectedRegion}
        onChange={(event) => setSelectedRegion(event.target.value)}
      >
        <option value="Any">Any</option>
        <option value="NA">NA</option>
        <option value="EU">EU</option>
      </select>

      <select className="w-35 bg-gray-900 text-white px-4 py-2 rounded mb-3 mr-5">
        <option>All Ranks</option>
        <option>GM</option>
        <option>Masters</option>
        <option>Diamond</option>
      </select>

      <select className="bg-gray-900 text-white px-4 py-2 rounded mb-3 mr-5">
        <option>Time Slot</option>
        <option>5PM - 7PM</option>
        <option>7PM - 9PM</option>
        <option>Other</option>
      </select>

      {filteredScrims.map((scrim) => (
        <div
          key={scrim.team}
          className="bg-gray-700 rounded-lg p-4 mb-3"
        >
          <div className="font-bold">{scrim.team}</div>
          <div className="text-sm text-gray-300">
            {scrim.region} • {scrim.platform} • {scrim.range} • {scrim.time}
          </div>
        </div>
      ))}
    </div>
  );
}