import React from "react";
import { NavLink } from "react-router-dom";

const CategoryCard = ({ items }) => {
  const { subcategory, description, image, _id } = items;

  return (
    <div>
      <NavLink to={`/subcategory/${subcategory}`}>
        <div className="card cursor-pointer h-full rounded-[8px] shadow-xl">
          <figure>
            <img className="h-[300px] w-full" src={image} alt="" />
          </figure>
          <div className="card-body space-y-2">
            <p className="text-[20px] text-orange-400 font-semibold">
              {subcategory}
            </p>
            <p className="text-[18px] text-gray-600 font-semibold">
              {description}
            </p>
          </div>
        </div>
      </NavLink>
    </div>
  );
};

export default CategoryCard;
