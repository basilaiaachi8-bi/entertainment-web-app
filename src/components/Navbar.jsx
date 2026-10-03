import { NavLink } from "react-router-dom";

export default function Navbar() {
  const navItems = [
    { path: "/", icon: "/assets/icon-nav-home.svg", label: "Home" },
    { path: "/movies", icon: "/assets/icon-nav-movies.svg", label: "Movies" },
    {
      path: "/tv-series",
      icon: "/assets/icon-nav-tv-series.svg",
      label: "TV Series",
    },
    {
      path: "/bookmarked",
      icon: "/assets/icon-nav-bookmark.svg",
      label: "Bookmarked",
    },
  ];

  return (
    <header className="bg-semiDarkBlue p-5 md:p-6 lg:p-8 flex lg:flex-col justify-between items-center lg:fixed lg:top-8 lg:left-8 lg:bottom-8 lg:w-24 lg:rounded-2xl z-50">
      <NavLink to="/" className="shrink-0">
        <img
          src="/assets/logo.svg"
          alt="Logo"
          className="w-6 h-5 md:w-8 md:h-6 object-contain"
        />
      </NavLink>

      <nav className="flex lg:flex-col gap-6 md:gap-8 lg:gap-10 items-center justify-center">
        {navItems.map((item) => (
          <NavLink
            key={item.label}
            to={item.path}
            className={({ isActive }) =>
              `flex items-center justify-center transition-all p-1 ${
                isActive ? "brightness-200" : "opacity-50 hover:opacity-100"
              }`
            }
          >
            <img
              src={item.icon}
              alt={item.label}
              className="w-4 h-4 md:w-5 md:h-5 object-contain shrink-0"
            />
          </NavLink>
        ))}
      </nav>

      <div className="w-6 h-6 md:w-8 md:h-8 rounded-full border border-pureWhite/50 overflow-hidden shrink-0">
        <img
          src="/assets/image-avatar.png"
          alt="User Avatar"
          className="w-full h-full object-cover"
        />
      </div>
    </header>
  );
}
