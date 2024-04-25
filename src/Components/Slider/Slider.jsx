import React, { useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import slider1 from "../../../public/slider/slide1.png";
import slider2 from "../../../public/slider/slider2.png";
import slider3 from "../../../public/slider/slide3.png";
import slider4 from "../../../public/slider/slide4.png";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Autoplay, Pagination, Navigation } from "swiper/modules";

const Slider = () => {
  return (
    <div className="mt-6">
      <div data-aos="fade-right" data-aos-duration="1000" data-aos-delay="1200">
        <Swiper
          spaceBetween={30}
          centeredSlides={true}
          autoplay={{
            delay: 2500,
            disableOnInteraction: false,
          }}
          pagination={{
            clickable: true,
          }}
          navigation={true}
          modules={[Autoplay, Pagination, Navigation]}
          className="mySwiper"
        >
          <SwiperSlide>
            <div
              className="w-full h-[700px]"
              style={{
                backgroundImage: `url(${slider1})`,
                backgroundRepeat: "no-repeat",
                backgroundSize: "cover",
                backgroundPosition: "center",
              }}
            >
              <div className="flex flex-col justify-center text-center items-center">
                <div className="mt-[150px] lg:mt-[250px] text-white space-y-2">
                  <h1 className="text-xl lg:text-5xl font-semibold">
                    Unleash Your Inner Artist: Create a Mesmerizing Galaxy
                    Painting
                  </h1>
                  <p className="text-base lg:text-2xl lg:w-[1200px] mx-auto">
                    Let your creativity take flight as we embark on a journey to
                    paint a stunning galaxy. Learn simple techniques to create
                    swirling nebulas, twinkling stars, and a breathtaking cosmic
                    masterpiece.
                  </p>
                  <div className="space-x-4 space-y-4 lg:space-y-0">
                    <button className="px-6 py-3 text-lg font-semibold bg-[#eea12c] rounded-md">
                      All Art item
                    </button>
                    <button className="px-6 py-3 text-lg font-semibold bg-[#eea12c] rounded-md">
                      Add Craft Item
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div
              className="w-full h-[700px]"
              style={{
                backgroundImage: `url(${slider2})`,
                backgroundRepeat: "no-repeat",
                backgroundSize: "cover",
                backgroundPosition: "center",
              }}
            >
              <div className="flex flex-col justify-center text-center items-center">
                <div className="mt-[150px] lg:mt-[250px] text-white space-y-2">
                  <h1 className="text-xl lg:text-5xl font-semibold">
                    Unleash Your Inner Artist: Create a Mesmerizing Galaxy
                    Painting
                  </h1>
                  <p className="text-base lg:text-2xl lg:w-[1200px] mx-auto">
                    Let your creativity take flight as we embark on a journey to
                    paint a stunning galaxy. Learn simple techniques to create
                    swirling nebulas, twinkling stars, and a breathtaking cosmic
                    masterpiece.
                  </p>
                  <div className="space-x-4 space-y-4 lg:space-y-0">
                    <button className="px-6 py-3 text-lg font-semibold bg-[#eea12c] rounded-md">
                      All Art item
                    </button>
                    <button className="px-6 py-3 text-lg font-semibold bg-[#eea12c] rounded-md">
                      Add Craft Item
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div
              className="w-full h-[700px]"
              style={{
                backgroundImage: `url(${slider3})`,
                backgroundRepeat: "no-repeat",
                backgroundSize: "cover",
                backgroundPosition: "center",
              }}
            >
              <div className="flex flex-col justify-center text-center items-center">
                <div className="mt-[150px] lg:mt-[250px] text-white space-y-2">
                  <h1 className="text-xl lg:text-5xl font-semibold">
                    Unleash Your Inner Artist: Create a Mesmerizing Galaxy
                    Painting
                  </h1>
                  <p className="text-base lg:text-2xl lg:w-[1200px] mx-auto">
                    Let your creativity take flight as we embark on a journey to
                    paint a stunning galaxy. Learn simple techniques to create
                    swirling nebulas, twinkling stars, and a breathtaking cosmic
                    masterpiece.
                  </p>
                  <div className="space-x-4 space-y-4 lg:space-y-0">
                    <button className="px-6 py-3 text-lg font-semibold bg-[#eea12c] rounded-md">
                      All Art item
                    </button>
                    <button className="px-6 py-3 text-lg font-semibold bg-[#eea12c] rounded-md">
                      Add Craft Item
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div
              className="w-full h-[700px]"
              style={{
                backgroundImage: `url(${slider4})`,
                backgroundRepeat: "no-repeat",
                backgroundSize: "cover",
                backgroundPosition: "center",
              }}
            >
              <div className="flex flex-col justify-center text-center items-center">
                <div className="mt-[150px] lg:mt-[250px] text-white space-y-2">
                  <h1 className="text-xl lg:text-5xl font-semibold">
                    Unleash Your Inner Artist: Create a Mesmerizing Galaxy
                    Painting
                  </h1>
                  <p className="text-base lg:text-2xl lg:w-[1200px] mx-auto">
                    Let your creativity take flight as we embark on a journey to
                    paint a stunning galaxy. Learn simple techniques to create
                    swirling nebulas, twinkling stars, and a breathtaking cosmic
                    masterpiece.
                  </p>
                  <div className="space-x-4 space-y-4 lg:space-y-0">
                    <button className="px-6 py-3 text-lg font-semibold bg-[#eea12c] rounded-md">
                      All Art item
                    </button>
                    <button className="px-6 py-3 text-lg font-semibold bg-[#eea12c] rounded-md">
                      Add Craft Item
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </SwiperSlide>
        </Swiper>
      </div>
    </div>
  );
};

export default Slider;
