import { useNavigate } from "react-router-dom";

export default function Navbar() {
  const navigate = useNavigate();

  return (
    <nav className="flex justify-between items-center bg-green-200 px-6 py-3 shadow-md">
      {/* Logo on left */}
      <div
        className="font-bold text-xl cursor-pointer"
        onClick={() => navigate("/")}
      >
      logo
      </div>
      <div className="flex space-x-6">
        <button onClick={() => navigate("/women")}>Women</button>
        <button onClick={() => navigate("/kids")}>Kids</button>
        <button onClick={() => navigate("/cart")}>Cart</button>
        <button onClick={() => navigate("/wishlist")}>Wishlist</button>
        <button onClick={() => navigate("/login")}>Login / Signup</button>
      </div>
    </nav>
  );
}
