const Shimmer = () => {
  const generateCards = () => {
    const cardCount = 15;
    const cards = [];

    for (let i = 0; i < cardCount; i++) {
      cards.push(
        <div
          key={i}
          className="w-[250px] mt-20 mx-auto bg-white rounded-md shadow-md overflow-hidden mb-8"
        >
          <div className="h-48 bg-gray-300 animate-pulse"></div>
          <div className="p-6">
            <div className="h-4 w-1/2 bg-gray-300 mb-4 animate-pulse"></div>
            <div className="h-4 w-3/4 bg-gray-300 mb-4 animate-pulse"></div>
            <div className="h-4 w-2/3 bg-gray-300 animate-pulse"></div>
          </div>
        </div>
      );
    }

    return cards;
  };
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4">
      {generateCards()}
    </div>
  );
};

export default Shimmer;
