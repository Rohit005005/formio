"use client"
import Image from "next/image";
import React, { useEffect, useState } from "react";

function Hero() {
  const img1 = "/formioland1.png";
  const img2 = "/formioland2.png";
  const [currentImage, setCurrentImage] = useState(img1);

  const toggleImage = () => {
    setCurrentImage((prevImage) => (prevImage === img1 ? img2 : img1));
  };

  useEffect(() => {
    const intervalId = setInterval(toggleImage, 5000);
    return () => clearInterval(intervalId);
  }, []);
  return (
    <section className="bg-gray-50 animate-fade">
      <div className=" max-w-screen-xl px-4 py-10 lg:flex">
        <div className=" text-center">
          <div className="flex flex-col md:flex-row lg:flex-row gap-10">
            <div className="flex flex-col items-center justify-center">
              <h1 className="text-3xl font-extrabold sm:text-5xl">
                Create your form
                <strong className="font-extrabold text-primary sm:block">
                  In Seconds not Hours.
                </strong>
              </h1>

              <p className="mt-4 sm:text-xl/relaxed text-gray-500">
                Streamline your data collection with Formio
              </p>
              <p className=" sm:text-xl/relaxed text-gray-500">
                Create, customize, and connect forms with ease, then watch as
                responses flow seamlessly into your spreadsheet, ready for
                action!
              </p>
            </div>

            <div className="bg-white flex justify-center items-center h-[350px] md:h-[500px] lg:h-[500px] shadow-2xl p-5 ml-10 mr-10">
              <Image
                src={currentImage}
                width={800}
                height={800}
              />
            </div>
          </div>
          <div className="mt-14 flex flex-wrap justify-center gap-4">
            <a
              className="block w-full rounded bg-primary px-12 py-3 text-sm font-medium text-white shadow hover:bg-purple-800 focus:outline-none focus:ring active:bg-primary sm:w-auto"
              href="/dashboard"
            >
              Create AI Form
            </a>

            <a
              className="block w-full rounded px-12 py-3 text-sm font-medium text-primary shadow hover:text-purple-800 focus:outline-none focus:ring active:text-primary sm:w-auto"
              href="/dashboard"
            >
              Learn More
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;
