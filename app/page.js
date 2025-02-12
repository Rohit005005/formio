import { Button } from "@/components/ui/button";
import Image from "next/image";
import Hero from "./_components/Hero";
import Hero2 from "./_components/Hero2";
import ProductShow from "./_components/ProductShow";
import Testimonials from "./_components/Testimonial";
import Free from "./_components/Free";
import LandingHeader from "./_components/LandingHeader";

export default function Home() {
  return (
    <div>
      <LandingHeader />
      <Hero2 />
      <ProductShow />
      <Testimonials />
      <Free />
    </div>
  );
}
