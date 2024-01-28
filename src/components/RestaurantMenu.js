import React, { useState } from "react";
import Shimmer from "./Shimmer";
import { useParams } from "react-router-dom";
import useRestaurantMenu from "../utils/useRestaurantMenu";
import ResturantCategory from "./RestaurantCategory";

const RestaurantMenu = () => {
  const { resId } = useParams();

  const resInfo = useRestaurantMenu(resId);

  const [showItem, setShowItem] = useState(false);

  const [showIndex, setShowIndex] = useState(0);

  if (!resInfo) return <Shimmer />;

  const { name, cuisines, costForTwoMessage } =
    resInfo?.data?.cards[0]?.card?.card?.info || {};

  const categories =
    resInfo?.data?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards.filter(
      (c) =>
        c.card?.card?.["@type"] ===
        "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory"
    );

  return (
    <div className="text-center">
      <h1 className="font-bold my-6 text-2xl">{name}</h1>
      <p className="font-bold text-lg">
        {cuisines && cuisines.join(", ")} - {costForTwoMessage}
      </p>
      {/* Categories Accordian */}
      {categories.map((category, index) => (
        <ResturantCategory
          key={category?.card?.card.title}
          data={category?.card?.card}
          showItem={showItem ? (index === showIndex ? true : false) : false}
          setShowIndex={() => setShowIndex(index)}
          showIndex={showIndex}
          setShowItem={setShowItem}
        />
      ))}
    </div>
  );
};

export default RestaurantMenu;
