import { useContext } from "react";
import { DataContext } from "../context/DataContext";
import SearchBar from "../components/SearchBar";
import Card from "../components/Card";

export default function Bookmarked() {
  const { data, searchTerm } = useContext(DataContext);

  const bookmarkedItems = data.filter((item) => item.isBookmarked);
  const filteredBookmarked = bookmarkedItems.filter((item) =>
    item.title.toLowerCase().includes(searchTerm.toLowerCase()),
  );

  const bookmarkedMovies = filteredBookmarked.filter(
    (item) => item.category === "Movie",
  );
  const bookmarkedTvSeries = filteredBookmarked.filter(
    (item) => item.category === "TV Series",
  );

  return (
    <div>
      <SearchBar placeholder="Search for bookmarked shows" />

      {searchTerm.trim() !== "" ? (
        <section>
          <h2 className="text-xl md:text-3xl font-light mb-6">
            Found {filteredBookmarked.length} results for '{searchTerm}'
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-8">
            {filteredBookmarked.map((item) => (
              <Card key={item.title} item={item} />
            ))}
          </div>
        </section>
      ) : (
        <>
          <section className="mb-8 md:mb-10">
            <h2 className="text-xl md:text-3xl font-light mb-6">
              Bookmarked Movies
            </h2>
            {bookmarkedMovies.length === 0 ? (
              <p className="text-greyishBlue font-light">
                No bookmarked movies yet.
              </p>
            ) : (
              <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-8">
                {bookmarkedMovies.map((item) => (
                  <Card key={item.title} item={item} />
                ))}
              </div>
            )}
          </section>

          <section>
            <h2 className="text-xl md:text-3xl font-light mb-6">
              Bookmarked TV Series
            </h2>
            {bookmarkedTvSeries.length === 0 ? (
              <p className="text-greyishBlue font-light">
                No bookmarked TV series yet.
              </p>
            ) : (
              <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-8">
                {bookmarkedTvSeries.map((item) => (
                  <Card key={item.title} item={item} />
                ))}
              </div>
            )}
          </section>
        </>
      )}
    </div>
  );
}
