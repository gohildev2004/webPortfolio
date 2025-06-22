import React from "react";

const MyWork = () => {
  return (
    <section
      id="work"
      className="min-h-screen bg-black text-white lg:py-20 max-md:pt-30"
    >
      <div className="text-4xl sm:text-5xl md:text-7xl lg:text-8xl font-bold">
        <p>DISCOVER</p>
        <p>MY WORK</p>
      </div>
      <div className="grid md:grid-cols-2 lg:ml-20 mt-20 flex-col gap-20">
        <div>
          <div className="bg-green-500 h-100"></div>
          <p className="mt-3">UniMate</p>
        </div>
        <div>
          <div className="bg-green-600 h-100"></div>
          <p className="mt-3">LiNGUiD</p>
        </div>
        <div>
          <div className="bg-green-500 h-100"></div>
          <p className="mt-3">Work 3</p>
        </div>
        <div>
          <div className="bg-green-600 h-100"></div>
          <p className="mt-3">Work 4</p>
        </div>
      </div>
    </section>
  );
};

export default MyWork;
