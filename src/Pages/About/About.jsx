import AboutBanner from "../../../public/About/aboutBanner.png";
import what1 from "../../../public/About/What1.png";
import what2 from "../../../public/About/What2.png";
import what3 from "../../../public/About/What3.png";
import what4 from "../../../public/About/what4.png";
import what5 from "../../../public/About/What5.png";
import what6 from "../../../public/About/What6.png";
const About = () => {
  return (
    <div>
      <div>
        <h1 className="text-4xl text-center my-12 font-semibold">
          Our Collection
        </h1>
        <div className="flex justify-center items-center">
          <img src={AboutBanner} alt="" />
        </div>
      </div>
      <div className="container mx-auto">
        <h1 className="text-4xl text-center my-12 font-semibold">What We Do</h1>
        <div className="grid grid-cols-1 gap-8 lg:grid-cols-3">
          <div className="flex justify-center flex-col items-center">
            <img src={what1} alt="" />
            <p className="text-2xl mt-6 font-semibold">Water Color Painting</p>
          </div>
          <div className="flex justify-center flex-col items-center">
            <img src={what2} alt="" />
            <p className="text-2xl mt-6 font-semibold">Water Color Painting</p>
          </div>
          <div className="flex justify-center flex-col items-center">
            <img src={what3} alt="" />
            <p className="text-2xl mt-6 font-semibold">Water Color Painting</p>
          </div>
          <div className="flex justify-center flex-col items-center">
            <img src={what4} alt="" />
            <p className="text-2xl mt-6 font-semibold">Water Color Painting</p>
          </div>
          <div className="flex justify-center flex-col items-center">
            <img src={what5} alt="" />
            <p className="text-2xl mt-6 font-semibold">Water Color Painting</p>
          </div>
          <div className="flex justify-center flex-col items-center">
            <img src={what6} alt="" />
            <p className="text-2xl mt-6 font-semibold">Water Color Painting</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
