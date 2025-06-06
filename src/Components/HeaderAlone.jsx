import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { FaBars } from "react-icons/fa";
import logo from "./../assets/Techlogo.png";

const HeaderOnly = () => {
  const navigate = useNavigate();
  const [navOpen, setNavOpen] = React.useState(false);

  const navItems = [
    { name: "Home", path: "/" },
    { name: "Services", path: "/services" },
    { name: "Gold dots", path: "/golddots" },
    { name: "Buy Coins", path: "/buycoins" },
    { name: "Franchise", path: "/franchise" },
    { name: "Gold Lease", path: "/goldlease" },
    { name: "About us", path: "/about" },
  ];

  return (
    <div className="mt-4 w-full shadow-md">
      <header className="py-4 px-4 md:px-12 flex justify-center">
        <div className="max-w-[1280px] w-full flex items-center justify-between">
          <Link to="/">
            <img
              src={logo}
              className="w-[42px] h-[42px] cursor-pointer"
              alt="Pixalive Logo"
            />
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden md:flex gap-6">
            {navItems.map((item) => (
              <button
                key={item.name}
                onClick={() => navigate(item.path)}
                className="text-black text-[16px] border-b-[1px] border-transparent hover:border-black transition-all duration-200"
              >
                {item.name}
              </button>
            ))}
          </nav>

          {/* Desktop Sign Up */}
          <div className="hidden md:block">
            <Link to="/signup">
              <button className="group bg-black text-white px-4 py-2 cursor-pointer">
                Sign up&nbsp;
                <span className="inline-block transition-transform duration-300 group-hover:translate-x-1">
                  ↗
                </span>
              </button>
            </Link>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button onClick={() => setNavOpen(!navOpen)}>
              <FaBars className="text-xl text-black" />
            </button>
          </div>
        </div>
      </header>

      {/* Mobile nav */}
      {navOpen && (
        <div className="md:hidden bg-white border-b shadow-md">
          {navItems.map((item) => (
            <button
              key={item.name}
              onClick={() => {
                navigate(item.path);
                setNavOpen(false);
              }}
              className="block w-full text-left px-4 py-2 text-black hover:bg-gray-100"
            >
              {item.name}
            </button>
          ))}
          <div className="p-4">
            <Link to="/signup">
              <button className="bg-black text-white px-4 py-2 w-full rounded">
                Sign up
              </button>
            </Link>
          </div>
        </div>
      )}
    </div>
  );
};

export default HeaderOnly;
