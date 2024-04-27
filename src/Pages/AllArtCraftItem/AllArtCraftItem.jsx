import { useState } from "react";
import { useLoaderData } from "react-router-dom";
import AllArtCraftCard from "../../Components/AllArtCraftCard/AllArtCraftCard";

const AllArtCraftItem = () => {
  const allCraftLoaded = useLoaderData();

  const [allCraft, setAllCraft] = useState(allCraftLoaded);

  return (
    <div className="mt-6">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {allCraft.map((craft) => (
            <AllArtCraftCard key={craft._id} craft={craft} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default AllArtCraftItem;
