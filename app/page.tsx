import Image from "next/image";
import ScrimList from "./ScrimList";

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

        
      <ScrimList scrims={scrims} />

    </main>
  );
}