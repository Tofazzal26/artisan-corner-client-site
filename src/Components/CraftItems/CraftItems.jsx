import { IoSettingsOutline } from "react-icons/io5";
const CraftItems = ({ craft }) => {
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
  } = craft || {};

  return (
    <div>
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
          <button className="btn bg-[#eea12c] text-white text-xl">
            View Details
          </button>
        </div>
      </div>
    </div>
  );
};

export default CraftItems;
