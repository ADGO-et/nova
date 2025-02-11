import Image from "next/image";
import { clients } from "@/constants/index"
import Marquee from 'react-fast-marquee'

const ClientsSection: React.FC = () => {
  return (
    <section className="text-white py-12 my-12" style={{ backgroundImage: 'url(/home/ourClients.png)' }}>
      <div className="text-center my-12 w-[75%] mx-auto">
        <h2 className="text-xl md:text-4xl font-bold">OUR CLIENTS</h2>
      </div>
      <Marquee direction="right" speed={50} pauseOnHover className='mb-4'>
        {clients.map((client, index) => (
          <div
            key={index}
            className="bg-white px-4 py-0 mx-8 rounded-full shadow-md flex items-center justify-center w-40 h-16"
          >
            <Image src={client.src} alt={client.name} width={180} height={70} />
          </div>
        ))}
      </Marquee>

      <Marquee direction="left" speed={50} pauseOnHover className="mt-4">
        {clients.map((client, index) => (
          <div
            key={index}
            className="bg-white px-4 py-0 mx-8 rounded-full shadow-md flex items-center justify-center w-40 h-16"
          >
            <Image src={client.src} alt={client.name} width={180} height={70} />
          </div>
        ))}
      </Marquee>
    </section>
  );
};

export default ClientsSection;
