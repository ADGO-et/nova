'use client';

import Image from 'next/image';

const StreamingLanding = () => {
  return (
    <div className="w-full min-h-screen bg-foreground">
      {/* Hero Section */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 p-8 max-w-6xl mx-auto">
        <div>
          <Image src="/blog/streaming1.png" alt="Streaming Poster" width={500} height={300} className="w-full rounded-lg" />
        </div>
        <div className="flex flex-col justify-center">
          <h1 className="text-3xl text-background font-bold">Stay Ahead in the Streaming Game.</h1>
          <p className="mt-2 text-background">New movies and TV shows at your fingertips.</p>
        </div>
      </div>

      {/* Content Sections */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 p-8 max-w-6xl mx-auto">
        <div className="flex flex-col justify-center order-2 md:order-1">
          <h2 className="text-2xl font-bold text-background">Lead the Way in Streaming Excellence.</h2>
          <p className="mt-2 text-background">Access the most exceptional content for top-notch entertainment.</p>
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
          <h2 className="text-2xl font-bold text-background">Innovate, Engage, and Dominate Streaming</h2>
          <p className="mt-2 text-background">Discover new innovations, experiences, and trends in streaming.</p>
        </div>
      </div>

      {/* Newsletter Section */}
      <div className="flex flex-col md:flex-row justify-evenly bg-blue-600 p-6 my-2 text-center">
        <div>
            <h2 className="text-2xl font-bold text-background">Join Our Newsletter</h2>
            <p className="mt-2 font-semibold">Subscribe for the latest updates and trends in the streaming world.</p>
        </div>
        <div className="mt-4 flex justify-center">
          <input type="email" placeholder="Enter your email" className="p-2 rounded-l-lg text-background bg-foreground w-64" />
          <button className="bg-background text-foreground px-4 py-2 rounded-r-lg">Subscribe</button>
        </div>
      </div>
    </div>
  );
};

export default StreamingLanding;
