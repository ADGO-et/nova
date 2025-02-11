import React from "react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"
import { testimonials } from "@/constants";
interface TestimonialProps {
  backgroundImage: string;
}
interface TestimonialCardProps {
  text: string;
}

const TestimonialCard: React.FC<TestimonialCardProps> = ({ text }) => {
  return (
    <div className="border-2 border-blue-600 p-6 rounded-lg">
      <p className="text-gray-700 italic">{text}</p>
    </div>
  );
};

const Testimonials: React.FC<TestimonialProps> = ({ backgroundImage }) => {
  return (
    <div className="bg-cover bg-center  py-20 px-20" style={{ backgroundImage: `url(${backgroundImage})` }}>
      <div className="text-center mb-16">
        <h2 className="text-4xl font-bold text-blue-600">
          Creating A Community of Life Long Relations
        </h2>
        <p className="text-xl font-medium text-blue-500">Testimonials</p>
      </div>
      <Carousel
        opts={{
          align: "start",
        }}
        className="w-[80%] mx-auto"
      >
        <CarouselContent>
          {testimonials.slice(0, 5).map((testimonial, index) => (
            <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/3">
              <TestimonialCard text={testimonial.text} />
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious className="text-white bg-blue-400"/>
        <CarouselNext className="text-white bg-blue-400"/>
      </Carousel>
    </div>
  );
};

export default Testimonials;


