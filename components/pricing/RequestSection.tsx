import React from "react";

const RequestQuote: React.FC = () => {
  return (
    <div
      className="flex flex-col bg-white items-center justify-center p-6 md:p-12 w-[75%] h-auto bg-cover bg-center my-8 mx-auto rounded-xl shadow-2xl"
      style={{ backgroundImage: "url(/pricing/bgRequest.png)" }}
    >
      <div className="flex items-start text-white text-xl md:text-5xl font-bold p-2 md:p-6">
        Request a Quote
      </div>
      <div className="w-full max-w-2xl bg-white shadow-lg rounded-xl overflow-hidden my-12">
        <div className="p-8 md:p-16">
          <form className="grid md:grid-cols-2 gap-4 my-8">
            <div>
              <label className="text-black block text-sm font-medium">First Name</label>
              <input
                type="text"
                placeholder="Type your first name"
                className="mt-1 p-2 w-full border border-gray-400 rounded-md bg-white text-black"
              />
            </div>
            <div>
              <label className="text-black block text-sm font-medium">Last Name</label>
              <input
                type="text"
                placeholder="Type your last name"
                className="mt-1 p-2 w-full border border-gray-400 rounded-md bg-white text-black"
              />
            </div>
            <div>
              <label className="text-black block text-sm font-medium">Phone Number</label>
              <input
                type="text"
                placeholder="Enter your phone number"
                className="mt-1 p-2 w-full border border-gray-400 rounded-md bg-white text-black"
              />
            </div>
            <div>
              <label className="text-black block text-sm font-medium">Email</label>
              <input
                type="email"
                placeholder="Type your email"
                className="mt-1 p-2 w-full border border-gray-400 rounded-md bg-white text-black"
              />
            </div>
            <div>
              <label className="text-black block text-sm font-medium">Company Name</label>
              <input
                type="text"
                placeholder="Type your company name"
                className="mt-1 p-2 w-full border border-gray-400 rounded-md bg-white text-black"
              />
            </div>
            <div>
              <label className="text-black block text-sm font-medium">Country</label>
              <input
                type="text"
                placeholder="Type your country"
                className="mt-1 p-2 w-full border border-gray-400 rounded-md bg-white text-black"
              />
            </div>
            <div className="col-span-2">
              <label className="text-black block text-sm font-medium">Message</label>
              <textarea
                placeholder="Message"
                className="mt-1 p-2 w-full border border-gray-400 rounded-md h-24 bg-white text-black"
              ></textarea>
            </div>
            <div className="col-span-2 flex justify-end">
              <button className="bg-blue-600 text-white px-6 py-2 rounded-md hover:bg-blue-700">
                Request a quote
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default RequestQuote;
