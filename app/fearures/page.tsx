import { Button } from "@/components/ui/button";
import { FaArrowAltCircleRight } from "react-icons/fa";
import FeatureGrid from "./components/feature_grid";

const Services = () => {
  return (
    <div className="bg-white min-h-screen"> {/* Full height white background */}
      <div className="container mx-auto py-12 bg-white">
        <h2 className="text-3xl font-bold text-center mt-6 mb-6">Why Choose Nova?</h2> {/* Adjusted mt-10 to mt-6 and added mb-6 */}
        <FeatureGrid />
      </div>
    </div>
  );
};

export default Services;
