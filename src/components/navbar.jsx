import { Link } from "react-router-dom";
import { Menu, X } from "lucide-react";
import { useState } from "react";
import { useMediaQuery } from "../hooks/use-media-query";

function Navbar() {
  const [open, setOpen] = useState(false);
  const isAboveMediumScreens = useMediaQuery("(min-width: 1060px)");

  const navLinks = [
    { name: "Coding", link: "/articles/coding" },
    { name: "Cooking", link: "/articles/cooking" },
    { name: "Football", link: "/articles/football" },
  ];

  return (
    <nav>
      {isAboveMediumScreens ? (
        <ul className="flex gap-4 font-medium text-gray-900">
          {navLinks.map((menuItem) => (
            <li key={menuItem.name}>
              <Link to={menuItem.link}>{menuItem.name}</Link>
            </li>
          ))}
        </ul>
      ) : (
        <div className={`cursor-pointer ${open ? "hidden" : ""}`}>
          <button onClick={() => setOpen(!open)}>
            <Menu />
          </button>
        </div>
      )}

      {!isAboveMediumScreens && open && (
        <div className="absolute top-0 left-0 flex flex-col items-center justify-center w-full h-screen opacity-95 bg-slate-200">
          <div className="container flex items-center justify-end h-10 px-6 py-10 mx-auto">
            <button onClick={() => setOpen(!open)}>
              <X />
            </button>
          </div>
          <ul className="flex flex-col items-center justify-center gap-8 text-3xl font-semibold text-gray-900 grow">
            {navLinks.map((menuItem) => (
              <li key={menuItem.name} onClick={() => setOpen(!open)}>
                <Link to={menuItem.link}>{menuItem.name}</Link>
              </li>
            ))}
          </ul>
        </div>
      )}
    </nav>
  );
}

export default Navbar;
