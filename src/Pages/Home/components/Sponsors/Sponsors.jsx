import React from "react";

const Sponsors = () => {
  return (
    <section className="my-30 xl:my-60 mx-auto text-center xl:w-4/5 pb-20">
      <p className="text-white font-bold xl:text-base leading-5 mb-5">
        Supported and backed by:
      </p>
      <div className="grid grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-4 my-0 mx-auto p-8 pt-0 xl:w-4/5">
        <div className="bg-gray font-bold text-lg xl:text-3xl p-2 xl:p-2.5 leading-10">Lorem</div>
        <div className="bg-gray font-bold text-lg xl:text-3xl p-2 xl:p-2.5 leading-10">Ipsum</div>
        <div className="bg-gray font-bold text-lg xl:text-3xl p-2 xl:p-2.5 leading-10">Dolor</div>
        <div className="bg-gray font-bold text-lg xl:text-3xl p-2 xl:p-2.5 leading-10">Sit</div>
        <div className="bg-gray font-bold text-lg xl:text-3xl p-2 xl:p-2.5 leading-10">Dolor</div>
        <div className="bg-gray font-bold text-lg xl:text-3xl p-2 xl:p-2.5 leading-10">Sit</div>
        <div className="bg-gray font-bold text-lg xl:text-3xl p-2 xl:p-2.5 leading-10">Lorem</div>
        <div className="bg-gray font-bold text-lg xl:text-3xl p-2 xl:p-2.5 leading-10">Ipsum</div>
      </div>
      <div className="text-white">
        <h3 className="font-bold text-2xl xl:text-3xl leading-10">Less code. More product.</h3>
        <p className="font-normal text-sm xl:text-base leading-5 my-0 mx-auto xl:w-2/5">
          By using our UI Kit, we make sure you only get to{" "}
          <span className="text-yellow font-bold">focus more</span> on the other things that matter.
        </p>
      </div>
    </section>
  );
};

export default Sponsors;
