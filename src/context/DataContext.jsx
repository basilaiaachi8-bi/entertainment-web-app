import { createContext, useState, useEffect } from "react";
import initialData from "../data.json";

export const DataContext = createContext();

export const DataProvider = ({ children }) => {
  const [data, setData] = useState(() => {
    const localData = localStorage.getItem("entertainment_app_data");
    return localData ? JSON.parse(localData) : initialData;
  });

  const [searchTerm, setSearchTerm] = useState("");

  useEffect(() => {
    localStorage.setItem("entertainment_app_data", JSON.stringify(data));
  }, [data]);

  const toggleBookmark = (title) => {
    setData((prevData) =>
      prevData.map((item) =>
        item.title === title
          ? { ...item, isBookmarked: !item.isBookmarked }
          : item,
      ),
    );
  };

  return (
    <DataContext.Provider
      value={{ data, searchTerm, setSearchTerm, toggleBookmark }}
    >
      {children}
    </DataContext.Provider>
  );
};
