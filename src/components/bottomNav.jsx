const BottomNav = () => {
  return (
    <div className="fixed bottom-10 left-1/2 -translate-x-1/2 z-1 border border-[#202020] p-3 rounded-sm bg-black">
      <div className="flex items-center z-50 rounded-sm shadow-lg">
        <a
          href="#"
          className="px-6 py-4 mr-3 text-[20px] text-center rounded-sm bg-[#2a2a2a] text-white font-semibold h-15"
        >
          DEV
        </a>

        <div className="flex justify-center text-center bg-[#2a2a2a] rounded-sm px-6 py-4 gap-8 h-15">
          <a
            href="#about"
            className=" text-[#888888] hover:text-white font-medium"
          >
            About
          </a>
          <span className="text-gray-600">|</span>
          <a
            href="#experience"
            className=" text-[#888888] hover:text-white font-medium"
          >
            Experience
          </a>
          <span className="text-gray-600">|</span>
          <a
            href="#work"
            className=" text-[#888888] hover:text-white font-medium"
          >
            Work
          </a>
          <span className="text-gray-600">|</span>
          <a
            href="#contact"
            className=" text-[#888888] hover:text-white font-medium"
          >
            Connect
          </a>
        </div>
      </div>
    </div>
  );
};

export default BottomNav;
