import { useEffect, useState } from "react";
import { NavLink, useLoaderData, useParams } from "react-router-dom";

const CraftDetails = () => {
  const singleDetails = useLoaderData();

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
  } = singleDetails;

  return (
    <div className="my-[66px]">
      <div className="card  h-full rounded-[8px] shadow-xl">
        <div className="grid grid-cols-1 lg:grid-cols-3">
          <figure>
            <img className="h-[350px] w-full" src={imageURL} alt="" />
          </figure>
          <div className="card-body space-y-2 col-span-2">
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

            <p className="text-[18px] text-gray-600 font-semibold">
              Customization: {customization}
            </p>
            <p className="text-[18px] text-gray-600 font-semibold">
              {stockStatus}
            </p>

            <NavLink to={"/allArtCraftItems"}>
              <button className="btn bg-[#eea12c] text-white w-full text-xl">
                View All ART
              </button>
            </NavLink>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CraftDetails;
