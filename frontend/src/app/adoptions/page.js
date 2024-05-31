"use client";
import { useState, useEffect } from "react";
import CommonListing from "@/components/CommonListing";
import { dogByGender, getAllAdminDogs } from "@/services/dog";

export default function Dogs() {
  const [dogs, setDogs] = useState([]);
  const [genderFilter, setGenderFilter] = useState("All");

  useEffect(() => {
    async function fetchDogs() {
      let result;
      if (genderFilter === "All") {
        result = await getAllAdminDogs();
      } else {
        result = await dogByGender(genderFilter);
      }
      if (result && result.data) {
        setDogs(result.data);
      }
    }
    fetchDogs();
  }, [genderFilter]);

  return (
    <div className="flex flex-col items-center justify-center min-h-screen">
      <div className="text-center mb-4 mt-20">
        <label htmlFor="genderFilter" className="mr-2">
          Filter by gender:{" "}
        </label>
        <select
          id="genderFilter"
          value={genderFilter}
          onChange={(e) => setGenderFilter(e.target.value)}
        >
          <option value="All">All</option>
          <option value="listingFemale">Female</option>
          <option value="Male">Male</option>
        </select>
      </div>
      <CommonListing data={dogs} />
    </div>
  );
}
