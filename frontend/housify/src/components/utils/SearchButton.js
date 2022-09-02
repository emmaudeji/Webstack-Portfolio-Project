import { React, useState } from "react";

const SearchButton = (props) => {
  // implementing state and hooks

  const [country, setCountry] = useState("");

  const handleSubmit = (event) => {
    if (event) {
      event.preventDefault();
      alert("You are searching for " + country + "!");

      setCountry("");
    }
  };

  const handleInputChange = (event) => {
    event.persist();
    const { value } = event.target.value;

    setCountry(value);
  };

  return (
    <div className="md:mr-20 mt-5">
      <form className="relative" method="Post" action="">
        <input onChange={handleInputChange} type={"text"} value={country} className="country rounded-full py-4 px-6 w-full text-black outline-0" placeholder="Enter Country" />

        {/*you can replace with search icon */}
        <button onClick={handleSubmit} className="absolute right-0 rounded-full py-4 px-6 bg-pink-700 hover:bg-purple-700">
          Search
        </button>
      </form>
    </div>
  );
};

export default SearchButton;
