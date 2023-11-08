import React, { useEffect, useState } from "react";
// import { data } from "../Data/data";
import Card from "./Card";
import { useDispatch, useSelector } from "react-redux";
import { getAllDishes } from "../actions/dishesAction";
import { Loader } from "./Loader";

const Food = () => {
  const dispatch = useDispatch();
  const dishesState = useSelector((state) => state.getAlldishReducer);
  const { loading, dishes, error } = dishesState;
  // console.log(dishes);
  useEffect(() => {
    dispatch(getAllDishes());
  }, [dispatch]);

  const data = Array.from(dishes);
  const [foods, setFoods] = useState([]);

  const filterType = (category) => {
    dishes &&
      setFoods(
        dishes.filter((item) => {
          return item.category === category;
        })
      );
  };

  const filterPrice = (price1, price2) => {
    setFoods(
      dishes &&
        dishes.filter((item) => {
          return item.price <= price2 && item.price >= price1;
        })
    );
  };
  // const [Limit, setLimit] = useState(8);
  return (
    <div className="max-w-[1620px] m-auto px-4 py-12">
      <h1 className="text-orange-600 font-bold text-4xl text-center">
        Top Rated Menu Items
      </h1>
      {/**Filter Row */}
      <div className="flex flex-col lg:flex-row justify-between">
        <div>
          {/**Filter type */}
          <p className="font-bold text-gray-700">Filter Type</p>
          <div className="flex justify-between flex-wrap gap-2">
            <button
              onClick={() => {
                setFoods(foods);
                // setLimit(100);
              }}
              className="border-orange-600 text-orange-600 hover:bg-orange-600 hover:text-white"
            >
              All
            </button>
            <button
              onClick={() => {
                filterType("paneer");
                // setLimit(100);
              }}
              className="border-orange-600 text-orange-600 hover:bg-orange-600 hover:text-white"
            >
              Paneer
            </button>
            <button
              onClick={() => {
                filterType("Chicken");
                // setLimit(100);
              }}
              className="border-orange-600 text-orange-600 hover:bg-orange-600 hover:text-white"
            >
              Chicken
            </button>
            <button
              onClick={() => {
                filterType("biryani");
                // setLimit(100);
              }}
              className="border-orange-600 text-orange-600 hover:bg-orange-600 hover:text-white"
            >
              Biryani
            </button>
            <button
              onClick={() => {
                filterType("bread");
                // setLimit(100);
              }}
              className="border-orange-600 text-orange-600 hover:bg-orange-600 hover:text-white"
            >
              Bread
            </button>
            <button
              onClick={() => {
                filterType("sweets");
                // setLimit(100);
              }}
              className="border-orange-600 text-orange-600 hover:bg-orange-600 hover:text-white"
            >
              Sweets
            </button>
          </div>
        </div>
        <div>
          {/**Filter Price */}
          <p className="font-bold text-gray-700 ">Filter Price</p>
          <div className="flex justify-between max-w-[800px] w-full gap-2">
            <button
              onClick={() => filterPrice(0, 100)}
              className="border-orange-600 text-orange-600 hover:bg-orange-600 hover:text-white"
            >
              Rs. 0-100{" "}
            </button>
            <button
              onClick={() => filterPrice(100, 300)}
              className="border-orange-600 text-orange-600 hover:bg-orange-600 hover:text-white"
            >
              Rs. 100-300
            </button>
            <button
              onClick={() => filterPrice(300, 400)}
              className="border-orange-600 text-orange-600 hover:bg-orange-600 hover:text-white"
            >
              Rs. 300-400{" "}
            </button>
            <button
              onClick={() => filterPrice(400, 500)}
              className="border-orange-600 text-orange-600 hover:bg-orange-600 hover:text-white"
            >
              Rs. 400-500
            </button>
          </div>
        </div>
      </div>
      {loading ? (
        <Loader className="mt-10" />
      ) : error ? (
        <h1>Eroor while fetching foods</h1>
      ) : (
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 pt-4">
          {data.map((item, index) => (
            <Card key={index} item={item} />
          ))}
        </div>
      )}
    </div>
  );
};
export default Food;
