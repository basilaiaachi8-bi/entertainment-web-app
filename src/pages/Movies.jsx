import { useContext } from "react";
import { DataContext } from "../context/DataContext";
import SearchBar from "../components/SearchBar";
import Card from "../components/Card";

export default function Movies() {
  const { data, searchTerm } = useContext(DataContext);

  const movies = data.filter((item) => item.category === "Movie");
  const filteredMovies = movies.filter((item) =>
    item.title.toLowerCase().includes(searchTerm.toLowerCase()),
  );

  return (
    <div>
      <SearchBar placeholder="Search for movies" />

      <section>
        <h2 className="text-xl md:text-3xl font-light mb-6">
          {searchTerm.trim() !== ""
            ? `Found ${filteredMovies.length} results for '${searchTerm}'`
            : "Movies"}
        </h2>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-8">
          {filteredMovies.map((item) => (
            <Card key={item.title} item={item} />
          ))}
        </div>
      </section>
    </div>
  );
}
