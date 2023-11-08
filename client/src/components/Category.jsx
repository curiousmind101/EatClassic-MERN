import React from "react";
import { categories } from "../Data/data";
const Category = () =>{
    return(
        <div className="max-w-[1620px] py-12 px-4">
            <h1 className="text-orange-500 font-bold text-4xl text-center">Top Rated Menu Items</h1>
            {/**Catergories */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-5 py-6">
                {categories.map((item, index)=>(
                    <div key={index} className="bg-gray-200 rounded-lg p-4 flex justify-between items-center hover:scale-105 duration-300">
                       <h2 className="font-bold sm:text-xl">{item.name}</h2>
                       <img className="w-20 h-20 rounded-full" src={item.image} alt={item.name}/>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default Category;