import { useContext } from "react";
import { DataContext } from "../context/DataContext";
import SearchBar from "../components/SearchBar";
import Card from "../components/Card";

export default function TvSeries() {
  const { data, searchTerm } = useContext(DataContext);

  const tvSeries = data.filter((item) => item.category === "TV Series");
  const filteredTvSeries = tvSeries.filter((item) =>
    item.title.toLowerCase().includes(searchTerm.toLowerCase()),
  );

  return (
    <div>
      <SearchBar placeholder="Search for TV series" />

      <section>
        <h2 className="text-xl md:text-3xl font-light mb-6">
          {searchTerm.trim() !== ""
            ? `Found ${filteredTvSeries.length} results for '${searchTerm}'`
            : "TV Series"}
        </h2>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-8">
          {filteredTvSeries.map((item) => (
            <Card key={item.title} item={item} />
          ))}
        </div>
      </section>
    </div>
  );
}
