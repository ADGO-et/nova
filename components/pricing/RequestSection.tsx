import React from "react";

const RequestQuote: React.FC = () => {
  return (
    <div
      className="flex flex-col items-center justify-center p-16 w-[75%] my-8 mx-auto rounded-xl"
      style={{ backgroundImage: "url(/pricing/bgRequest.png)" }}
    >
      <div className="flex items-start text-white text-xl font-bold p-6">
        Request a Quote
      </div>
      <div className="w-full max-w-2xl bg-foreground shadow-lg rounded-xl overflow-hidden">
        <div className="p-6">
          <form className="grid grid-cols-2 gap-4">
            <div>
              <label className="text-background block text-sm font-medium">First Name</label>
              <input
                type="text"
                placeholder="Type your name"
                className="mt-1 p-2 w-full border rounded-md bg-foreground"
              />
            </div>
            <div>
              <label className="text-background block text-sm font-medium">Last Name</label>
              <input
                type="text"
                placeholder=""
                className="mt-1 p-2 w-full border rounded-md bg-foreground"
              />
            </div>
            <div>
              <label className="text-background block text-sm font-medium">Phone Number</label>
              <input
                type="text"
                placeholder=""
                className="mt-1 p-2 w-full border rounded-md bg-foreground"
              />
            </div>
            <div>
              <label className="text-background block text-sm font-medium">Email</label>
              <input
                type="email"
                placeholder=""
                className="mt-1 p-2 w-full border rounded-md bg-foreground"
              />
            </div>
            <div>
              <label className="text-background block text-sm font-medium">Company Name</label>
              <input
                type="text"
                placeholder=""
                className="mt-1 p-2 w-full border rounded-md bg-foreground"
              />
            </div>
            <div>
              <label className="text-background block text-sm font-medium">Country</label>
              <input
                type="text"
                placeholder=""
                className="mt-1 p-2 w-full border rounded-md bg-foreground"
              />
            </div>
            <div className="col-span-2">
              <label className="text-background block text-sm font-medium">Message</label>
              <textarea
                placeholder=""
                className="mt-1 p-2 w-full border rounded-md h-24 bg-foreground"
              ></textarea>
            </div>
            <div className="col-span-2 flex justify-end">
              <button className="bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700">
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
