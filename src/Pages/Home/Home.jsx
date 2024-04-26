import { useState } from "react";
import FeaturedBlog from "../../Components/FeaturedBlog/FeaturedBlog";
import NewArrivals from "../../Components/NewArrivals/NewArrivals";
import Slider from "../../Components/Slider/Slider";
import { useLoaderData } from "react-router-dom";
import CraftItems from "../../Components/CraftItems/CraftItems";

const Home = () => {
  const loadedCraftData = useLoaderData();

  const [crafts, setCrafts] = useState(loadedCraftData);

  return (
    <div className="px-2">
      <div className="container mx-auto">
        <Slider />
        <div>
          <div className="my-14">
            <h1 className="text-center text-4xl font-semibold">
              Our Craft Items
            </h1>
          </div>
          <div className="grid grid-cols-1 gap-6  lg:grid-cols-3">
            {crafts.map((craft) => (
              <CraftItems key={craft._id} craft={craft} />
            ))}
          </div>
        </div>

        <NewArrivals />
        <FeaturedBlog />
      </div>
    </div>
  );
};

export default Home;
