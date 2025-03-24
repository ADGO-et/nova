import Image from "next/image";

const Stats = () => {
  return (
    <div className="py-12 bg-background text-foreground ">
      <div className="container mx-auto px-4">
        <div className="bg-blue-800 rounded-full p-4 sm:p-6 md:p-8 max-w-4xl mx-auto">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-2 ml-4 sm:ml-10 mr-4 sm:mr-8">
            {/* First Stat */}
            <div className="flex items-center pl-4 sm:pl-10">
              <Image
                src="/group.svg"
                alt="Icon 1"
                width={10}
                height={10}
                className="w-10 h-10 sm:w-12 sm:h-12 md:w-14 md:h-14 mr-2 sm:mr-4"
              />
              <div>
                <h2 className="text-2xl sm:text-3xl font-bold text-white">18M+</h2>
                <p className="text-sm sm:text-base text-gray-300">monthly impressions</p>
              </div>
            </div>

            {/* Second Stat */}
            <div className="flex items-center pl-4 sm:pl-0">
              <Image
                src="/download.svg"
                alt="Icon 2"
                width={10}
                height={10}
                className="w-10 h-10 sm:w-12 sm:h-12 md:w-14 md:h-14 mr-2 sm:mr-4"
              />
              <div>
                <h2 className="text-2xl sm:text-3xl font-bold text-white">170K+</h2>
                <p className="text-sm sm:text-base text-gray-300">Downloads</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Stats;