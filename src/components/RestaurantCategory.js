import ItemList from "./ItemList";

const ResturantCategory = ({ data, showItem, setShowIndex, setShowItem }) => {
  const handleClick = () => {
    debugger;
    setShowIndex();
    setShowItem(!showItem);
  };
  return (
    <div>
      <div className="w-6/12 m-auto my-4 bg-gray-100 shadow-lg p-4 ">
        <div
          onClick={handleClick}
          className="flex justify-between cursor-pointer"
        >
          <span className="font-bold text-lg">
            {data.title} ({data.itemCards.length})
          </span>
          {showItem ? <span>🔼</span> : <span>🔽</span>}
        </div>
        {showItem && <ItemList items={data.itemCards} />}
      </div>
    </div>
  );
};

export default ResturantCategory;

// 1 hours 27 minutes
