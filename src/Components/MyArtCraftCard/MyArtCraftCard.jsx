import { NavLink } from "react-router-dom";
import { MdDeleteForever } from "react-icons/md";
import { FaEye } from "react-icons/fa";
import { FaPencil } from "react-icons/fa6";
import Swal from "sweetalert2";

const MyArtCraftCard = ({ craftCard, setUserAddCraft, userAddCraft }) => {
  const {
    itemName,
    imageURL,
    description,
    rating,
    price,
    Processing_Time,
    customization, // Destructure customization
    _id,
    stockStatus,
  } = craftCard || {};

  const handleDelete = (id) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You Want to delete ?",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        fetch(`https://artisan-server-khaki.vercel.app/artisans/${id}`, {
          method: "DELETE",
        })
          .then((res) => res.json())
          .then((data) => {
            if (data.deletedCount > 0) {
              Swal.fire({
                title: "Deleted!",
                text: "Your file has been deleted.",
                icon: "success",
              });
              const remaining = userAddCraft.filter(
                (craft) => craft._id !== id
              );
              setUserAddCraft(remaining);
            }
          });
      }
    });
  };

  return (
    <div className="mt-[20px] mb-[66px]">
      <div className="card  h-full rounded-[8px] shadow-xl">
        <div className="grid grid-cols-1 p-6 items-center lg:grid-cols-5">
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
              <NavLink to={`/craftDetails/${_id}`}>
                <button className="px-8 py-3 bg-gray-500 rounded-[5px]">
                  <FaEye size={25} color="#FFFFFF" />
                </button>
              </NavLink>
              <NavLink to={`/update/${_id}`}>
                <button className="px-8 py-3 bg-green-500 rounded-[5px]">
                  <FaPencil size={25} color="#FFFFFF" />
                </button>
              </NavLink>
              <button
                onClick={() => handleDelete(_id)}
                className="px-8 py-3 bg-red-500 rounded-[5px]"
              >
                <MdDeleteForever size={26} color="#FFFFFF" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MyArtCraftCard;
