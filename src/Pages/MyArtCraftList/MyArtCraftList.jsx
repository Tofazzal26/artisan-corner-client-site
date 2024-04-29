import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../AuthProvider/AuthProvider";
import MyArtCraftCard from "../../Components/MyArtCraftCard/MyArtCraftCard";
import notFound from "../../../public/DataNotFound/noFound.gif";

const MyArtCraftList = () => {
  const { user } = useContext(AuthContext);
  const [userAddCraft, setUserAddCraft] = useState([]);
  const [theCustomization, SetTheCustomization] = useState("");

  const handleCustomization = (e) => {
    SetTheCustomization(e.target.value);
  };

  const filterItem = theCustomization
    ? userAddCraft.filter((item) => item.customization === theCustomization)
    : userAddCraft;

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
          <select
            className="border-2 mt-4 p-4 outline-none"
            onChange={handleCustomization}
            value={theCustomization}
          >
            <option value="">All Customization</option>
            {Array.from(
              new Set(userAddCraft.map((item) => item.customization))
            ).map((customization) => (
              <option
                className="capitalize"
                key={customization}
                value={customization}
              >
                {customization}
              </option>
            ))}
          </select>
        </div>
        {userAddCraft.length === 0 && (
          <>
            <div className="flex justify-center items-center">
              <img src={notFound} alt="" />
            </div>
          </>
        )}
        {filterItem &&
          filterItem.map((craftCard) => (
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
