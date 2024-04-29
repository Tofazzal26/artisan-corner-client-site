import { Link } from "react-router-dom";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { useContext, useState } from "react";
import { useForm } from "react-hook-form";
import { Toaster, toast } from "react-hot-toast";
import { AuthContext } from "../../AuthProvider/AuthProvider";
import { Typewriter } from "react-simple-typewriter";
const AddCraftItem = () => {
  const { user } = useContext(AuthContext);

  const { email, displayName } = user || {};

  const {
    register,
    handleSubmit,

    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    const itemName = data.itemName;
    const imageURL = data.imageURL;
    const subcategory_name = data.subcategory_name;
    const description = data.description;
    const rating = data.rating;
    const price = data.price;
    const Processing_Time = data.Processing_Time;
    const NewEmail = data.email;
    const NewName = data.name;
    const customization = data.customization;
    const stockStatus = data.stockStatus;
    const craftItem = {
      itemName,
      imageURL,
      subcategory_name,
      description,
      rating,
      price,
      Processing_Time,
      NewEmail,
      NewName,
      customization,
      stockStatus,
    };

    fetch("http://localhost:3000/artisans", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(craftItem),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        toast.success("Add Item Successful");
      });
  };

  return (
    <div className="px-2 lg:px-0">
      <div className="bg-[#ffffff] mt-14 shadow-loginSd lg:w-1/2 md:w-2/3 mx-auto">
        <div className="md:w-2/3 lg:w-2/3 mx-auto lg:p-14 p-4 border-2 rounded-md">
          <h1 className="font-semibold text-lg lg:text-3xl md:text-2xl text-center">
            Add Craft {""}
            <span className="text-[#eea12c]">
              <Typewriter
                cursor
                cursorBlinking
                delaySpeed={1000}
                deleteSpeed={25}
                loop={0}
                typeSpeed={75}
                words={["Item"]}
              />
            </span>
          </h1>
          <div className="divider"></div>
          <form onSubmit={handleSubmit(onSubmit)}>
            <label className="lg:text-lg md:text-base text-sm font-semibold ">
              Item Name
            </label>
            <br />

            <input
              type="text"
              name="itemName"
              className="bg-[#f3f3f3] p-3 w-full my-4 text-sm lg:text-base rounded-sm outline-none text-[#9f9f9f]"
              placeholder="Enter item name"
              {...register("itemName", { required: true })}
            />
            {errors.itemName && (
              <p className="text-red-600">This Name field is required</p>
            )}

            <label className="lg:text-lg md:text-base text-sm font-semibold ">
              Image URL
            </label>
            <br />

            <input
              type="text"
              name="imageURL"
              className="bg-[#f3f3f3] p-3 w-full my-4 text-sm lg:text-base rounded-sm outline-none text-[#9f9f9f]"
              placeholder="Enter image url"
              {...register("imageURL", { required: true })}
            />
            {errors.imageURL && (
              <p className="text-red-600">This Image field is required</p>
            )}
            <label className="lg:text-lg md:text-base text-sm font-semibold ">
              Subcategory Name
            </label>
            <br />
            <select
              className="lg:text-lg md:text-base text-sm my-4 font-semibold border-2 px-12 rounded-md border-gray-400 py-1"
              {...register("subcategory_name")}
            >
              <option
                className="lg:text-lg md:text-base text-sm font-semibold"
                value="Landscape painting"
              >
                Landscape painting
              </option>
              <option
                className="lg:text-lg md:text-base text-sm font-semibold"
                value="Portrait Drawing"
              >
                Portrait Drawing
              </option>
              <option
                className="lg:text-lg md:text-base text-sm font-semibold"
                value="Animal Watercolor"
              >
                Animal Watercolor
              </option>
              <option
                className="lg:text-lg md:text-base text-sm font-semibold"
                value="Cartoon Drawing"
              >
                Cartoon Drawing
              </option>
              <option
                className="lg:text-lg md:text-base text-sm font-semibold"
                value="Oil Painting"
              >
                Oil Painting
              </option>
              <option
                className="lg:text-lg md:text-base text-sm font-semibold"
                value="Charcoal Sketching"
              >
                Charcoal Sketching
              </option>
            </select>
            <br />

            <label className="lg:text-lg md:text-base text-sm font-semibold ">
              Short Description
            </label>
            <br />
            <input
              type="text"
              name="description"
              className="bg-[#f3f3f3] p-3 w-full my-4 text-sm lg:text-base rounded-sm outline-none text-[#9f9f9f]"
              placeholder="Short Description"
              {...register("description", { required: true })}
            />
            {errors.description && (
              <p className="text-red-600">This description field is required</p>
            )}

            <label className="lg:text-lg md:text-base text-sm font-semibold ">
              Price
            </label>
            <br />
            <input
              type="text"
              name="price"
              className="bg-[#f3f3f3] p-3 w-full my-4 text-sm lg:text-base rounded-sm outline-none text-[#9f9f9f]"
              placeholder="Price Here"
              {...register("price", { required: true })}
            />
            {errors.price && (
              <p className="text-red-600">This price field is required</p>
            )}

            <label className="lg:text-lg md:text-base text-sm font-semibold ">
              Rating
            </label>
            <br />
            <input
              type="text"
              name="rating"
              className="bg-[#f3f3f3] p-3 w-full my-4 text-sm lg:text-base rounded-sm outline-none text-[#9f9f9f]"
              placeholder="Rating Here"
              {...register("rating", { required: true })}
            />
            {errors.rating && (
              <p className="text-red-600">This Rating field is required</p>
            )}

            <label className="lg:text-lg md:text-base text-sm font-semibold ">
              Processing Time
            </label>
            <br />
            <input
              type="text"
              name="Processing_Time"
              className="bg-[#f3f3f3] p-3 w-full my-4 text-sm lg:text-base rounded-sm outline-none text-[#9f9f9f]"
              placeholder="Processing Time"
              {...register("Processing_Time", { required: true })}
            />
            {errors.Processing_Time && (
              <p className="text-red-600">This Rating field is required</p>
            )}
            <br />
            <label className="lg:text-lg md:text-base text-sm font-semibold ">
              Customization
            </label>
            <br />
            <select
              className="lg:text-lg md:text-base text-sm my-4 font-semibold border-2 px-12 rounded-md border-gray-400 py-1"
              {...register("customization")}
            >
              <option
                className="lg:text-lg md:text-base text-sm font-semibold"
                value="Yes"
              >
                Yes
              </option>
              <option
                className="lg:text-lg md:text-base text-sm font-semibold"
                value="No"
              >
                No
              </option>
            </select>

            <br />

            <label className="lg:text-lg md:text-base text-sm font-semibold ">
              Stock Status
            </label>
            <br />
            <select
              className="lg:text-lg md:text-base text-sm my-4 font-semibold border-2 rounded-md border-gray-400 py-1"
              {...register("stockStatus")}
            >
              <option
                className="lg:text-lg md:text-base text-sm font-semibold"
                value="In stock"
              >
                In stock
              </option>
              <option
                className="lg:text-lg md:text-base text-sm font-semibold"
                value="Made to Order"
              >
                Made to Order
              </option>
            </select>
            <br />

            <label className="lg:text-lg md:text-base text-sm font-semibold ">
              Your Name
            </label>
            <br />

            <input
              type="text"
              readOnly
              value={displayName}
              className="bg-[#f3f3f3] p-3 w-full my-4 text-sm lg:text-base rounded-sm outline-none text-[#9f9f9f]"
              placeholder="Enter  your name"
              {...register("name", {})}
            />
            <label className="lg:text-lg md:text-base text-sm font-semibold ">
              Your Email
            </label>
            <br />
            <input
              type="email"
              value={email}
              readOnly
              className="bg-[#f3f3f3] p-3 w-full my-4 text-sm lg:text-base rounded-sm outline-none text-[#9f9f9f]"
              placeholder="Enter  your email address"
              {...register("email", {})}
            />
            <button className="bg-[#eea12c] md:text-base text-sm lg:text-xl rounded-md p-2 w-full my-4 font-semibold text-white">
              Add Item
            </button>
          </form>
        </div>
      </div>

      <Toaster />
    </div>
  );
};

export default AddCraftItem;
