import { Calendar, Globe, Layers, Monitor, Radio, Video } from "lucide-react"

export function PlayoutServiceSection() {
  // Feature data array to make the grid logic cleaner
  const features = [
    {
      icon: Calendar,
      title: "Automated Scheduling",
      description:
        "Pre-set playlists with exact start times ensure uninterrupted streaming. Whether for 24/7 broadcasting or specific events, our scheduling system ensures your content plays exactly when you want it to.",
    },
    {
      icon: Radio,
      title: "Live Simulation",
      description:
        "Streams appear live, allowing real-time engagement. Viewers can interact with your content through comments and reactions just like a real live stream, increasing engagement.",
    },
    {
      icon: Globe,
      title: "Multi-Platform Broadcasting",
      description:
        "Stream to YouTube, Facebook, Twitch, or any RTMP destination. Reach your audience wherever they are by broadcasting simultaneously to multiple platforms with a single setup.",
    },
    {
      icon: Layers,
      title: "Cloud-Based",
      description:
        "Flexible deployment depending on infrastructure needs. Our cloud-based solution scales with your needs, eliminating the need for expensive hardware and technical maintenance.",
    },
    {
      icon: Monitor,
      title: "Custom Overlays & Branding",
      description:
        "Add logos, watermarks, or text overlays for a polished look. Maintain brand consistency with customizable overlays that make your streams look professional and uniquely yours.",
    },
    {
      icon: Video,
      title: "Advanced Content Management",
      description:
        "Organize and manage your video library with ease. Our intuitive dashboard makes it simple to upload, organize, and schedule your content for maximum efficiency.",
    },
  ]

  return (
    <section className="w-full md:w-[80%] mb-40 mx-auto bg-gradient-to-b from-background to-muted">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col justify-center space-y-4 max-w-[800px] mx-auto mb-16">
          <div className="space-y-2">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl text-center">Automated Playout Service</h2>
            <p className="text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed text-center">
              Stream pre-recorded videos as if they were live, creating a continuous, TV-style broadcast experience for
              your audience.
            </p>
          </div>
        </div>

        <div className="grid gap-8 md:grid-cols-2">
          {features.map((feature, index) => {
            const Icon = feature.icon
            // Check if this is the last item and if the total count is odd
            const isLastOdd = index === features.length - 1 && features.length % 2 !== 0

            return (
              <div key={index} className={`group ${isLastOdd ? "md:col-span-2 md:max-w-2xl md:mx-auto" : ""}`}>
                <div className="flex items-start gap-6 p-6 rounded-lg hover:bg-accent transition-colors">
                  <div className="flex-shrink-0 p-4 rounded-full bg-primary/10 text-primary">
                    <Icon className="h-8 w-8 text-blue-700"  />
                  </div>
                  <div className="space-y-2">
                    <h3 className="text-xl font-bold group-hover:text-primary transition-colors">{feature.title}</h3>
                    <p className="text-muted-foreground">{feature.description}</p>
                  </div>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}

