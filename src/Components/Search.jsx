import React from "react";
import ApiCall from "../Utils/ApiCall";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import { MagnifyingGlass } from "react-loader-spinner";

export default function Search({ data, setData, setEmptyState }) {
  const [searchTerm, setSearchTerm] = React.useState("");
  const [isLoading, setIsLoading] = React.useState(false);
  const [isIconClicked, setIsIconClicked] = React.useState(false);
  const [isSearchTermEmpty, setIsSearchTermEmpty] = React.useState(false); //new change

  React.useEffect(() => {
    setEmptyState(isSearchTermEmpty);
    if (isIconClicked && searchTerm.trim() !== "") {
      setIsLoading(true); //? Setting up the loading screen while pulling up the data
      ApiCall(searchTerm)
        .then((resp) => {
          if (Object.keys(resp).length === 0) {
            setIsLoading(false);
            setData(["No data"]);
          } else {
            setData(resp); //? Setting up the props data variable passed from App.js after the data is pulled up
            setIsLoading(false); //? Removing the loading screen
          }
        })
        .catch((err) => {
          console.log("Some error propped up ", err); //TODO Code for loading screen
        });
      setIsIconClicked(false);
    }

    //? Cleanup Function
    return () => {
      setData([]);
    };
  }, [searchTerm, isIconClicked, setData, isSearchTermEmpty, setEmptyState]);

  //? Tracks change in input box
  const handleChange = (e) => {
    setSearchTerm(e.target.value.toLowerCase());
    setIsSearchTermEmpty(false); // new add
  };

  //? sets the iconClicked variable to true when search icon is clicked/enter is hit
  const handleIconClick = (e) => {
    e.preventDefault();
    if (searchTerm.trim() !== "") {
      setIsIconClicked(true);
    } else {
      setIsSearchTermEmpty(true);
    }
  };

  if (isLoading) {
    return (
      <div className="loading-screen">
        <MagnifyingGlass
          visible={true}
          height="80"
          width="80"
          ariaLabel="MagnifyingGlass-loading"
          wrapperStyle={{}}
          wrapperClass="MagnifyingGlass-wrapper"
          glassColor="#c0efff"
          color="#e15b64"
        />
      </div>
    );
  } else {
    return (
      <div className={`search ${isSearchTermEmpty ? "empty" : ""}`}>
        <form action="">
          <input
            type="text"
            className="search-bar"
            value={searchTerm}
            onChange={handleChange}
            placeholder="Example :- life"
          />
          <button className="search-icon" onClick={handleIconClick}>
            <FontAwesomeIcon
              icon={faMagnifyingGlass}
              style={{ color: "#bf0d9e" }}
              size="lg"
              id="magnifying-glass"
            />
          </button>
        </form>
      </div>
    );
  }
}
