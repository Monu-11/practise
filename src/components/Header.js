import { LOGO_URL } from "../utils/constants";
import { useContext, useState } from "react";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";
import UserContext from "../utils/UserContext";
import { useSelector } from "react-redux";

const Header = () => {
  const [btnName, setBtnName] = useState("Login");

  const onlineStatus = useOnlineStatus();

  const { loggedUser } = useContext(UserContext);

  // Subscribing the store using selector
  const cartItems = useSelector((store) => store.cart.items);

  return (
    <div className="flex justify-between bg-pink-100 shadow-lg sm:bg-yellow-50">
      <div className="logo-container">
        <img className="w-24" src={LOGO_URL} />
      </div>
      <div className="flex items-center">
        <ul className="flex p-4 m-4">
          <li className="px-4">Online Status: {onlineStatus ? "✅" : "🔴"}</li>
          <li className="px-4">
            <Link to={"/"}>Home</Link>
          </li>
          <li className="px-4">
            <Link to={"/about"}>About Us</Link>
          </li>
          <li className="px-4">
            <Link to={"/contact"}>Contact Us</Link>
          </li>
          <li className="px-4">
            <Link to={"/grocery"}>Grocery</Link>
          </li>
          <li className="px-4 font-bold text-xl">
            <Link to={"/cart"}>Cart - ({cartItems.length} items)</Link>
          </li>
          <button
            onClick={() =>
              btnName === "Login" ? setBtnName("Logout") : setBtnName("Login")
            }
            className="login"
          >
            {btnName}
          </button>
          <li className="px-4 font-bold">{loggedUser}</li>
        </ul>
      </div>
    </div>
  );
};

export default Header;
