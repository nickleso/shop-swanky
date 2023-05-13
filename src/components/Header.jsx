import { Link, NavLink } from "react-router-dom";

const Header = () => {
  return (
    <header
      style={{
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
      }}
    >
      <nav style={{ display: "flex", gap: "8px" }}>
        <NavLink to="/">HOME</NavLink>
        <NavLink to="/about">ABOUT</NavLink>
        <NavLink to="/shop">SHOP</NavLink>
        <NavLink to="/blogs">BLOGS</NavLink>
        <NavLink to="/contact">CONTACT</NavLink>
      </nav>
      <Link to="/">SWANKY.</Link>
      <div>
        <button type="button">Login</button>
        <label>
          <input
            type="text"
            name="search"
            autoComplete="off"
            placeholder="SEARCH"
          ></input>
        </label>
        <button type="button">Likes</button>
        <button type="button">Cart</button>
      </div>
    </header>
  );
};

export default Header;
