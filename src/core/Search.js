import React, { useState, useEffect } from "react";
import { getCategories, list } from "./apiCore";
import Card from "./Card";
import "./search.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";

const Search = () => {
  const [data, setData] = useState({
    categories: [],
    category: "",
    search: "",
    results: [],
    searched: false,
  });

  const { categories, category, search, results, searched } = data;

  const loadCategories = () => {
    getCategories().then((data) => {
      if (data.error) {
        console.log(data.error);
      } else {
        setData({ ...data, categories: data });
      }
    });
  };

  useEffect(() => {
    loadCategories();
  }, []);

  const searchData = () => {
    // console.log(search, category);
    if (search) {
      list({ search: search || undefined, category: category }).then(
        (response) => {
          if (response.error) {
            console.log(response.error);
          } else {
            setData({ ...data, results: response, searched: true });
          }
        }
      );
    }
  };

  const searchSubmit = (e) => {
    e.preventDefault();
    searchData();
  };

  const handleChange = (name) => (event) => {
    setData({ ...data, [name]: event.target.value, searched: false });
  };

  const searchMessage = (searched, results) => {
    if (searched && results.length > 0) {
      return (
        <div>
          <span className="found-text">
            {`Found ${results.length} products`}
          </span>
        </div>
      );
    }
    if (searched && results.length < 1) {
      return <div className="non-found-text">No result found</div>;
    }
  };

  const searchedProducts = (results = []) => {
    return (
      <div>
        <h2 className="mt-4 mb-4">{searchMessage(searched, results)}</h2>

        <div className="row">
          {results.map((product, i) => (
            <div className="searched-product">
              <Card key={i} product={product} />
            </div>
          ))}
        </div>
      </div>
    );
  };

  const searchForm = () => (
    <form className="search-form" onSubmit={searchSubmit}>
      <div className="search-big-box">
        <div className="search-input2">
          {/* <div className="input-group-prepend">
            <select className="btn mr-2" onChange={handleChange("category")}>
              <option value="All">All</option>
              {categories.map((c, i) => (
                <option key={i} value={c._id}>
                  {c.name}
                </option>
              ))}
            </select>
          </div> */}

          <input
            type="search"
            className="search-input-text"
            onChange={handleChange("search")}
            placeholder="Search entire online store..."
          />
        </div>

        <div className="search-btn-div" style={{ border: "none" }}>
          <button className="search-btn">
            <FontAwesomeIcon icon={faMagnifyingGlass} />
          </button>
        </div>
      </div>
    </form>
  );

  return (
    <div className="welcome-search-container">
      <div className="welcome-div">
        <p className="welcome-text">
          Welcome to The Brightbooks... High class online bookshop.
        </p>
      </div>

      <div className="Seearch-div">
        <div>{searchForm()}</div>
        <div className="row">
          <div className="col-12">{searchedProducts(results)}</div>
        </div>
      </div>
    </div>
  );
};

export default Search;
