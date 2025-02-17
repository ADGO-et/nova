"use client";

import Image from "next/image";
import { Button } from "@/components/ui/button";
import { FaArrowAltCircleRight } from "react-icons/fa";
import MidSectionImage from "./midSectionImage";

const StreamingFeature = () => {
  return (
    <div className="bg-background text-foreground">
      <div className="flex flex-col md:flex-row items-center gap-8 p-10 max-w-5xl mx-auto mt-20 mb-20">
        {/* Image on the Top for small screens, on the Left for larger screens */}
        <div className="w-full sm:w-2/5 mt-[-50px] md:mr-20 sm:mb-0">
          {" "}
          {/* w-full for full-width on smaller screens */}
          <MidSectionImage />
        </div>

        {/* Text on the Right for larger screens */}
        <div className="w-full sm:w-3/5 text-center sm:text-left">
          <p className="text-red-500 mb-8 ml-6"> About us</p>
          <h1 className="text-2xl md:text-3xl font-bold">
            Benefit From Our Streaming
          </h1>
          <h1 className="text-2xl md:text-3xl font-bold">
            With Our <span className="text-blue-600"> Professional</span> Sites
          </h1>
          <div className="mt-6 ml-6">
            <p className="mt-2">
              Nova Streaming Services was founded with a clear purpose: to
              redefine how TV stations reach and engage their audiences. By
              delivering innovative technology, customized branding solutions,
              and unmatched reliability, we empower broadcasters to succeed in
              the rapidly evolving digital era.
            </p>
            <Button className="bg-green-500 text-white font-semibold py-3 px-4 rounded-2xl flex items-center space-x-2 hover:bg-blue-600 mt-3 ">
              <span className="text-sm">Explore More</span>
              <FaArrowAltCircleRight size={45} />
            </Button>

            <div className="mt-4">
              <h3 className="text-sm text-blue-500 font-semibold mb-2">
                OUR MISSION:
              </h3>
              <p>Helping broadcasters maximize</p>
              <p>their audience reach and revenue</p>
              <p>potential in today&apos;s fast-evolving</p>
              <p>digital-first world.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default StreamingFeature;
