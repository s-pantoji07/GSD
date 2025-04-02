import { useState } from "react";
import {
  Menu,
  X,
  Search,
  ChevronDown,
  User,
  Bookmark,
  ShoppingCart,
} from "lucide-react";
import { Link, useNavigate } from "react-router-dom";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");
  const navigate = useNavigate();

  const handleSearchChange = (e) => {
    setSearchTerm(e.target.value);
  };

  const handleSearchSubmit = (e) => {
    e.preventDefault();
    navigate(`/products?search=${searchTerm}`);
  };

  return (
    <nav className="bg-neutralLight shadow-md p-4 flex justify-between items-center">
      <div className="flex items-center flex-grow space-x-4">
        <button onClick={() => setMenuOpen(true)} className="lg:p-2">
          <Menu size={24} className="text-darkGreen" />
        </button>

        <h1 className="text-2xl font-bold text-black flex items-center">
          <span className="text-primaryGreen">🌱</span> Organio
        </h1>

        <div className="relative hidden lg:block">
          <button
            onClick={() => setDropdownOpen(!dropdownOpen)}
            className="flex items-center space-x-2 bg-neutralMedium text-neutralDark px-3 py-2 rounded-full"
          >
            <span>All Categories</span>
            <ChevronDown size={16} />
          </button>
          {dropdownOpen && (
            <div className="absolute left-0 mt-2 bg-white text-black shadow-lg rounded-lg w-40">
              <ul className="p-2">
                <li className="hover:bg-gray-100 p-2 cursor-pointer">
                  Groceries
                </li>
                <li className="hover:bg-gray-100 p-2 cursor-pointer">Drinks</li>
                <li className="hover:bg-gray-100 p-2 cursor-pointer">
                  Chocolates
                </li>
              </ul>
            </div>
          )}
        </div>

        <div className="flex flex-grow items-center bg-neutralMedium rounded-full px-5 py-2 max-w-md">
          <form
            onSubmit={handleSearchSubmit}
            className="flex w-full flex-row items-center"
          >
            <Search className="text-gray-500 self-center" size={25} />
            <input
              type="text"
              placeholder="Search for more than 20,000 products..."
              value={searchTerm}
              onChange={handleSearchChange}
              className="w-full px-2 text-neutralDark bg-transparent outline-none border-none"
            />
            {searchTerm && (
              <button
                type="button"
                onClick={() => handleSearchChange({ target: { value: "" } })}
                className="ml-2 text-gray-500 self-center"
              >
                &#10005;
              </button>
            )}
          </form>
        </div>
      </div>

      <div className="hidden lg:flex items-center space-x-6 text-black">
        <button
          onClick={() => navigate("/")}
          className="font-semibold hover:text-primaryGreen"
        >
          Home
        </button>
        <div className="relative">
          <button
            onClick={() => navigate("/myorders")}
            className="font-semibold hover:text-primaryGreen"
          >
            My Orders
          </button>
        </div>

        <User
          size={22}
          className="hover:text-primaryGreen cursor-pointer"
          onClick={() => navigate("/profile")}
        />
        <Bookmark size={22} className="hover:text-primaryGreen cursor-pointer" />
        <ShoppingCart
          size={22}
          className="hover:text-primaryGreen cursor-pointer"
          onClick={() => navigate("/cart")}
        />
      </div>

      <div
        className={`fixed top-0 left-0 h-full w-64 bg-neutralLight shadow-lg transform ${
          menuOpen ? "translate-x-0" : "-translate-x-full"
        } transition-transform duration-300 z-50`}
      >
        <div className="p-4 flex justify-between items-center border-b">
          <h2 className="text-xl font-bold text-darkGreen">Our Menu</h2>
          <button onClick={() => setMenuOpen(false)}>
            <X size={24} className="text-gray-600" />
          </button>
        </div>

        <ul className="p-4 space-y-4 text-neutralDark">
          <li className="hover:bg-gray-100 p-2 cursor-pointer">
            <Link
              to="#"
              className="block w-full h-full"
              onClick={() => setMenuOpen(false)}
            >
              Fruits and Vegetables
            </Link>
          </li>
          <li className="hover:bg-gray-100 p-2 cursor-pointer">
            <Link
              to="#"
              className="block w-full h-full"
              onClick={() => setMenuOpen(false)}
            >
              Dairy and Eggs
            </Link>
          </li>
          <li className="hover:bg-gray-100 p-2 cursor-pointer">
            <Link
              to="#"
              className="block w-full h-full"
              onClick={() => setMenuOpen(false)}
            >
              Meat and Poultry
            </Link>
          </li>
          <li className="hover:bg-gray-100 p-2 cursor-pointer">
            <Link
              to="#"
              className="block w-full h-full"
              onClick={() => setMenuOpen(false)}
            >
              Seafood
            </Link>
          </li>
          <li className="hover:bg-gray-100 p-2 cursor-pointer">
            <Link
              to="#"
              className="block w-full h-full"
              onClick={() => setMenuOpen(false)}
            >
              Bakery and Bread
            </Link>
          </li>
          <li className="hover:bg-gray-100 p-2 cursor-pointer">
            <Link
              to="#"
              className="block w-full h-full"
              onClick={() => setMenuOpen(false)}
            >
              Canned Goods
            </Link>
          </li>
          <li className="hover:bg-gray-100 p-2 cursor-pointer">
            <Link
              to="#"
              className="block w-full h-full"
              onClick={() => setMenuOpen(false)}
            >
              Frozen Foods
            </Link>
          </li>
          <li className="hover:bg-gray-100 p-2 cursor-pointer">
            <Link
              to="#"
              className="block w-full h-full"
              onClick={() => setMenuOpen(false)}
            >
              Pasta and Rice
            </Link>
          </li>
          <li className="hover:bg-gray-100 p-2 cursor-pointer">
            <Link
              to="#"
              className="block w-full h-full"
              onClick={() => setMenuOpen(false)}
            >
              Breakfast Foods
            </Link>
          </li>
        </ul>
      </div>

      {menuOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 z-40"
          onClick={() => setMenuOpen(false)}
        ></div>
      )}
    </nav>
  );
}