import { useState } from "react";
import { NavLink, useLoaderData } from "react-router-dom";
import AllArtCraftCard from "../../Components/AllArtCraftCard/AllArtCraftCard";

const AllArtCraftItem = () => {
  const allCraftLoaded = useLoaderData();

  const [allCraft, setAllCraft] = useState(allCraftLoaded);

  return (
    <div className="mt-6">
      <div className="container mx-auto">
        <div className="overflow-x-auto">
          <table className="table table-base">
            <thead>
              <tr className="text-black">
                <th className="text-[22px]"></th>
                <th className="text-[22px]">Name</th>
                <th className="text-[22px]">Subcategory</th>
                <th className="text-[22px]">Price</th>
                <th className="text-[22px]">Rating</th>
                <th className="text-[22px]">Customization</th>
                <th className="text-[22px]">Stock Status</th>
                <th className="text-[22px]">Details</th>
              </tr>
            </thead>
            {allCraft.map((table) => (
              <tbody key={table._id}>
                <tr>
                  <th className="text-[18px] font-medium"></th>
                  <td className="text-[18px] font-medium">{table.itemName}</td>
                  <td className="text-[18px] font-medium">
                    {table.subcategory_name}
                  </td>
                  <td className="text-[18px] font-medium">${table.price}</td>
                  <td className="text-[18px] font-medium">{table.rating}</td>
                  <td className="text-[18px] font-medium">
                    {table.customization}
                  </td>
                  <td className="text-[18px] font-medium">
                    {table.stockStatus}
                  </td>

                  <td className="text-[18px] text-[#eea12c] font-medium">
                    <NavLink to={`/craftDetails/${table._id}`}>Details</NavLink>
                  </td>
                </tr>
              </tbody>
            ))}
          </table>
        </div>
      </div>
    </div>
  );
};

export default AllArtCraftItem;
