import Arrivals1 from "../../../public/Arrivals/Arrivals1.png";
import Arrivals2 from "../../../public/Arrivals/Arrivals2.png";
import Arrivals3 from "../../../public/Arrivals/Arrivals3.png";
import Arrivals4 from "../../../public/Arrivals/Arrivals4.png";
import Arrivals5 from "../../../public/Arrivals/Arrival5.png";
import Arrivals6 from "../../../public/Arrivals/Arrivals6.png";
import Arrivals7 from "../../../public/Arrivals/Arrivals7.png";
import Arrivals8 from "../../../public/Arrivals/Arrivals8.png";

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
            <h2 className="font-semibold text-lg">Wooden Dice</h2>
          </div>
          <div className="flex justify-center gap-4 items-center flex-col">
            <img src={Arrivals2} alt="" />
            <h2 className="font-semibold text-lg">Curly Willow Orb</h2>
          </div>
          <div className="flex justify-center gap-4 items-center flex-col">
            <img src={Arrivals3} alt="" />
            <h2 className="font-semibold text-lg">Deep Serving Bowl</h2>
          </div>
          <div className="flex justify-center gap-4 items-center flex-col">
            <img src={Arrivals4} alt="" />
            <h2 className="font-semibold text-lg">Ema White Vase</h2>
          </div>
        </div>
        <div className="my-10">
          <div className="grid lg:grid-cols-4 grid-cols-1">
            <div className="flex justify-center gap-4 items-center flex-col">
              <img src={Arrivals5} alt="" />
              <h2 className="font-semibold text-lg">Bear Security Blanket</h2>
            </div>
            <div className="flex justify-center gap-4 items-center flex-col">
              <img src={Arrivals6} alt="" />
              <h2 className="font-semibold text-lg">
                Candle & Diffuser Bundle
              </h2>
            </div>
            <div className="flex justify-center gap-4 items-center flex-col">
              <img src={Arrivals7} alt="" />
              <h2 className="font-semibold text-lg">Acai Canoe</h2>
            </div>
            <div className="flex justify-center gap-4 items-center flex-col">
              <img src={Arrivals8} alt="" />
              <h2 className="font-semibold text-lg">Wall Hook</h2>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NewArrivals;
