import React from "react";
import { useLoaderData } from "react-router-dom";
import FilterCard from "../../Components/FilterCard/FilterCard";
import noData from "../../../public/DataNotFound/noFound.gif";

const CategoryFilter = () => {
  const loadedFilter = useLoaderData();

  return (
    <div className="container mx-auto">
      <div>
        {loadedFilter.length === 0 && (
          <div className="flex justify-center items-center">
            <img className="h-[400px]" src={noData} alt="" />
          </div>
        )}
      </div>

      <div className="grid grid-cols-1 gap-6 lg:grid-cols-3">
        {loadedFilter.map((cards) => (
          <FilterCard key={cards._id} cards={cards} />
        ))}
      </div>
    </div>
  );
};

export default CategoryFilter;
