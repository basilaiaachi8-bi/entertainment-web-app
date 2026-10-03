import { useContext } from "react";
import { DataContext } from "../context/DataContext";

export default function SearchBar({
  placeholder = "Search for movies or TV series",
}) {
  const { searchTerm, setSearchTerm } = useContext(DataContext);

  return (
    <div className="flex items-center gap-4 md:gap-6 my-4 md:my-6">
      <img
        src="/assets/icon-search.svg"
        alt="Search"
        className="w-6 h-6 md:w-8 md:h-8"
      />
      <input
        type="text"
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        placeholder={placeholder}
        className="w-full bg-transparent text-pureWhite font-light text-lg md:text-2xl outline-none border-b border-transparent focus:border-greyishBlue transition-colors placeholder:text-greyishBlue/60 caret-red pb-2"
      />
    </div>
  );
}
