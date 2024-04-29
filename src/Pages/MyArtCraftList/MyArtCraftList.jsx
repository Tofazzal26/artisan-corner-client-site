import { useContext, useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";
import { AuthContext } from "../../AuthProvider/AuthProvider";
import MyArtCraftCard from "../../Components/MyArtCraftCard/MyArtCraftCard";
import notFound from "../../../public/DataNotFound/noFound.gif";
const MyArtCraftList = () => {
  const { user } = useContext(AuthContext);

  const [userAddCraft, setUserAddCraft] = useState([]);

  const [category, setCategory] = useState([]);

  const handleYes = (yes) => {
    console.log(yes, "alert hoise to");
  };

  useEffect(() => {
    fetch(`http://localhost:3000/artisans_email/${user.email}`)
      .then((res) => res.json())
      .then((data) => {
        setUserAddCraft(data);
      });
  }, [user.email]);

  return (
    <div className="container mx-auto">
      <div>
        <div className="text-center my-6">
          <label className="lg:text-xl md:text-base text-sm font-semibold ">
            Select Customization
          </label>
          <br />
          <select className="lg:text-lg md:text-base text-sm my-4 font-semibold border-2 px-12 rounded-md border-gray-400 py-1">
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
        </div>
        {userAddCraft.length == 0 && (
          <>
            <div className="flex justify-center items-center">
              <img src={notFound} alt="" />
            </div>
          </>
        )}
        {userAddCraft.map((craftCard) => (
          <MyArtCraftCard
            key={craftCard._id}
            craftCard={craftCard}
            userAddCraft={userAddCraft}
            setUserAddCraft={setUserAddCraft}
          />
        ))}
      </div>
    </div>
  );
};

export default MyArtCraftList;
