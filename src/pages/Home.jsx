import { Link } from "react-router-dom";

const Home = () => {
  return (
    <section>
      <div>
        <h1>
          Make Your Fashion <br></br> Look Swanky.
        </h1>
        <Link to="/shop">Shop now</Link>
      </div>

      <ul
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <li>
          <h2>Quick Delivery</h2>
          <p>Inside City delivery within 5 days</p>
        </li>
        <li>
          <h2>Pick Up In Store</h2>
          <p>We have option of pick up in store.</p>
        </li>
        <li>
          <h2>Special Packaging</h2>
          <p>Our packaging is best for products.</p>
        </li>
      </ul>
    </section>
  );
};

export default Home;
