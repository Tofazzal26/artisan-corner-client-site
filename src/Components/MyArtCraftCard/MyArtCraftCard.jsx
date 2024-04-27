import { NavLink } from "react-router-dom";
import { MdDeleteForever } from "react-icons/md";
import { FaEye } from "react-icons/fa";
import { FaPencil } from "react-icons/fa6";
const MyArtCraftCard = ({ craftCard }) => {
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
  } = craftCard || {};

  return (
    <div className="my-[66px]">
      <div className="card  h-full rounded-[8px] shadow-xl">
        <div className="grid grid-cols-1 px-6 items-center lg:grid-cols-5">
          <figure className="col-span-2">
            <img className="h-[350px] w-full" src={imageURL} alt="" />
          </figure>
          <div className="card-body space-y-2 col-span-2">
            <h2 className="font-semibold text-2xl">{itemName}</h2>
            <p className="text-[#eea12c] font-semibold text-xl">{price}$</p>
            <p className="text-[18px] text-gray-600 font-semibold">
              Rating: {rating}
            </p>

            <p className="text-[18px] text-gray-600 font-semibold">
              Customization: {customization}
            </p>
            <p className="text-[18px] text-gray-600 font-semibold">
              {stockStatus}
            </p>
          </div>
          <div className="col-span-1">
            <div className="flex flex-col justify-center items-center gap-4">
              <NavLink>
                <button className="px-8 py-3 bg-gray-500 rounded-[5px]">
                  <FaEye size={25} color="#FFFFFF" />
                </button>
              </NavLink>
              <NavLink>
                <button className="px-8 py-3 bg-green-500 rounded-[5px]">
                  <FaPencil size={25} color="#FFFFFF" />
                </button>
              </NavLink>
              <NavLink>
                <button className="px-8 py-3 bg-red-500 rounded-[5px]">
                  <MdDeleteForever size={30} color="#FFFFFF" />
                </button>
              </NavLink>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MyArtCraftCard;
