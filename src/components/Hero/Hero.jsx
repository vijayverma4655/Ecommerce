import React from "react";
import Image1 from "../../assets/Hero/Image1.png";
import Slider from "react-slick";

const ImageList = [
  {
    id: 1,
    img: Image1,
    title: "Upto 50% off on all Men's Wear",
    description:
      " Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sunt dicta repudiandae, veritatis sit esse ipsum quibusdam nesciunt beatae fugit maxime sint quas aperiam sequi. Officia repudiandae natus nobis est provident!",
  },
  {
    id: 1,
    img: Image1,
    title: "Upto 30% off on all Men's Wear",
    description:
      " Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sunt dicta repudiandae, veritatis sit esse ipsum quibusdam nesciunt beatae fugit maxime sint quas aperiam sequi. Officia repudiandae natus nobis est provident!",
  },
  {
    id: 1,
    img: Image1,
    title: "Upto 70% off on all Men's Wear",
    description:
      " Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sunt dicta repudiandae, veritatis sit esse ipsum quibusdam nesciunt beatae fugit maxime sint quas aperiam sequi. Officia repudiandae natus nobis est provident!",
  },
];
const Hero = ({handleOrderPopup}) => {
  var settings = {
    dots: false,
    arrows: false,
    Infinite: true,
    speed: 800,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 4000,
    cssEase: "ease-in-out",
    pauseOnHover: false,
    pauseOnFocus: true,
  };

  return (
    <div className="relative overflow-hidden min-h-[550px] sm:min-h-[650px] bg-gray-100 flex justify-center items-center dark:bg-gray-950 dark:text-white duration-200" id="home">
      {/* background pattern */}

      <div className="h-[700px] w-[700px] bg-primary/40 absolute -top-1/2 right-0 rounded-3xl rotate-45 -z-9"></div>
      {/* hero section */}

      <div className="container pb-8 sm:pb-0">
        <Slider {...settings}>
          {ImageList.map((data) => (
            <div>
              <div className="grid grid-cols-1 sm:grid-cols-2">
                {/* text content section */}
                <div className="flex flex-col justify-center gap-4 pt-12 sm:pt-0 text-center sm:text-left order-2 sm:order-1 relative z-10 ">
                  <h1 
                  data-aos="zoom-out"
                  data-aos-duration="500"
                data-aos-once="true"
                  className="text-5xl sm:text-6xl lg:text-7xl font-bold">
                   {data.title}
                  </h1>
                  <p 
                   data-aos="fade-up"
                   data-aos-duration="500"
                 data-aos-delay="100"
                  className="text-sm">
                    {data.description}
                  </p>

                  <div
                   data-aos="fade-up"
                   data-aos-duration="500"
                 data-aos-delay="300"
                  >
                    <button onClick={handleOrderPopup}
                    className="bg-gradient-to-r from-primary to-secondary hover:scale-105 duration-200 text-white py-2 px-4 rounded-full ">
                      Order Now
                    </button>
                  </div>
                </div>
                {/* image section */}
                <div 
                data-aos="zoom-in"
                data-aos-once="true"
                className="order-1 sm:order-2">
                  <div className="relative z-10">
                    <img
                      src={data.img}
                      alt=""
                      className="w-[250px] h-[250px] sm:h-[300px] sm:w-[300px] sm:scale-120 object-contain mx-auto"
                    />
                  </div>
                </div>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
};

export default Hero;
