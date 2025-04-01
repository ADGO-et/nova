import Image from "next/image"
import type React from "react"

interface FeatureItemProps {
  icon: string
  title: string
  description: string
}

const FeatureGrid = () => {
  const features = [
    {
      icon: "/icon_container.svg",
      title: "Unlimited Viewers",
      description:
        "The platform supports unlimited simultaneous viewers with scalable streaming technology and offers replay features for on-demand access to past broadcasts and videos.",
    },
    {
      icon: "/replay.svg",
      title: "Replay Features",
      description:
        "Nova Stream is optimized for both Android and iOS smartphones. Download our app from the Google Play Store or the Apple App Store.",
    },
    {
      icon: "/branded.svg",
      title: "Branded Platforms",
      description:
        "A 'Branded Platform' is a customized digital space, like Nova or Mayya, featuring logos, design, and identity for a unique user and advertiser experience.",
    },
    {
      icon: "/cross.svg",
      title: "Cross-Platform Streaming",
      description:
        "The capability of a streaming service like Nova or Mayya to deliver content across various devices and operating systems, enhancing accessibility and user experience.",
    },
    {
      icon: "/ad.svg",
      title: "Ad Monetization",
      description:
        "The strategies and processes used by platforms like Nova and Mayya to generate revenue by displaying advertisements to their users.",
    },
    {
      icon: "/audience.svg",
      title: "Audience Analytics",
      description:
        "Platforms like Nova and Mayya use tools and processes to collect and analyze viewer data, offering insights into demographics, behavior, and preferences to optimize content and advertising.",
    },
  ]

  return (
    <section className="py-16">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {features.map((feature, index) => (
            <FeatureItem key={index} icon={feature.icon} title={feature.title} description={feature.description} />
          ))}
        </div>
      </div>
    </section>
  )
}

const FeatureItem: React.FC<FeatureItemProps> = ({ icon, title, description }) => {
  return (
    <div className="group h-full">
      <div className="h-full p-8 rounded-xl bg-gradient-to-br from-slate-800 to-slate-900 border border-slate-700/50 shadow-lg hover:shadow-xl transition-all duration-300 hover:translate-y-[-4px] hover:border-slate-600/50">
        <div className="flex items-start mb-5">
          <div className="flex-shrink-0 mr-5 p-3 rounded-lg bg-gradient-to-br from-indigo-500 to-purple-600 shadow-md">
            <Image
              src={icon || "/placeholder.svg"}
              alt={title}
              width={24}
              height={24}
              className="w-6 h-6 object-contain"
            />
          </div>
          <h3 className="text-xl font-bold text-white tracking-tight">{title}</h3>
        </div>
        <p className="text-slate-300 leading-relaxed">{description}</p>
      </div>
    </div>
  )
}

export default FeatureGrid

