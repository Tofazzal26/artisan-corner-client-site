import { useForm } from "react-hook-form";
import { Toaster } from "react-hot-toast";
import { useLoaderData } from "react-router-dom";
import Swal from "sweetalert2";

const ArtCraftUpdate = () => {
  const updateData = useLoaderData();

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
  } = updateData;

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
    const customization = data.customization;
    const stockStatus = data.stockStatus;
    const updateItem = {
      itemName,
      imageURL,
      subcategory_name,
      description,
      rating,
      price,
      Processing_Time,
      customization,
      stockStatus,
    };

    fetch(`http://localhost:3000/artisans/${_id}`, {
      method: "PUT",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(updateItem),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data.modifiedCount > 0) {
          Swal.fire({
            title: "Success!",
            text: "Update Successfully",
            icon: "success",
            confirmButtonText: "Cool",
          });
        }
      });
  };

  return (
    <div className="px-2 lg:px-0">
      <div className="bg-[#ffffff] mt-14 shadow-loginSd lg:w-1/2 md:w-2/3 mx-auto">
        <div className="md:w-2/3 lg:w-2/3 mx-auto lg:p-14 p-4 border-2 rounded-md">
          <h1 className="font-semibold text-lg lg:text-3xl md:text-2xl text-center">
            Update Item
          </h1>
          <div className="divider"></div>
          <form onSubmit={handleSubmit(onSubmit)}>
            <label className="lg:text-lg md:text-base text-sm font-semibold ">
              Item Name
            </label>
            <br />

            <input
              type="text"
              defaultValue={itemName}
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
              defaultValue={imageURL}
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
              defaultValue={subcategory_name}
            >
              <option
                className="lg:text-lg md:text-base text-sm font-semibold"
                value="Landscape painting"
              >
                Landscape painting
              </option>
              <option
                className="lg:text-lg md:text-base text-sm font-semibold"
                value="Pencil Sketch Portrait"
              >
                Pencil Sketch Portrait
              </option>
              <option
                className="lg:text-lg md:text-base text-sm font-semibold"
                value="Animal Watercolor"
              >
                Animal Watercolor
              </option>
              <option
                className="lg:text-lg md:text-base text-sm font-semibold"
                value="Abstract Oil Painting"
              >
                Abstract Oil Painting
              </option>
              <option
                className="lg:text-lg md:text-base text-sm font-semibold"
                value="Figure Charcoal Sketch"
              >
                Figure Charcoal Sketch
              </option>
              <option
                className="lg:text-lg md:text-base text-sm font-semibold"
                value="Superhero Cartoon Design"
              >
                Superhero Cartoon Design
              </option>
            </select>
            <br />

            <label className="lg:text-lg md:text-base text-sm font-semibold ">
              Short Description
            </label>
            <br />
            <input
              type="text"
              defaultValue={description}
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
              defaultValue={price}
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
              defaultValue={rating}
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
              defaultValue={Processing_Time}
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
              defaultValue={customization}
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
              defaultValue={stockStatus}
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
            <button className="bg-[#eea12c] md:text-base text-sm lg:text-xl rounded-md p-2 w-full my-4 font-semibold text-white">
              Update
            </button>
          </form>
        </div>
      </div>

      <Toaster />
    </div>
  );
};

export default ArtCraftUpdate;
