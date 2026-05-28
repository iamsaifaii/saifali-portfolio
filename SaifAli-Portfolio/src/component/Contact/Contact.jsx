import React from "react";
import { FaPaperPlane } from "react-icons/fa";

const SimpleContact = () => {
  return (
    <section id="contact" className="w-full bg-[#030303] text-white py-16 px-4">

      {/* CONTAINER */}
      <div className="max-w-xl mx-auto border border-gray-900 rounded-2xl p-6 md:p-8 shadow-xl">

        {/* HEADER */}
        <div className="mb-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight">
            Get in <span className="text-blue-500 italic">touch</span>
          </h2>

          <p className="text-gray-400 text-sm mt-2">
            Have a project in mind? Let’s build something together.
          </p>
        </div>

        {/* FORM */}
        <form className="space-y-4">

          {/* ROW */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">

            <div className="flex flex-col gap-1">
              <label className="text-[11px] text-gray-500 uppercase">
                Full Name
              </label>
              <input
                type="text"
                placeholder="John Doe"
                className="bg-black border border-gray-800 rounded-lg p-3 focus:border-blue-500 outline-none"
              />
            </div>

            <div className="flex flex-col gap-1">
              <label className="text-[11px] text-gray-500 uppercase">
                Email
              </label>
              <input
                type="email"
                placeholder="john@example.com"
                className="bg-black border border-gray-800 rounded-lg p-3 focus:border-blue-500 outline-none"
              />
            </div>

          </div>

          {/* SUBJECT */}
          <div className="flex flex-col gap-1">
            <label className="text-[11px] text-gray-500 uppercase">
              Subject
            </label>
            <input
              type="text"
              placeholder="How can I help?"
              className="bg-black border border-gray-800 rounded-lg p-3 focus:border-blue-500 outline-none"
            />
          </div>

          {/* MESSAGE */}
          <div className="flex flex-col gap-1">
            <label className="text-[11px] text-gray-500 uppercase">
              Message
            </label>
            <textarea
              rows="4"
              placeholder="Tell me about your project..."
              className="bg-black border border-gray-800 rounded-lg p-3 focus:border-blue-500 outline-none resize-none"
            />
          </div>

          {/* BUTTON */}
          <button
            type="submit"
            className="w-full mt-2 bg-white text-black font-semibold py-3 rounded-lg flex items-center justify-center gap-2 hover:bg-blue-500 hover:text-white transition"
          >
            SEND MESSAGE <FaPaperPlane size={14} />
          </button>

        </form>
      </div>
    </section>
  );
};

export default SimpleContact;