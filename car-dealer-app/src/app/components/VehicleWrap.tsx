"use client";

import { useState, useEffect } from "react";
import Link from "next/link";

type VehicleType = {
  MakeId: number;
  MakeName: string;
};

export default function VehicleWrap() {
  const [vehicleTypes, setVehicleTypes] = useState<VehicleType[]>([]);
  const [selectedType, setSelectedType] = useState("");
  const [selectedYear, setSelectedYear] = useState("");
  const currentYear = new Date().getFullYear();
  const years = Array.from({ length: currentYear - 2014 }, (_, i) =>
    (currentYear - i).toString()
  );

  useEffect(() => {
    fetch(
      "https://vpic.nhtsa.dot.gov/api/vehicles/GetMakesForVehicleType/car?format=json"
    )
      .then((response) => response.json())
      .then((data) => setVehicleTypes(data.Results));
  }, []);

  const isNextDisabled = !selectedType || !selectedYear;

  return (
    <div className="flex flex-col w-1/3 bg-white justify-center rounded-lg bg-opacity-90">
      <div className="px-10 py-20 space-y-4">
        <h2 className="text-center text-4xl font-bold text-gray-700">
          Cars Search
        </h2>
        <select
          value={selectedType}
          onChange={(e) => setSelectedType(e.target.value)}
          className="block w-full p-2 border rounded-lg"
        >
          <option value="">Select Vehicle Type</option>
          {vehicleTypes.map((type) => (
            <option key={type.MakeId} value={type.MakeId}>
              {type.MakeName}
            </option>
          ))}
        </select>
        <select
          value={selectedYear}
          onChange={(e) => setSelectedYear(e.target.value)}
          className="block w-full p-2 border rounded-lg"
        >
          <option value="">Select Model Year</option>
          {years.map((year) => (
            <option key={year} value={year}>
              {year}
            </option>
          ))}
        </select>
        <Link
          href={
            isNextDisabled ? "#" : `/result/${selectedType}/${selectedYear}`
          }
          className={`block w-full p-2 text-center text-white rounded-lg ${
            isNextDisabled
              ? "bg-gray-300 cursor-not-allowed"
              : "bg-gray-700 hover:bg-gray-500"
          }`}
        >
          {isNextDisabled ? "Both fields must be filled" : "Next"}
        </Link>
      </div>
    </div>
  );
}
