import { useContext } from "react";
import { DataContext } from "../context/DataContext";
import SearchBar from "../components/SearchBar";
import Trending from "../components/Trending";
import Card from "../components/Card";

export default function Home() {
  const { data, searchTerm } = useContext(DataContext);

  const filteredItems = data.filter((item) =>
    item.title.toLowerCase().includes(searchTerm.toLowerCase()),
  );

  const recommendedItems = data.filter((item) => !item.isTrending);

  return (
    <div>
      <SearchBar placeholder="Search for movies or TV series" />

      {searchTerm.trim() !== "" ? (
        <section>
          <h2 className="text-xl md:text-3xl font-light mb-6">
            Found {filteredItems.length} results for '{searchTerm}'
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-8">
            {filteredItems.map((item) => (
              <Card key={item.title} item={item} />
            ))}
          </div>
        </section>
      ) : (
        <>
          <Trending />

          <section>
            <h2 className="text-xl md:text-3xl font-light mb-6">
              Recommended for you
            </h2>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-8">
              {recommendedItems.map((item) => (
                <Card key={item.title} item={item} />
              ))}
            </div>
          </section>
        </>
      )}
    </div>
  );
}
