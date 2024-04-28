import Arrivals1 from "../../../public/Arrivals/Arrivals1.png";
import Arrivals2 from "../../../public/Arrivals/Arrivals2.png";
import Arrivals3 from "../../../public/Arrivals/Arrivals3.png";
import Arrivals4 from "../../../public/Arrivals/Arrivals4.png";
import Arrivals5 from "../../../public/Arrivals/Arrival5.png";
import Arrivals6 from "../../../public/Arrivals/Arrivals6.png";
import Arrivals7 from "../../../public/Arrivals/Arrivals7.png";
import Arrivals8 from "../../../public/Arrivals/Arrivals8.png";
import { Typewriter } from "react-simple-typewriter";

const NewArrivals = () => {
  return (
    <div>
      <div className="my-16">
        <h1 className="text-center text-4xl font-semibold">New Arrivals</h1>
      </div>

      <div>
        <div className="grid lg:grid-cols-4 grid-cols-1">
          <div className="flex justify-center gap-4 items-center flex-col">
            <img src={Arrivals1} alt="" />
            <h2 className="font-semibold text-lg">
              Wooden{" "}
              <span className="text-red-500">
                <Typewriter
                  cursor
                  cursorBlinking
                  delaySpeed={1000}
                  loop={0}
                  typeSpeed={75}
                  words={["Dice"]}
                />
              </span>
            </h2>
          </div>
          <div className="flex justify-center gap-4 items-center flex-col">
            <img src={Arrivals2} alt="" />
            <h2 className="font-semibold text-lg">
              Curly Willow{" "}
              <span className="text-red-500">
                <Typewriter
                  cursor
                  cursorBlinking
                  delaySpeed={1000}
                  loop={0}
                  typeSpeed={75}
                  words={["Orb"]}
                />
              </span>
            </h2>
          </div>
          <div className="flex justify-center gap-4 items-center flex-col">
            <img src={Arrivals3} alt="" />
            <h2 className="font-semibold text-lg">
              Deep Serving{" "}
              <span className="text-red-500">
                <Typewriter
                  cursor
                  cursorBlinking
                  delaySpeed={1000}
                  loop={0}
                  typeSpeed={75}
                  words={["Bowl"]}
                />
              </span>
            </h2>
          </div>
          <div className="flex justify-center gap-4 items-center flex-col">
            <img src={Arrivals4} alt="" />
            <h2 className="font-semibold text-lg">
              Ema White{" "}
              <span className="text-red-500">
                <Typewriter
                  cursor
                  cursorBlinking
                  delaySpeed={1000}
                  loop={0}
                  typeSpeed={75}
                  words={["Vase"]}
                />
              </span>
            </h2>
          </div>
        </div>
        <div className="my-10">
          <div className="grid lg:grid-cols-4 grid-cols-1">
            <div className="flex justify-center gap-4 items-center flex-col">
              <img src={Arrivals5} alt="" />
              <h2 className="font-semibold text-lg">
                Bear Security{" "}
                <span className="text-red-500">
                  <Typewriter
                    cursor
                    cursorBlinking
                    delaySpeed={1000}
                    loop={0}
                    typeSpeed={75}
                    words={["Blanket"]}
                  />
                </span>
              </h2>
            </div>
            <div className="flex justify-center gap-4 items-center flex-col">
              <img src={Arrivals6} alt="" />
              <h2 className="font-semibold text-lg">
                Candle & Diffuser{" "}
                <span className="text-red-500">
                  <Typewriter
                    cursor
                    cursorBlinking
                    delaySpeed={1000}
                    loop={0}
                    typeSpeed={75}
                    words={["Bundle"]}
                  />
                </span>
              </h2>
            </div>
            <div className="flex justify-center gap-4 items-center flex-col">
              <img src={Arrivals7} alt="" />
              <h2 className="font-semibold text-lg">
                Acai{" "}
                <span className="text-red-500">
                  <Typewriter
                    cursor
                    cursorBlinking
                    delaySpeed={1000}
                    loop={0}
                    typeSpeed={75}
                    words={["Canoe"]}
                  />
                </span>
              </h2>
            </div>
            <div className="flex justify-center gap-4 items-center flex-col">
              <img src={Arrivals8} alt="" />
              <h2 className="font-semibold text-lg">
                Wall{" "}
                <span className="text-red-500">
                  <Typewriter
                    cursor
                    cursorBlinking
                    delaySpeed={1000}
                    loop={0}
                    typeSpeed={75}
                    words={["Hook"]}
                  />
                </span>
              </h2>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NewArrivals;
