import React from "react";
import { NavLink } from "react-router-dom";

const FilterCard = ({ cards }) => {
  const {
    itemName,
    imageURL,
    subcategory_name,
    description,
    rating,
    price,
    Processing_Time,
    customization,
    stockStatus,
    _id,
  } = cards || {};

  return (
    <div className="my-12">
      <div className="card  h-full rounded-[8px] shadow-xl">
        <figure>
          <img className="h-[300px] w-full" src={imageURL} alt="" />
        </figure>
        <div className="card-body space-y-2">
          <div className="flex items-center gap-[120px]">
            <h2 className="font-semibold text-2xl">{itemName}</h2>
            <p className="text-[#eea12c] font-semibold text-xl">{price}$</p>
          </div>
          <p className="text-[18px] text-gray-600 font-semibold">
            {description}
          </p>
          <p className="text-[18px] text-gray-600 font-semibold">
            Category: {subcategory_name}
          </p>
          <p className="text-[18px] text-gray-600 font-semibold">
            Processing Time: {Processing_Time}
          </p>
          <p className="text-[18px] text-gray-600 font-semibold">
            Review: {rating}
          </p>
          <div className="flex items-center">
            <p className="text-[18px] text-gray-600 font-semibold">
              Customization: {customization}
            </p>
            <p className="text-[18px] text-gray-600 font-semibold">
              {stockStatus}
            </p>
          </div>
          <NavLink to={`/craftDetails/${_id}`}>
            <button className="btn bg-[#eea12c] text-white w-full text-xl">
              View Details
            </button>
          </NavLink>
        </div>
      </div>
    </div>
  );
};

export default FilterCard;
