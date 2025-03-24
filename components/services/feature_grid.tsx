import Image from 'next/image';
import React from 'react';

const FeatureGrid = () => {
  return (
    <div className="container mx-auto px-4 py-12">
      {/* Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
        {/* Row 1 */}
        <FeatureItem
          icon="/icon_container.svg"
          title="Unlimited Viewers"
          description="The platform supports unlimited simultaneous viewers with scalable streaming technology and offers replay features for on-demand access to past broadcasts and videos."
        />
        <FeatureItem
          icon="/replay.svg"
          title="Replay Features"
          description="Nova Stream is optimized for both Android and iOS smartphones. Download our app from the Google Play Store or the Apple App Store"
        />
        <FeatureItem
          icon="/branded.svg"
          title="Branded Platforms"
          description="A 'Branded Platform' is a customized digital space, like Nova or Mayya, featuring logos, design, and identity for a unique user and advertiser experience."
        />

        {/* Row 2 */}
        <FeatureItem
          icon="/cross.svg"
          title="Cross-Platform Streaming"
          description="the capability of a streaming service like Nova or Mayya to deliver content across various devices and operating systems, enhancing accessibility and user experience"
        />
        <FeatureItem
          icon="/ad.svg"
          title="Ad Monetization"
          description="the strategies and processes used by platforms like Nova and Mayya to generate revenue by displaying advertisements to their users."
        />
        <FeatureItem
          icon="/audience.svg"
          title="Audience Analytics"
          description="Platforms like Nova and Mayya use tools and processes to collect and analyze viewer data, offering insights into demographics, behavior, and preferences to optimize content and advertising."
        />
      </div>
    </div>
  );
};

const FeatureItem = ({ icon, title, description }: { icon: string; title: string; description: string }) => {
  return (
    <div className="flex justify-center items-center">
      <div className="p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow bg-gray-900 flex flex-col justify-start items-start w-[320px] h-auto"> {/* Fixed width, auto height */}
        <div className="flex items-center mb-4">
          <Image src={icon} alt={title} width={12} height={12} className="w-12 h-12 mr-4" />
          <h3 className="text-white text-xl font-bold text-left">{title}</h3> {/* Aligned title to the left */}
        </div>
        <p className="text-white text-left">{description}</p> {/* Aligned description to the left */}
      </div>
    </div>
  );
};

export default FeatureGrid;
