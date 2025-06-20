import React from "react";

const MyWork = () => {
  return (
    <section id="work" className="min-h-screen bg-black text-white px-8 py-24">
      <div className="text-8xl font-bold">
        <p>DISCOVER</p>
        <p>MY WORK</p>
      </div>
      <div className="grid grid-cols-2 ml-20 mt-20 flex-col gap-20">
        <div>
          <div className="bg-green-500 h-100"></div>
          <p className="mt-3">Work 1</p>
        </div>
        <div>
          <div className="bg-green-600 h-100"></div>
          <p className="mt-3">Work 2</p>
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
