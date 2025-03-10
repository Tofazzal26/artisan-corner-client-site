import { Typewriter } from "react-simple-typewriter";
import blog1 from "../../../public/feature/blog1.png";
import blog2 from "../../../public/feature/blog2.png";
import blog3 from "../../../public/feature/blog3.png";
import blog4 from "../../../public/feature/blog4.png";

const FeaturedBlog = () => {
  return (
    <div>
      <div className="my-16">
        <div className="space-y-2">
          <h1 className="text-center text-4xl font-semibold">Featured Blog</h1>
          <h3 className="text-center text-lg lg:w-[700px] mx-auto font-semibold">
            <Typewriter
              cursor
              cursorBlinking
              delaySpeed={1000}
              deleteSpeed={25}
              loop={0}
              typeSpeed={75}
              words={[
                "Art and craft encompass a vast array of creative activities that involve making things by hand. They often involve a blend of skill imagination and innovation. Here a breakdown of each",
              ]}
            />
          </h3>
        </div>
      </div>

      <div>
        <div className="flex items-center lg:flex-row flex-col justify-between">
          <div>
            <img className="h-[450px]" src={blog2} alt="" />
          </div>
          <div className="space-y-8">
            <p className=" font-semibold">
              AUG{" "}
              <span className="text-red-500">
                <Typewriter
                  cursor
                  cursorBlinking
                  delaySpeed={1000}
                  loop={0}
                  typeSpeed={75}
                  words={["2024"]}
                />
              </span>
            </p>
            <h2 className="text-2xl font-semibold lg:w-[700px] leading-[40px]">
              Art is a broad term that encompasses the creation of visual,
              auditory, or performing artifacts, expressing the author's
              imaginative or technical concept.
            </h2>
            <button className="text-xl font-semibold bg-[#eea12c] text-white px-6 py-3">
              Read More
            </button>
          </div>
        </div>
      </div>
      <div>
        <div className="flex items-center lg:flex-row flex-col gap-[130px]">
          <div>
            <div className="space-y-8">
              <p className=" font-semibold">
                AUG{" "}
                <span className="text-red-500">
                  <Typewriter
                    cursor
                    cursorBlinking
                    delaySpeed={1000}
                    loop={0}
                    typeSpeed={75}
                    words={["2024"]}
                  />
                </span>
              </p>
              <h2 className="text-2xl font-semibold lg:w-[700px] leading-[40px]">
                Paint is a liquid that is applied to a surface (such as a
                canvas, wall, wood, or metal) to create an image, provide
                protection, or add decoration. Paint is made up of a pigment
                (which gives the paint its color)
              </h2>
              <button className="text-xl font-semibold bg-[#eea12c] text-white px-6 py-3">
                Read More
              </button>
            </div>
          </div>
          <div>
            <img className="h-[450px]" src={blog1} alt="" />
          </div>
        </div>
      </div>

      <div>
        <div className="flex items-center lg:flex-row flex-col justify-between">
          <div>
            <img className="h-[450px]" src={blog3} alt="" />
          </div>
          <div className="space-y-8">
            <p className=" font-semibold">
              AUG{" "}
              <span className="text-red-500">
                <Typewriter
                  cursor
                  cursorBlinking
                  delaySpeed={1000}
                  loop={0}
                  typeSpeed={75}
                  words={["2024"]}
                />
              </span>
            </p>
            <h2 className="text-2xl font-semibold lg:w-[700px] leading-[40px]">
              Tempera paint A water-based paint that is made with pigments
              suspended in a glue binder Tempera paint is a good choice for
              children art projects because it is easy to use and clean up
            </h2>
            <button className="text-xl font-semibold bg-[#eea12c] text-white px-6 py-3">
              Read More
            </button>
          </div>
        </div>
      </div>
      <div>
        <div className="flex items-center lg:flex-row flex-col gap-[130px]">
          <div>
            <div className="space-y-8">
              <p className=" font-semibold">
                AUG{" "}
                <span className="text-red-500">
                  <Typewriter
                    cursor
                    cursorBlinking
                    delaySpeed={1000}
                    loop={0}
                    typeSpeed={75}
                    words={["2024"]}
                  />
                </span>
              </p>
              <h2 className="text-2xl font-semibold lg:w-[700px] leading-[40px]">
                Acrylic paint: A water-based paint that is fast-drying and
                versatile. It can be used on a variety of surfaces and can be
                thinned with water or used thick for a more textured effect.
              </h2>
              <button className="text-xl font-semibold bg-[#eea12c] text-white px-6 py-3">
                Read More
              </button>
            </div>
          </div>
          <div>
            <img className="h-[450px]" src={blog4} alt="" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default FeaturedBlog;
