import React from "react";
import Footer from "../components/ui/Footer";
import MainNav from "../components/ui/nav/MainNav";
function Contact() {
  return (
    <main>
      <MainNav />
      <div>
        <div className="mt-20 mb-8 max-w-[500px] mx-auto text-center">
          <h3 className="font-[600] text-4xl mb-4 ">Contact Us</h3>
          <p className="text-[16px]">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore.
          </p>
        </div>
        <div>
          <form className="grid grid-cols-1 md:grid-cols-2 items-center max-w-[80%] md:max-w-[80%] laptop:max-w-[60%] mx-auto gap-x-6 gap-y-6 bg-[#F4F6FC] px-[8%] py-[8%] md:py-[4%]">
            <div className="flex flex-col gap-2">
              <label id="fname">First Name:</label>
              <input
                name="fname"
                id="fname"
                type="text"
                className="border w-full border-slate-600 rounded-md p-2 outline-none"
              />
            </div>
            <div className="flex flex-col gap-2">
              <label id="lname">Last Name:</label>
              <input
                name="lname"
                id="lname"
                type="text"
                className="border w-full border-slate-600 rounded-md p-2 outline-none"
              />
            </div>
            <div className="flex flex-col gap-2">
              <label id="phone">Phone:</label>
              <input
                id="phone"
                name="phone"
                type="phone"
                className="border w-full border-slate-600 rounded-md p-2 outline-none"
              />
            </div>
            <div className="flex flex-col gap-2">
              <label id="email">Email:</label>
              <input
                name="email"
                id="email"
                type="email"
                className="border w-full border-slate-600 rounded-md p-2 outline-none"
              />
            </div>
            <div className="flex flex-col gap-2 md:col-span-2">
              <label id="message">Message:</label>
              <textarea
                rows={6}
                name="message"
                className="border w-full border-slate-600 rounded-md p-2 outline-none resize-none"
              ></textarea>
            </div>
            <div>
              <button className="bg-[#282938] rounded-full py-3 px-12 md:text-[18px] laptop:text-[20px] font-[500] text-white mt-4">
                Send Message
              </button>
            </div>
          </form>
        </div>
      </div>

      <Footer />
    </main>
  );
}

export default Contact;
