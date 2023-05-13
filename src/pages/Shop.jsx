import { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import { getAllProducts } from "../api/fakeStoreApi";

const Shop = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const searchAllProducts = async () => {
      try {
        const result = await getAllProducts();
        console.log(result.data);
        setProducts(result.data);
      } catch (error) {
        console.log(error);
      }
    };
    searchAllProducts();
  }, []);

  return (
    <section>
      <h1>Shop</h1>
      <NavLink to="/">Home</NavLink>
      <span> - </span>
      <NavLink to="/shop">Shop</NavLink>

      <div>
        <p>Showing 1-9 of 55 results</p>
        <p>Default sorting</p>
        <div>
          <ul>
            {products.map(
              ({ id, title, price, category, image, rating, description }) => (
                <li key={id}>
                  <img src={image} alt="rick and morty logo" />
                  <p>{title}</p>
                  <p>{description}</p>
                </li>
              )
            )}
          </ul>
          <label>
            <input
              type="text"
              name="searchHere"
              autoComplete="off"
              placeholder="Search here"
            ></input>
          </label>
          <h3>Categories</h3>
          <ul>
            <li>
              <p>All</p>
            </li>
            <li>
              <p>Electronics</p>
            </li>
            <li>
              <p>Jewelery</p>
            </li>
            <li>
              <p>Men's clothing</p>
            </li>
            <li>
              <p>Women's clothing</p>
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default Shop;
