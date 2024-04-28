import { useState } from "react";
import FeaturedBlog from "../../Components/FeaturedBlog/FeaturedBlog";
import NewArrivals from "../../Components/NewArrivals/NewArrivals";
import Slider from "../../Components/Slider/Slider";
import { useLoaderData } from "react-router-dom";
import CraftItems from "../../Components/CraftItems/CraftItems";
import { Typewriter } from "react-simple-typewriter";

const Home = () => {
  const loadedCraftData = useLoaderData();

  const [crafts, setCrafts] = useState(loadedCraftData);

  return (
    <div className="px-2">
      <div className="container mx-auto">
        <Slider />
        <div>
          <div className="my-14 text-center">
            <label className="lg:text-xl md:text-base text-sm font-semibold ">
              Select Subcategory
            </label>
            <br />
            <select className="lg:text-lg md:text-base text-sm my-4 font-semibold border-2 px-12 rounded-md border-gray-400 py-1">
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
          </div>
          <div className="my-12 space-y-2">
            <h1 className="text-center text-4xl font-semibold">
              Our Craft and Art Items
            </h1>
            <h3 className="text-center text-lg w-[700px] mx-auto font-semibold">
              <Typewriter
                cursor
                cursorBlinking
                delaySpeed={1000}
                deleteSpeed={25}
                loop={0}
                typeSpeed={75}
                words={[
                  "Welcome to",
                  "Artisans Corner",
                  "Art and craft encompass a vast array of creative activities that involve making things by hand. They often involve a blend of skill imagination and innovation. Here a breakdown of each",
                ]}
              />
            </h3>
          </div>
          <div className="grid grid-cols-1 gap-6  lg:grid-cols-3">
            {crafts.length > 6
              ? crafts
                  .map((craft) => <CraftItems key={craft._id} craft={craft} />)
                  .slice(0, 6)
              : crafts.map((craft) => (
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
