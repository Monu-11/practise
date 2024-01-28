import ResturantCard, { withPromotedLabel } from "./ResturantCard";
import { useState, useEffect, useContext } from "react";
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";
import UserContext from "../utils/UserContext";

const Body = () => {
  const [listResturants, setListResturants] = useState([]);
  const [filteredResturants, setFilteredResturants] = useState([]);
  const [search, setSearch] = useState("");

  const ResturantCardPromoted = withPromotedLabel(ResturantCard);

  const { setUserName, loggedUser } = useContext(UserContext);

  useEffect(() => {
    fetchData();
  }, []);

  // const fetchData = async () => {
  //   const data = await fetch(
  //     "https://www.swiggy.com/dapi/restaurants/list/v5?lat=18.549429499999988&lng=73.94772699999999"
  //   );

  //   const json = await data.json();
  //   //Optional Chaining
  //   setListResturants(
  //     json?.data?.cards[2]?.card?.card?.gridElements?.infoWithStyle?.restaurants
  //   );
  //   setFilteredResturants(
  //     json?.data?.cards[2]?.card?.card?.gridElements?.infoWithStyle?.restaurants
  //   );
  // };

  const fetchData = async () => {
    const data = await fetch(
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=18.549429499999988&lng=73.94772699999999"
    );

    const json = await data.json();
    console.log(json);

    const restaurants =
      json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle
        ?.restaurants;

    console.log("rest", restaurants);
    // Adding isPromoted: true to 6 or 7 random items
    const randomIndices = getRandomIndices(restaurants?.length, 6);
    const updatedRestaurants = restaurants.map((restaurant, index) => ({
      ...restaurant,
      isPromoted: randomIndices.includes(index),
    }));

    setListResturants(updatedRestaurants);
    setFilteredResturants(updatedRestaurants);
  };

  // Function to get random indices
  const getRandomIndices = (max, count) => {
    const indices = [];
    while (indices.length < count) {
      const randomIndex = Math.floor(Math.random() * max);
      if (!indices.includes(randomIndex)) {
        indices.push(randomIndex);
      }
    }
    return indices;
  };

  const onlineStatus = useOnlineStatus();

  if (onlineStatus === false) {
    return (
      <h1>Looks like you're offline!! Please check your internet connection</h1>
    );
  }

  return listResturants.length === 0 ? (
    <Shimmer />
  ) : (
    <div className="body">
      <div className="flex">
        <div className="m-4 p-4">
          <input
            type="text"
            className="border border-solid border-black rounded-lg p-2 w-80"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            placeholder="Search by Name"
          />
          <button
            className="px-4 py-2 bg-green-100 hover:bg-green-400 m-4 rounded-lg"
            onClick={() => {
              const filter = listResturants?.filter((item) =>
                item.info.name.toLowerCase().includes(search.toLowerCase())
              );
              setFilteredResturants(filter);
            }}
          >
            Search
          </button>
        </div>
        <div className="m-4 p-4 flex items-center">
          <button
            className="px-4 py-2 bg-green-200 hover:bg-green-500 rounded-lg"
            onClick={() => {
              const filterList = listResturants.filter(
                (items) => items.info.avgRating > 4
              );
              setFilteredResturants(filterList);
            }}
          >
            Top Rated Resturants
          </button>
        </div>
        <div className="m-4 p-4 flex items-center">
          <label>UserName :</label>
          <input
            placeholder="User"
            className="p-2 bg-gray-300 border border-black rounded-lg text-black"
            value={loggedUser}
            onChange={(e) => setUserName(e.target.value)}
          />
        </div>
      </div>
      <div className="flex flex-wrap justify-center">
        {filteredResturants?.map((ele) => (
          <Link key={ele.info.id} to={`/restaurants/${ele.info.id}`}>
            {/* if the resturant is promoted then add a promoted label to it */}
            {ele.isPromoted ? (
              <ResturantCardPromoted resData={ele} />
            ) : (
              <ResturantCard resData={ele} />
            )}
          </Link>
        ))}
      </div>
    </div>
  );
  // return <h1>Hello World</h1>;
};

export default Body;
