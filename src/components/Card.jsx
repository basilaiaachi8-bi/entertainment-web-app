import { useContext } from "react";
import { DataContext } from "../context/DataContext";

export default function Card({ item, isTrending = false }) {
  const { toggleBookmark } = useContext(DataContext);

  const imagePath = isTrending
    ? item.thumbnail.trending?.large?.replace("./assets", "/assets")
    : item.thumbnail.regular.large.replace("./assets", "/assets");

  return (
    <div
      className={`relative group ${isTrending ? "min-w-[240px] md:min-w-[470px] h-[140px] md:h-[230px] flex-shrink-0" : "w-full"}`}
    >
      <div
        className={`relative overflow-hidden rounded-lg ${isTrending ? "w-full h-full" : "aspect-[16/9] mb-2"}`}
      >
        <img
          src={imagePath}
          alt={item.title}
          className="w-full h-full object-cover rounded-lg group-hover:scale-105 transition-transform duration-300"
        />

        <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center cursor-pointer rounded-lg z-10">
          <div className="flex items-center gap-3 bg-white/30 backdrop-blur-md px-4 py-2 rounded-full">
            <img src="/assets/icon-play.svg" alt="Play" className="w-8 h-8" />
            <span className="font-medium text-lg text-pureWhite">Play</span>
          </div>
        </div>

        <button
          onClick={() => toggleBookmark(item.title)}
          className="absolute top-2 right-2 md:top-4 md:right-4 w-8 h-8 rounded-full bg-darkBlue/50 hover:bg-pureWhite group/btn flex items-center justify-center transition-colors z-20"
          aria-label="Bookmark"
        >
          <svg width="12" height="14" xmlns="http://www.w3.org/2000/svg">
            <path
              d="M10.61 0c.805 0 1.46.654 1.46 1.46v11.832a.729.729 0 0 1-1.163.586L6 10.375l-4.897 3.503A.727.727 0 0 1 0 13.292V1.46C0 .654.655 0 1.46 0h9.15z"
              fill={item.isBookmarked ? "#FFFFFF" : "none"}
              stroke="#FFFFFF"
              strokeWidth="1.5"
              className={
                item.isBookmarked ? "" : "group-hover/btn:stroke-darkBlue"
              }
            />
          </svg>
        </button>

        {isTrending && (
          <div className="absolute bottom-4 left-4 right-4 z-10 pointer-events-none">
            <div className="flex items-center gap-2 text-xs md:text-sm text-pureWhite/75 font-light">
              <span>{item.year}</span>
              <span>•</span>
              <div className="flex items-center gap-1">
                <img
                  src={
                    item.category === "Movie"
                      ? "/assets/icon-category-movie.svg"
                      : "/assets/icon-category-tv.svg"
                  }
                  alt={item.category}
                  className="w-3 h-3"
                />
                <span>{item.category}</span>
              </div>
              <span>•</span>
              <span>{item.rating}</span>
            </div>
            <h3 className="font-medium text-base md:text-2xl text-pureWhite mt-1">
              {item.title}
            </h3>
          </div>
        )}
      </div>

      {!isTrending && (
        <div>
          <div className="flex items-center gap-2 text-xs md:text-sm text-greyishBlue font-light mb-1">
            <span>{item.year}</span>
            <span>•</span>
            <div className="flex items-center gap-1">
              <img
                src={
                  item.category === "Movie"
                    ? "/assets/icon-category-movie.svg"
                    : "/assets/icon-category-tv.svg"
                }
                alt={item.category}
                className="w-3 h-3"
              />
              <span>{item.category}</span>
            </div>
            <span>•</span>
            <span>{item.rating}</span>
          </div>
          <h3 className="font-medium text-base md:text-lg text-pureWhite">
            {item.title}
          </h3>
        </div>
      )}
    </div>
  );
}
