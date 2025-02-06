import React from 'react';

const FeatureGrid = () => {
  return (
    <div className="container mx-auto px-4 py-12">
      {/* Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {/* Row 1 */}
        <FeatureItem
          icon="/icon_container.svg"
          title="Unlimited Viewers"
          description="Nova Stream is optimized for both Android and iOS smartphones. Download our app from the Google Play Store or the Apple App Store"
        />
        <FeatureItem
          icon="/replay.svg"
          title="Replay Features"
          description="Nova Stream is optimized for both Android and iOS smartphones. Download our app from the Google Play Store or the Apple App Store"
        />
        <FeatureItem
          icon="/branded.svg"
          title="Branded Platforms"
          description="Nova Stream is optimized for both Android and iOS smartphones. Download our app from the Google Play Store or the Apple App Store"
        />

        {/* Row 2 */}
        <FeatureItem
          icon="/cross.svg"
          title="Cross-Platform Streaming"
          description="Nova Stream is optimized for both Android and iOS smartphones. Download our app from the Google Play Store or the Apple App Store"
        />
        <FeatureItem
          icon="/ad.svg"
          title="Ad Monetization"
          description="Nova Stream is optimized for both Android and iOS smartphones. Download our app from the Google Play Store or the Apple App Store"
        />
        <FeatureItem
          icon="/audience.svg"
          title="Audience Analytics"
          description="Nova Stream is optimized for both Android and iOS smartphones. Download our app from the Google Play Store or the Apple App Store"
        />
      </div>
    </div>
  );
};

const FeatureItem = ({ icon, title, description }: { icon: string; title: string; description: string }) => {
  return (
    <div className="flex justify-center items-center">
      <div className="p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow bg-[#0F0F0F] flex flex-col justify-start items-start w-[320px] h-auto"> {/* Fixed width, auto height */}
        <div className="flex items-center mb-4">
          <img src={icon} alt={title} className="w-12 h-12 mr-4" />
          <h3 className="text-white text-xl font-bold text-left">{title}</h3> {/* Aligned title to the left */}
        </div>
        <p className="text-gray-300 text-left">{description}</p> {/* Aligned description to the left */}
      </div>
    </div>
  );
};

export default FeatureGrid;
