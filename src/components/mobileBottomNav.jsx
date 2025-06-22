import React from "react";
import {
  FiHome,
  FiUser,
  FiMonitor,
  FiAward,
  FiMessageCircle,
} from "react-icons/fi";

const navItems = [
  { name: "Home", icon: <FiHome />, href: "#" },
  { name: "About", icon: <FiUser />, href: "#about" },
  { name: "Experience", icon: <FiAward />, href: "#experience" },
  { name: "Work", icon: <FiMonitor />, href: "#work" },
  { name: "Contact", icon: <FiMessageCircle />, href: "#contact" },
];

const MobileBottomNav = () => {
  return (
    <nav className="fixed bottom-0 left-0 right-0 z-50 bg-[#1e1e1e] text-gray-400 flex justify-around items-center py-3 border-t border-gray-700">
      {navItems.map((item) => (
        <a
          key={item.name}
          href={item.href}
          className="flex flex-col items-center text-xs hover:text-white transition"
        >
          <span className="text-xl mb-1">{item.icon}</span>
          {item.name}
        </a>
      ))}
    </nav>
  );
};

export default MobileBottomNav;
