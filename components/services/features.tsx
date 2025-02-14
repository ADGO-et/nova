import FeatureGrid from "./feature_grid";

const Features = () => {
  return (
    <div className="bg-background min-h-screen"> {/* Full height foreground background */}
      <div className="container mx-auto py-12 bg-background text-foreground">
        <h2 className="text-3xl font-bold text-center mt-6 mb-6">Why Choose Nova?</h2> {/* Adjusted mt-10 to mt-6 and added mb-6 */}
        <FeatureGrid />
      </div>
    </div>
  );
};

export default Features;
