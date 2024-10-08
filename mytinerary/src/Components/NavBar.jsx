import React from "react";
import { NavLink } from "react-router-dom";
import { FaRegUser } from "react-icons/fa";

const routes = [
  { to: "/", text: "Home" },
  { to: "/cities", text: "Cities" }
];

export default function NavBar() {
  return (
    <nav className="bg-gradient-to-r from-blue-950 via-black to-blue-950 text-white py-4 shadow-lg">
      <div className="container mx-auto flex justify-between items-center px-4">
          <Sidebar />
        <div className="text-xl font-bold tracking-wider">
          My Tineraries
        </div>    
        <ul className="hidden sm:flex gap-4 items-center">
          {routes.map((r, index) => (
            <li key={index}>
              <NavLink
                to={r.to}
                className={({ isActive }) =>
                  isActive
                    ? "text-white font-bold text-lg"
                    : "text-gray-400 hover:text-white transition-colors duration-300 text-lg"
                }
              >
                {r.text}
              </NavLink>
            </li>
          ))}
      
          <button className="ml-4 text-gold hover:text-white transition-transform transform hover:scale-110">
            <FaRegUser className="text-2xl" />
          </button>
        </ul>
      </div>
    </nav>
  );
}

const Sidebar = () => {
  const [isOpen, setIsOpen] = React.useState(false);

  return (
    <>
            <button
        className="sm:hidden p-2 text-white"
        onClick={() => setIsOpen(!isOpen)}
      >
        <svg
          className={`w-6 h-6 transition-transform ${isOpen ? "rotate-45" : ""}`}
          viewBox="0 0 24 24"
          fill="currentColor"
        >
          <rect x="3" y="6" width="18" height="2" />
          <rect x="3" y="12" width="18" height="2" />
          <rect x="3" y="18" width="18" height="2" />
        </svg>
      </button>


      {isOpen && (
        <div className="fixed top-0 left-0 w-64 h-screen bg-gray-800 z-50 text-white p-5">
          <button
            className="p-2 text-white absolute top-4 right-4 bg-red-600 rounded"
            onClick={() => setIsOpen(false)}
          >
            Cerrar
          </button>
          <ul className="list-none mt-10 space-y-4">
            {routes.map((r, index) => (
              <li key={index}>
                <NavLink
                  to={r.to}
                  className="block py-2 text-lg hover:text-gray-400"
                  onClick={() => setIsOpen(false)}
                >
                  {r.text}
                </NavLink>
              </li>
            ))}
          </ul>
        </div>
      )}
    </>
  );
};
