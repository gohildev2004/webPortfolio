import React from "react";

const MyWork = () => {
  return (
    <section
      id="work"
      className="min-h-screen bg-black text-white md:mt-30 lg:py-20 max-md:pt-30"
    >
      <div className="text-4xl sm:text-5xl md:text-7xl lg:text-8xl font-bold">
        <p>DISCOVER</p>
        <p>MY WORK</p>
      </div>
      <div className="grid md:grid-cols-2 lg:ml-20 mt-20 gap-20">
        <div className="">
          <div className="work_card">
            <img src="/LiNGUiD_Logo.svg" alt="Dev Gohil" className="" />
          </div>
          <div className="work_card_title">
            <div className="bg-yellow-300 work_card_status"></div>
            <p className="ml-3">LiNGUiD</p>
          </div>
        </div>
        <div className="">
          <div className="work_card">
            <img src="/UniMate_Logo.svg" alt="Dev Gohil" className="" />
          </div>
          <div className="work_card_title">
            <div className="bg-green-500 work_card_status"></div>
            <p className="ml-3">UniMate</p>
          </div>
        </div>
        {/* <div>
          <div className="bg-white h-100"></div>
          <p className="mt-3">Work 3</p>
        </div>
        <div>
          <div className="bg-white h-100"></div>
          <p className="mt-3">Work 4</p>
        </div> */}
      </div>
    </section>
  );
};

export default MyWork;
