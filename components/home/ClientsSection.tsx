import Image from "next/image";
import { clients } from "@/constants/index"

const ClientsSection: React.FC = () => {
  return (
    <section className="text-white py-12 my-12" style={{ backgroundImage: 'url(/home/ourClients.png)' }}>
      <div className="text-center my-12 w-[75%] mx-auto">
        <h2 className="text-xl md:text-4xl font-bold">OUR CLIENTS</h2>
        <p className="text-sm mt-2">
          As a user, it is important to have a positive experience when using a website or app
        </p>
      </div>
      <div className="flex flex-wrap justify-center gap-16 md:w-[75%] mx-auto">
        {clients.map((client, index) => (
          <div
            key={index}
            className="bg-white p-4 py-3 rounded-full shadow-md flex items-center justify-center w-40 h-20"
          >
            <Image src={client.src} alt={client.name} width={180} height={70} />
          </div>
        ))}
      </div>
    </section>
  );
};

export default ClientsSection;
