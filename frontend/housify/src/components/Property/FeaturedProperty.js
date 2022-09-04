import PropertyCard from "../utils/PropertyCard";

const FeaturedProperty = (props) => {
  return (
    <div className="w-full">
      <div className="container">
        {/* section label */}
        <div className="py-10">
          <h3 className="text-purple-700"> {props.header} </h3>
          <h5 className="pt-4"> {props.text} </h5>
        </div>

        {/* property-card-container */}
        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-4">
          <div className="p-10">
            <PropertyCard img={""} price="$10,000" propertyType="Bungalow" city="Lagos" country="NG" />
          </div>
          <div className="p-10">
            <PropertyCard img={""} price="$10,000" propertyType="Bungalow" city="Lagos" country="NG" />
          </div>
          <div className="p-10">
            <PropertyCard img={""} price="$10,000" propertyType="Bungalow" city="Lagos" country="NG" />
          </div>
        </div>
        <div className="w-full pt-10 items-center"></div>
        <button>Load More</button>
      </div>
    </div>
  );
};

export default FeaturedProperty;
