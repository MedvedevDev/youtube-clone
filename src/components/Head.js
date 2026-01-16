import { useDispatch } from "react-redux";
import { toggleMenu } from "../utils/appSlice";
import { useEffect, useState } from "react";
import { GOOGLE_SEARCH_API } from "../utils/constants";

export const Head = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [suggestions, setSuggestions] = useState([]);
  const [showSuggestions, setShowSuggestions] = useState(false);

  //implementing debouncing technique for search
  useEffect(() => {
    // make an api call after every key press
    // but if the difference between 2 API calls is < 200ms
    // then decline the API call
    const timer = setTimeout(() => getSearchSuggestions(), 200);

    return () => {
      clearTimeout(timer);
    };
  }, [searchQuery]);

  // get auto suggestions via Google API
  const getSearchSuggestions = async () => {
    const data = await fetch(GOOGLE_SEARCH_API + searchQuery);
    const json = await data.json();
    // save suggestions into array
    setSuggestions(json[1]);
  };

  const dispatch = useDispatch();
  const toggleMenuHandler = () => {
    dispatch(toggleMenu()); // dispatching the action
  };

  return (
    <div className="grid grid-cols-12 items-center p-5 mb-2 shadow-lg">
      {/* burger menu + logo*/}
      <div className="flex col-span-2 items-center">
        <img
          onClick={() => toggleMenuHandler()}
          className="h-8 cursor-pointer"
          alt="menu"
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/b2/Hamburger_icon.svg/1200px-Hamburger_icon.svg.png"
        />

        <img
          className="h-8 mx-5"
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/b8/YouTube_Logo_2017.svg/2560px-YouTube_Logo_2017.svg.png"
          alt="logo"
        />
      </div>

      {/* search input + suggestions */}
      <div className="col-span-8 flex justify-center">
        <div className="flex w-1/2">
          <div className="relative flex-1">
            <input
              type="text"
              className="w-full border border-gray-400 p-2 rounded-l-full"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              onFocus={() => setShowSuggestions(true)}
              onBlur={() => setShowSuggestions(false)}
            />

            {/* suggestions */}
            {showSuggestions && suggestions.length > 0 && (
              <ul className="absolute left-0 top-full w-full bg-white border border-gray-300 rounded-lg shadow-lg mt-1 z-50">
                {suggestions.map((s) => (
                  <li
                    key={s}
                    className="px-4 py-2 hover:bg-gray-100 cursor-pointer"
                  >
                    {s}
                  </li>
                ))}
              </ul>
            )}
          </div>

          {/* search button */}
          <button className="border border-gray-400 p-2 rounded-r-full bg-gray-100">
            Search
          </button>
        </div>
      </div>

      <div className="col-span-2 flex justify-end">
        {/* user icon */}
        <img
          className="h-8"
          src="https://www.iconpacks.net/icons/2/free-user-icon-3296-thumb.png"
        />
      </div>
    </div>
  );
};
