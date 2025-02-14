'use client';

import Image from 'next/image';

const StreamingLanding = () => {
  return (
    <div className="w-full min-h-screen bg-background">
      {/* Hero Section */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 p-8 max-w-6xl mx-auto">
        <div>
          <Image src="/blog/streaming1.png" alt="Streaming Poster" width={500} height={300} className="w-full rounded-lg" />
        </div>
        <div className="flex flex-col justify-center">
          <h1 className="text-3xl text-foreground font-bold">Stay Ahead in the Streaming Game.</h1>
          <p className="mt-2 text-foreground">New movies and TV shows at your fingertips.</p>
        </div>
      </div>

      {/* Content Sections */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 p-8 max-w-6xl mx-auto">
        <div className="flex flex-col justify-center order-2 md:order-1">
          <h2 className="text-2xl font-bold text-foreground">Lead the Way in Streaming Excellence.</h2>
          <p className="mt-2 text-foreground">Access the most exceptional content for top-notch entertainment.</p>
        </div>
        <div className='order-1 md:order-2'>
          <Image src="/blog/streaming2.png" alt="People Streaming" width={500} height={300} className="w-full rounded-lg" />
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 p-8 max-w-6xl mx-auto">
        <div>
          <Image src="/blog/streaming3.png" alt="Romantic Scene" width={500} height={300} className="w-full rounded-lg" />
        </div>
        <div className="flex flex-col justify-center">
          <h2 className="text-2xl font-bold text-ground">Innovate, Engage, and Dominate Streaming</h2>
          <p className="mt-2 text-ground">Discover new innovations, experiences, and trends in streaming.</p>
        </div>
      </div>

      {/* Newsletter Section */}
      <div className="flex flex-col md:flex-row justify-evenly bg-blue-800 p-8 py-16 my-6 text-center">
        <div className='flex flex-col items-start text-white'>
            <h2 className="text-3xl font-bold">Join Our Newsletter</h2>
            <p className="mt-2 ">Subscribe for the latest updates and trends in the streaming world.</p>
        </div>
        <div className="mt-4 flex justify-center bg-white rounded-lg">
          <input type="email" placeholder="Enter your email" className="px-2 rounded-l-lg text-black bg-white w-72" />
          <button className="bg-black text-white px-4 py-2 rounded-lg m-1">Subscribe Now</button>
        </div>
      </div>
    </div>
  );
};

export default StreamingLanding;
