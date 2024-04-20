import React, { useState } from "react"; // Import React
import productData from "../products.json";
import { Link } from "react-router-dom";
import SelectedCatagory from "../component/SelectedCatagory";

const title = (
  <h2>
    Search Your One <span>Thousand</span> of Products
  </h2>
);
const desc = "We have the largest collection of products.";

const bannerList = [
  {
    iconName: "icofont-users-alt-4",
    text: "1.5 Million Customers",
  },
  {
    iconName: "icofont-notification",
    text: "More than 2000 Merchants",
  },
  {
    iconName: "icofont-globe",
    text: "Buy Anything Online",
  },
];

const Banner = () => {
  const [searchInput, setSearchInput] = useState("");
  const [filteredProducts, setFilteredProducts] = useState(productData);

  const handleSearch = (e) => {
    const searchTerm = e.target.value;
    setSearchInput(searchTerm);

    const filtered = productData.filter((product) =>
      product.name.toLowerCase().includes(searchTerm.toLowerCase())
    );
    setFilteredProducts(filtered);
  };

  console.log(filteredProducts);
  console.log(searchInput);

  return (
    <div className="banner-section style-4">
      <div className="container">
        <div className="banner-content">
          {title}
          <form>
            <SelectedCatagory select ={"all"} />
            <input
              type="text"
              placeholder="Search Your Product"
              id="search"
              value={searchInput}
              onChange={handleSearch}
            />
            <button type="submit">
                <i className="icofont-search"></i>
            </button>
          </form>
          <p>{desc}</p>

          <ul className="lab-ul">
            {searchInput &&
              filteredProducts.map((product, i) => (
                <li key={i}>
                  <Link to={`/shop/${product.id}`}>{product.name}</Link>
                </li>
              ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Banner;
