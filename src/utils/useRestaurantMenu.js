import { useState, useEffect } from "react";
import { MENU_API } from "./constants";

const useRestaurantMenu = (resId) => {
  const [resInfo, setResInfo] = useState(null);

  const fetchMenu = async () => {
    const response = await fetch(`${MENU_API}${resId}`);
    const json = await response.json();
    setResInfo(json);
  };

  useEffect(() => {
    fetchMenu();
  }, []);

  return resInfo;
};

export default useRestaurantMenu;
