import PropertyCard from "../utils/PropertyCard";
//import useFetch from "../utils/useFetch";

const FeaturedProperty = ({ items, text, header }) => {
  return (
    <div className="w-full">
      <div className="container">
        {/* section label */}
        <div className="py-10">
          <h3 className="text-purple-700"> {header} </h3>
          <h5 className="pt-4"> {text} </h5>
        </div>

        {/* property-card-container */}
        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-4">
          {items.map(({ id, title, url, price, purpose, state }) => (
            <div className="p-10" key={id}>
              <PropertyCard img={url} price={price} state={state} purpose={purpose} title={title} />
            </div>
          ))}
        </div>
        <div className="w-full pt-10 items-center"></div>
        <button>Load More</button>
      </div>
    </div>
  );
};

export default FeaturedProperty;
