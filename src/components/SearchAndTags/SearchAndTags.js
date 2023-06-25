import React, { useState } from "react";
import "./SearchAndTags.css";
import Search from "../../Assets/search.svg";
import Filter from "../../Assets/Filter.svg";
import FilterModal from "../filterModal/filterModal";

const SearchAndTags = ({
  parentCallback,
  searchFallBack,
  filterModalHandle,
  filterModalHandler,
}) => {
  const [highlight, setHighlight] = useState("popular");
  const [keyword, setKeyword] = useState("");
  const [filterModal, setFilterModal] = useState(false);

  const handleFilterModal = () => {
    setFilterModal(!filterModal);
  };
  const handleFilterModalValue = (value) => {
    setFilterModal(false);
  };
  const handleFilterModalQueryValues = (value) => {
    filterModalHandler(value);
  };

  const searchSubmitHandler = (event) => {
    event.preventDefault();
    if (keyword.trim()) {
      searchFallBack(keyword);
    }
  };
  const bookmarksHandler = (e) => {
    setHighlight("bookmarks");
    parentCallback("bookmarks");
  };
  const newestHandler = (e) => {
    setHighlight("newest");
    parentCallback("newest");
  };
  const popularHandler = (e) => {
    setHighlight("popular");
    parentCallback("popular");
  };
  return (
    <div className="searchWrapper">
      <div className="tags">
        <button
          className={`popular popular1 ${
            highlight === "popular" ? "focus" : ""
          }`}
          onClick={() => popularHandler()}
        >
          Popular
        </button>
        <button
          className={`popular newest ${highlight === "newest" ? "focus" : ""}`}
          onClick={() => newestHandler()}
        >
          Newest
        </button>
        <button
          className={`popular bookmarks ${
            highlight === "bookmarks" ? "focus" : ""
          }`}
          onClick={() => bookmarksHandler()}
        >
          Bookmarks
        </button>
      </div>
      <div className="searchbar">
        <form className="searchBox" onSubmit={searchSubmitHandler}>
          <input
            type="text"
            placeholder="search by company's name"
            onChange={(e) => setKeyword(e.target.value)}
          />
          <button className="search">
            <img src={Search} alt="search" />
          </button>
        </form>
      </div>
      <div className={filterModal ? "filterModalClass" : ""}>
        {filterModal && (
          <FilterModal
            filterModalHandle={handleFilterModalValue}
            filterQueryValues={handleFilterModalQueryValues}
          />
        )}
      </div>
      <div className="filterOption">
        <img src={Filter} alt="fltr" onClick={handleFilterModal} />
      </div>
    </div>
  );
};

export default SearchAndTags;
