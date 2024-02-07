import React from "react";

const Contact = () => {
  return (
    <section className="text-white xl:p-8 xl:w-4/5 xl:my-0 xl:mx-auto pb-10 xl:pb-20">
      <h1 className="font-bold text-3xl xl:text-4xl mb-5 xl:mb-10">Contact</h1>
      <div className="text-center pb-10 xl:pb-20 xl:mx-10">
        <p className="font-bold text-sm xl:text-base xl:leading-5">
          Fill out this form to reach us.
        </p>
        <form action="" className="my-0 mx-auto w-full xl:w-9/12">
          <div className="mt-5 flex flex-col xl:flex-row xl:items-center xl:justify-center xl:gap-x-2.5 mb-5">
            <input
              type="text"
              placeholder="First name"
              className="bg-gray text-darkGray font-light text-sm xl:text-xl p-2 w-full xl:w-screen outline-0 border-0 mb-5 xl:mb-0"
            />
            <input
              type="text"
              placeholder="Last name"
              className="bg-gray text-darkGray font-light text-sm xl:text-xl p-2 w-full xl:w-screen outline-0 border-0"
            />
          </div>
          <div className="mb-5">
            <input
              type="email"
              placeholder="Email"
              className="bg-gray text-darkGray font-light text-sm xl:text-xl p-2 w-full outline-0 border-0"
            />
          </div>
          <div className="mb-5">
            <input
              type="email"
              placeholder="Phone (optional)"
              className="bg-gray text-darkGray font-light text-sm xl:text-xl p-2 w-full outline-0 border-0"
            />
          </div>
          <div className="mb-5">
            <textarea
              placeholder="Message"
              className="resize-none bg-gray text-darkGray font-light text-sm xl:text-xl p-2 w-full outline-0 border-0 min-h-32"
            ></textarea>
          </div>
          <button className="bg-skyBlue text-customBlack w-full py-2 xl:px-24 font-bold xl:text-2xl">Send</button>
        </form>
      </div>
    </section>
  );
};

export default Contact;
