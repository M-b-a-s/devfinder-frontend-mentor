import React, { useState } from "react";
import { BsSearch } from "react-icons/bs";

const SearchBar = ( { onSearch }) => {
  const [username, setUsername] = useState('');
  const [showError, setShowError] = useState({ message: "", hasError: false });

  const handleSearch = (e) => {
    e.preventDefault();

    if (username.trim() === "") {
      setShowError({message: 'Please add a username!!!', hasError: true})
    } else {
      // clear input fields and error message
      setUsername('');
      setShowError({message: '', hasError: false})
      // search for username
      onSearch(username)
    }
  }

  return (
    <form className="border-2 mt-3 flex justify-between border-none rounded-xl p-1 bg-white dark:bg-[#475571]">
      <div className="flex items-center px-4 gap-4">
        <BsSearch className="text-blue-700 " />
        <input
          type="text"
          placeholder="Search GitHub username...."
          className="bg-transparent outline-none dark:text-white"
          value={username}
          onChange={(e) => {
            setUsername(e.target.value);
            setShowError({hasError: false})
          }}
        />
      </div>
      <div className="flex items-center gap-2">
        {showError.hasError && (
          <div className="text-red-700 rounded-lg mt-1">
            {showError.message}
          </div>
        )}
        <button
          className="text-white bg-blue-700 rounded-xl px-4 py-2 hover:bg-white hover:text-blue-700"
          onClick={handleSearch}
        >
          Search
        </button>
      </div>
    </form>
  );
};

export default SearchBar;
