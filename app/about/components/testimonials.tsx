import React from "react";

interface TestimonialProps {
  backgroundImage: string;
}

const Testimonials: React.FC<TestimonialProps> = ({ backgroundImage }) => {
  return (
    <div
      className="bg-cover bg-center py-20 px-20" // Added horizontal padding here (px-20)
      style={{ backgroundImage: `url(${backgroundImage})` }}
    >
      <div className="text-center mb-16">
        <h2 className="text-4xl font-bold text-blue-600">
          Creating A Community of Life Long Relations
        </h2>
        <p className="text-xl font-medium text-blue-500">Testimonials</p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {/* Testimonial 1 */}
        <div className="border-2 border-blue-600 p-6 rounded-lg">
          <p className="text-gray-700 italic">
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed auctor
            orci a dui tempus, sit amet egestas arcu eleifend."
          </p>
        </div>

        {/* Testimonial 2 */}
        <div className="border-2 border-blue-600 p-6 rounded-lg">
          <p className="text-gray-700 italic">
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla
            facilisi. Curabitur sit amet felis nec lorem volutpat dapibus."
          </p>
        </div>

        {/* Testimonial 3 */}
        <div className="border-2 border-blue-600 p-6 rounded-lg">
          <p className="text-gray-700 italic">
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec vitae
            felis sit amet ligula tempor sollicitudin at ac arcu."
          </p>
        </div>
      </div>
    </div>
  );
};

export default Testimonials;
