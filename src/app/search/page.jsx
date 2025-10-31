import React from "react";
import FerryResults from "@/components/FerryResults";

export default function SearchPage({ searchParams }) {
  const criteria = {
    from: searchParams?.from || "",
    to: searchParams?.to || "",
    date: searchParams?.date || "",
    passengers: searchParams?.passengers || "1",
  };

  const ferries = [
    { id: 1, name: "Ocean Explorer", operator: "AquaLine", rating: 4.6, departure: criteria.from || "07:00", duration: "3h", price: 1200 },
    { id: 2, name: "Sea Breeze", operator: "BlueWave", rating: 4.3, departure: criteria.from || "09:30", duration: "2h 30m", price: 950 },
  ];

  return (
    <main className="pt-24 min-h-screen bg-gray-900">
      <div className="container mx-auto px-6 py-6">
        <h1 className="text-3xl font-bold mb-4">Search Results</h1>
        <p className="text-gray-400 mb-8">
          From <span className="font-semibold">{criteria.from || "-"}</span> to <span className="font-semibold">{criteria.to || "-"}</span> on <span className="font-semibold">{criteria.date || "-"}</span> for <span className="font-semibold">{criteria.passengers}</span> passenger(s)
        </p>
      </div>
      <FerryResults ferries={ferries} onSelectSeats={() => {}} />
    </main>
  );
}


