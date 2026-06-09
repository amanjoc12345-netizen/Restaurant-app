import "./Header.css";

function Header() {
  return (
    <>
      <header className="header">
        <h1>ReactMeals</h1>

        <button className="cart-button">
          🛒 Your Cart
          <span className="badge">0</span>
        </button>
      </header>

      <div className="main-image">
        <img
          src="https://images.unsplash.com/photo-1504674900247-0877df9cc836"
          alt="Food"
        />
      </div>
    </>
  );
}

export default Header;