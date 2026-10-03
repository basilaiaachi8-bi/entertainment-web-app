import { useContext } from "react";
import { DataContext } from "../context/DataContext";
import Card from "./Card";

export default function Trending() {
  const { data } = useContext(DataContext);
  const trendingItems = data.filter((item) => item.isTrending);

  return (
    <section className="mb-8 md:mb-10">
      <h2 className="text-xl md:text-3xl font-light mb-4 md:mb-6">Trending</h2>
      <div className="flex gap-4 md:gap-10 overflow-x-auto no-scrollbar pb-4">
        {trendingItems.map((item) => (
          <Card key={item.title} item={item} isTrending={true} />
        ))}
      </div>
    </section>
  );
}
