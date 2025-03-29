'use client';
import Image from "next/image";
import { clients } from "@/constants/index"
import Marquee from 'react-fast-marquee'

const ClientsSection: React.FC = () => {
  return (
    <section id="clients" className="text-white py-12 my-12" style={{ backgroundImage: 'url(/home/ourClients.png)' }}>
      <div className="text-center my-12 w-[75%] mx-auto">
        <h2 className="text-xl md:text-4xl font-bold">OUR CLIENTS</h2>
      </div>
      <Marquee direction="right" speed={50} pauseOnHover className='mb-4'>
        {clients.map((client, index) => (
          <div
            key={index}
            className="bg-white px-4 py-0 mx-8 rounded-full shadow-md flex items-center justify-center w-64 h-28 relative"
          >
            <Image src={client.src} alt={client.name} fill className={`rounded-full object-contain ${client.name === "Websprix" ? "py-3" : ""}  ${client.name === "RingCloud" ? "py-5" : ""}`} />
          </div>
        ))}
      </Marquee>
    </section>
  );
};

export default ClientsSection;
