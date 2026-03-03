import Image from "next/image";

export default function Home() {

  const scrims = [
    { team: "White Team", rank: "Diamond", region: "NA", time: "8PM" },
    { team: "Sage Team", rank: "GrandMaster", region: "EU", time: "Tomorrow 6PM" },
  ];

  return (
    <main className="min-h-screen bg-gray-900 text-white flex flex-col items-center p-10">
      <h1 className="text-4xl font-bold mb-6">
        Overwatch Scrim Board
      </h1>

      <button className="bg-orange-500 hover:bg-orange-600 px-6 py-3 rounded-lg font-semibold transition">
        Create Scrim
      </button>

      
      {/* Big rectangle container */}
      <div className="w-full max-w-3xl bg-gray-800 rounded-xl p-6 shadow-lg">
        <h2 className="text-2xl font-semibold mb-4">Available Scrims</h2>

        {scrims.map((scrim) => (
          <div
            key={scrim.team}
            className="bg-gray-700 rounded-lg p-4 mb-3"
          >
            <div className="font-bold">{scrim.team}</div>
            <div className="text-sm text-gray-300">
              {scrim.rank} • {scrim.region} • {scrim.time}
            </div>
          </div>
        ))}
      </div>


    </main>
  );
}