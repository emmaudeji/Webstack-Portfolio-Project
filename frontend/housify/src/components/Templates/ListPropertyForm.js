import { React, useState } from "react";


function ListPropertyForm() {
  const [inputs, setInputs] = useState({
    address: "",
    city: "",
    state: "",
    country: "",
    zipCode: "",
    propertyType: "",
    bedrooms: "",
    imageUrl: "",
    description: "",
    firstPrice: "",
    secondPrice: "",
  });

  const handleSubmit = (event) => {
    if (event) {
      event.preventDefault();
      //  SEND TO ENPOINT
      alert(`User Created!
         Name: ${inputs.address} ${inputs.city}
         Email: ${inputs.country}
         
         Thank you for listing a property`);
    }
    setInputs({address: "",
    city: "",
    state: "",
    country: "",
    zipCode: "",
    propertyType: "",
    bedrooms: "",
    imageUrl: "",
    description: "",
    firstPrice: "",
    secondPrice: "",});
  };

  const handleInputChange = (event) => {
    event.persist();
    const { name, value } = event.target;

    setInputs((prevInputs) => ({
      ...prevInputs,
      [name]: value,
    }));
  };

  return (
    <div className="Property">
      {/* <Header /> */}

      <div className="w-full px-10 pt-8 pb-4 text-center ">
        <h2 className="font-semibold">List a property for sale or rent</h2>
      </div>

      {/* form */}
      <div className="w-full  mx-auto py-20 px-10  justify-between text-center  bg-zinc-800 my-10">
        {/* testing form */}
        {/* <h4>
          Hello {inputs.firstName} {inputs.lastName}
        </h4>
        <p>{inputs.email}</p> */}

        <form onSubmit={handleSubmit}>
          <div className=" md:mx-[100px] md:grid grid-cols-2 gap-10  text-xl text-left pb-10">
            <div>
              <h2 className="font-thin text-left pb-4 text-3xl">
                Property Details
              </h2>
              <div>
                <label className="">Address</label>
                <input
                  className="formInput"
                  type="text"
                  name="address"
                  onChange={handleInputChange}
                  value={inputs.address}
                  placeholder="Enter Address"
                />
              </div>
              <div>
                <label>City</label>
                <input
                  className="formInput"
                  type="text"
                  name="city"
                  onChange={handleInputChange}
                  value={inputs.city}
                  placeholder="Enter name of city"
                  required
                />
              </div>

              <div>
                <label>State</label>
                <input
                  className="formInput"
                  type="text"
                  name="state"
                  onChange={handleInputChange}
                  placeholder="Enter yout state"
                  value={inputs.state}
                />
              </div>
              <div>
                <label>Country</label>
                <input
                  className="formInput"
                  type="text"
                  name="country"
                  onChange={handleInputChange}
                  placeholder="Enter country abbreviation; e.g NG"
                  value={inputs.country}
                  required
                />
              </div>
              <div>
                <label>Zip code</label>
                <input
                  className="formInput"
                  type="number"
                  name="zipInput"
                  onChange={handleInputChange}
                  placeholder="Enter zip code"
                  value={inputs.zipCode}
                />
              </div>
              <div>
                <label>Property Type</label>
                <input
                  className="formInput"
                  type="text"
                  name="propertyType"
                  onChange={handleInputChange}
                  placeholder="Enter property tyype"
                  value={inputs.propertyType}
                />
              </div>
              <div>
                <label>Bedrooms</label>
                <input
                  className="formInput"
                  type="text"
                  name="bedrooms"
                  onChange={handleInputChange}
                  placeholder="Enter number of rooms available"
                  value={inputs.bedrooms}
                />
              </div>
            </div>

            <div>
              <h2 className="font-thin text-left pb-2 text-3xl">
                Property Images
              </h2>
              <div>
                <label>Image</label>
                <input
                  className="formInput"
                  type="text"
                  name="imageUrl"
                  onChange={handleInputChange}
                  placeholder=""
                  value={inputs.imageUrl}
                  required
                />
              </div>
              <div>
                <label>Image-2</label>
                <input
                  className="formInput"
                  type="text"
                  name="imageUrl2"
                  onChange={handleInputChange}
                  placeholder=""
                  // value={inputs.imageUrl}
                />
              </div>
              <div>
                <label>Image-3</label>
                <input
                  className="formInput"
                  type="text"
                  name="imageUrl3"
                  onChange={handleInputChange}
                  placeholder=""
                  // value={inputs.imageUrl3}
                />
              </div>

              {/* <div>
                <label>Image-2</label>
                <input
                  className="formInput"
                  type="text"
                  name="imageUrl2"
                  onChange={handleInputChange}
                  placeholder=""
                  // value={inputs.imageUrl2}
                />
              </div>
              
              <div>
                <label>Image-4</label>
                <input
                  className="formInput"
                  type="text"
                  name="imageUrl4"
                  onChange={handleInputChange}
                  placeholder=""
                  // value={inputs.imageUrl4}
                />
              </div> */}
              <div>
                <br></br>
                <h2 className="font-thin text-left pb-2 text-3xl">
                  Property Description
                </h2>
                <div>
                  <label>Describe nature of the Property</label>
                  <input
                    className="formInput"
                    type="textarea"
                    name="description"
                    onChange={handleInputChange}
                    placeholder=""
                    value={inputs.description}
                    required
                  />
                </div>
              </div>
              <div>
                <br></br>
                <h2 className="font-thin text-left pb-2 text-3xl">
                  Property Evaluation
                </h2>
                <p>State the cost of the property</p>
                <div className="flex justify-between">
                  <div className="pr-4">
                    <label>First Price</label>
                    <input
                      className="formInput"
                      type="number"
                      name="firstPrice"
                      onChange={handleInputChange}
                      placeholder=""
                      value={inputs.firstPrice}
                      required
                    />
                  </div>
                  <div>
                    <label>Second Price</label>
                    <input
                      className="formInput"
                      type="number"
                      name="secondPrice"
                      onChange={handleInputChange}
                      placeholder=""
                      value={inputs.secondPrice}
                      required
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="mx-auto text-center text-2xl">
            <button type="submit button" className="px-14 py-6">
              Submit
            </button>
          </div>
        </form>
      </div>

      {/* <Footer /> */}
    </div>
  );
}

export default ListPropertyForm;
