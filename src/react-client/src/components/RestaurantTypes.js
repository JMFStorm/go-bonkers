import React from "react";

const RestaurantTypes = () => {
  return (
    <div>
      <div className="second__left">
        <h2 className="second_header">Type</h2>
        <div>
          <label className="radio-buttons">
            <input name="type" type="checkbox" value="restaurant" checked={type === "restaurant"} />
            <span>Restaurants</span>
          </label>
        </div>
        <div>
          <label className="radio-buttons">
            <input name="type" type="checkbox" value="fastfood" checked={type === "fastfood"} />
            <span>Fast Food</span>
          </label>
        </div>
        <div>
          <label className="radio-buttons">
            <input name="type" type="checkbox" value="bar" checked={type === "bar"} />
            <span>Bar / Pubs</span>
          </label>
        </div>
      </div>
    </div>
  );
};

export default RestaurantTypes;
