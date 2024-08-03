import Image from "next/image";
import React from "react";

const testimonials = [
  {
    text: "As a seasoned designer always on the lookout for innovative tools, Framer.com instantly grabbed my attention.",
    imageSrc: "/avatar-1.png",
    name: "Jamie Rivera",
    username: "@jamietechguru00",
  },
  {
    text: "Our team's productivity has skyrocketed since we started using this tool.",
    imageSrc: "/avatar-2.png",
    name: "Josh Smith",
    username: "@jjsmith",
  },
  {
    text: "This app has completely transformed how I manage my projects and deadlines.",
    imageSrc: "/avatar-3.png",
    name: "Morgan Lee",
    username: "@morganleewhiz",
  },
  {
    text: "I was amazed at how quickly we were able to integrate this app into our workflow.",
    imageSrc: "/avatar-4.png",
    name: "Casey Jordan",
    username: "@caseyj",
  },
  {
    text: "Planning and executing events has never been easier. This app helps me keep track of all the moving parts, ensuring nothing slips through the cracks.",
    imageSrc: "/avatar-5.png",
    name: "Taylor Kim",
    username: "@taylorkimm",
  },
  {
    text: "The customizability and integration capabilities of this app are top-notch.",
    imageSrc: "/avatar-6.png",
    name: "Riley Smith",
    username: "@rileysmith1",
  },
  {
    text: "Adopting this app for our team has streamlined our project management and improved communication across the board.",
    imageSrc: "/avatar-7.png",
    name: "Jordan Patels",
    username: "@jpatelsdesign",
  },
  {
    text: "With this app, we can easily assign tasks, track progress, and manage documents all in one place.",
    imageSrc: "/avatar-8.png",
    name: "Sam Dawson",
    username: "@dawsontechtips",
  },
  {
    text: "Its user-friendly interface and robust features support our diverse needs.",
    imageSrc: "/avatar-9.png",
    name: "Casey Harper",
    username: "@casey09",
  },
];

const firstcol = testimonials.slice(0, 3);
const secondcol = testimonials.slice(3, 6);
const thirdcol = testimonials.slice(6, 9);

function Testimonial() {
  return (
    <section className="bg-white mt-20">
      <div className="container">
        <div className="max-w-[540px] mx-auto">
          <div className="flex justify-center">
            <div className='className="text-sm inline-flex border border-[#222]/10 px-3 py-1 rounded-lg tracking-tight'>
              Testimonials
            </div>
          </div>
          <h2 className="text-center text-3xl sm:text-[54px] sm:leading-[60px] font-bold tracking-tighter bg-gradient-to-b from-black to-[#9d26d3] text-transparent bg-clip-text mt-5">
            What our users say
          </h2>
          <p className="text-center text-[22px] leading-[30px] tracking-tight text-[#010D3E] mt-5">
            From intuitive design to powerful features, our app has become an
            essential tool for users around the world
          </p>
        </div>
        <div className="flex justify-center gap-6">
          <div className="flex flex-col gap-6 mt-10 [mask-image:linear-gradient(to_bottom,transparent,black_25%,black_75%,transparent)]">
            {firstcol.map(({ text, imageSrc, name, username }) => (
              <div className="p-10 border-solid border-[#222222]/10 rounded-3xl shadow-[0_7px_14px_#EAEAEA] max-w-xs w-full">
                <div>{text}</div>
                <div className="flex items-center gap-2 mt-5">
                  <Image src={imageSrc} alt={name} height={40} width={40} />
                  <div className="flex flex-col">
                    <div className="font-medium tracking-tight leading-5">
                      {name}
                    </div>
                    <div className="tracking-tight leading-5">{username}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="hidden sm:flex flex-col gap-6 mt-10 [mask-image:linear-gradient(to_bottom,transparent,black_25%,black_75%,transparent)]">
            {secondcol.map(({ text, imageSrc, name, username }) => (
              <div className="p-10 border-solid border-[#222222]/10 rounded-3xl shadow-[0_7px_14px_#EAEAEA] max-w-xs w-full">
                <div>{text}</div>
                <div className="flex items-center gap-2 mt-5">
                  <Image src={imageSrc} alt={name} height={40} width={40} />
                  <div className="flex flex-col">
                    <div className="font-medium tracking-tight leading-5">
                      {name}
                    </div>
                    <div className="tracking-tight leading-5">{username}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="hidden lg:flex flex-col gap-6 mt-10 [mask-image:linear-gradient(to_bottom,transparent,black_25%,black_75%,transparent)]">
            {thirdcol.map(({ text, imageSrc, name, username }) => (
              <div className="p-10 border-solid border-[#222222]/10 rounded-3xl shadow-[0_7px_14px_#EAEAEA] max-w-xs w-full">
                <div>{text}</div>
                <div className="flex items-center gap-2 mt-5">
                  <Image src={imageSrc} alt={name} height={40} width={40} />
                  <div className="flex flex-col">
                    <div className="font-medium tracking-tight leading-5">
                      {name}
                    </div>
                    <div className="tracking-tight leading-5">{username}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default Testimonial;
