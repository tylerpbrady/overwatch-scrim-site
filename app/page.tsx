import Image from "next/image";

export default function Home() {

  const scrims = [
    { region: "NA", platform: "PC", team: "White Team", range: "3.5k", time: "8PM" },
    { region: "EU", platform: "Console", team: "Sage Team", range: "2.3k", time: "Tomorrow 6PM" },
  ];

  return (
    <main className="min-h-screen bg-gray-600 text-white flex flex-col items-center p-10">
      <h1 className="text-4xl font-bold mb-6">
        Overwatch Scrim Board
      </h1>

      <button className="bg-orange-500 hover:bg-orange-600 px-6 py-3 rounded-lg font-semibold transition mb-8">
        Create Scrim
      </button>

      
      {/* Big rectangle container */}
      <div className="w-full max-w-3xl bg-gray-800 rounded-xl p-6 shadow-2xl/90">
        <h2 className="text-2xl font-semibold mb-4">Available Scrims</h2>

        <select className="w-48 bg-gray-900 text-white px-4 py-2 rounded mb-3 mr-5">
          <option>All Ranks</option>
          <option>GM</option>
          <option>Masters</option>
          <option>Diamond</option>
        </select>

        <select className="bg-gray-900 text-white px-4 py-2 rounded mb-3 mr-5">
          <option disabled>Time Slot</option>
          <option>5PM - 7PM</option>
          <option>7PM - 9PM</option>
          <option>Other</option>
        </select>

        {scrims.map((scrim) => (
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


    </main>
  );
}