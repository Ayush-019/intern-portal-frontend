import React, { useEffect, useState } from "react";
import "./mainPage.css";
import BreifCard from "../components/BreifCard/BreifCard";
import SearchAndTags from "../components/SearchAndTags/SearchAndTags";
import CompanyPage from "../components/companyPage/CompanyPage";
import { FRONTEND_URL } from "../constants";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import FilterModal from "../components/filterModal/filterModal";

const MainPage = () => {
  const [data, setData] = useState(null);
  const [tag, setTag] = useState("newest");
  const [filterTagData, setFilterTagData] = useState(null);
  const [companyData, setCompanyData] = useState(null);
  const [searchedData, setSearchedData] = useState(null);
  const [filterModal, setFilterModal] = useState(false);
  const [filters, setFilters] = useState(false);

  const handleCallBack = (value) => {
    setTag(value);
  };

  const handleFilterModal = () => {
    setFilterModal(!filterModal);
  };

  const dataHandler = (id) => {
    // console.log(id);
    const data = filterTagData.filter((data) => data._id === id);
    setCompanyData(data);
    // console.log("companydata", data);
  };

  const setFiltersQuery = (value) => {
    setFilters(value);
    console.log("filters", value);
  };

  const searchFunction = async (keyword) => {
    try {
      if (keyword) {
        const searchData = await fetch(
          `${FRONTEND_URL}companies?keyword=${keyword}`
        );
        const res = await searchData.json();
        setSearchedData(res.companies);
        setCompanyData(res.companies);
        // if (searchedData && searchedData.companies.length > 0) {
        // } else {
        //   toast.error("No Data Found");
        // }
        // console.log("searchData..", searchedData);
        // console.log("companyData...", companyData);
      }
    } catch (err) {
      // console.log(err);
    }
  };

  const bookmarksAdder = async (id) => {
    const newdata = data.companies.filter((data) => data._id === id);
    newdata[0].isBookmarked = !newdata[0].isBookmarked;
    const newData = [...newdata];
    // console.log("newdata", newData);
    const updatedData = await fetch(`${FRONTEND_URL}/company/${id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(newData[0]),
    });
    const res = await updatedData.json();
    // console.log("updatedData", res);
    toast.success(
      `${res.company.isBookmarked ? "Bookmark Added" : "Bookmark Removed"}`
    );
    const newDataAll = await fetch(`${FRONTEND_URL}companies`);
    const response = await newDataAll.json();
    setData(response);
    // console.log("data", response);

    if (tag === "bookmarks") {
      const filterData = await response.companies.filter(
        (data) => data.isBookmarked === true
      );
      setFilterTagData(filterData);
      // console.log("filterdata", filterData);
    } else setFilterTagData(response.companies);
  };

  useEffect(() => {
    async function fetchData() {
      let data;
      if (!filters) data = await fetch(`${FRONTEND_URL}companies`);
      else {
        data = await fetch(`${FRONTEND_URL}filtercompanies`, {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(filters),
        });
      }
      // console.log(`${FRONTEND_URL}companies?filters=${filters}`);

      const res = await data.json();
      setData(res);
      // console.log("data", res);

      if (tag === "bookmarks") {
        const filterData = await res.companies.filter(
          (data) => data.isBookmarked === true
        );
        setFilterTagData(filterData);
        // console.log("filterdata", filterData);
      } else setFilterTagData(res.companies);
    }
    fetchData();
  }, [tag, filters]);
  return (
    <div className="mainPageWrapper">
      <ToastContainer autoClose={3000} />
      <SearchAndTags
        parentCallback={handleCallBack}
        searchFallBack={searchFunction}
        filterModalHandle={handleFilterModal}
        filterModalHandler={setFiltersQuery}
      />
      <div className="cardsContainer">
        <div className="allCards">
          {filterTagData &&
            filterTagData.map((data, i) => (
              <BreifCard
                data={data}
                key={i}
                handlefallback={dataHandler}
                handlebookmarksFallback={bookmarksAdder}
              />
            ))}
        </div>
        {companyData && companyData[0] && <CompanyPage data={companyData[0]} />}
        {/* {(!companyData || !companyData[0]) && data && (
          <CompanyPage data={data.companies[0]} />
        )} */}
      </div>
    </div>
  );
};

export default MainPage;
