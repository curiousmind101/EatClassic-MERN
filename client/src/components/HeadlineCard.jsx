import React from "react";

const HeadlinesCards = () =>{
    return (
        
        <div className="max-w-[1620px] mx-auto p-4 py-12 grid md:grid-cols-3 gap-6">
            {/**Card */}
            <div className="rounded-xl relative hover:scale-105 duration-300">
               {/* overlay */}
               <div className="absolute w-full h-full bg-black/30 text-white rounded-xl">
                  <p className="font-bold text-2xl px-2 pt-4">Monsoon is Here,<br/> Pakodas are Here</p>
                  <p className="px-2">Through 6/26</p>
                  <button className="border-white bg-white text-black mx-2 absolute bottom-4 hover:scale-105 duration-150">Order Now</button>
               </div>
               <img className="max-h-[160px] md:max-h-[200px] w-full object-cover rounded-xl" src="https://as2.ftcdn.net/v2/jpg/01/16/77/23/1000_F_116772328_oRqThvo9RhoY27SOzeLpXnfUiDFyhTYM.jpg" alt="trending"/>
            </div>
            {/**Card */}
            <div className="rounded-xl relative hover:scale-105 duration-300">
               {/* overlay */}
               <div className="absolute w-full h-full bg-black/30 text-white rounded-xl">
                  <p className="font-bold text-2xl px-2 pt-4">New Openings</p>
                  <p className="px-2">Through 6/26</p>
                  <button className="border-white bg-white text-black mx-2 absolute bottom-4 hover:scale-105 duration-150">Order Now</button>
               </div>
               <img className="max-h-[160px] md:max-h-[200px] w-full object-cover rounded-xl" src="https://as1.ftcdn.net/v2/jpg/03/24/73/92/1000_F_324739203_keeq8udvv0P2h1MLYJ0GLSlTBagoXS48.jpg" alt="trending"/>
            </div>
            <div className="rounded-xl relative hover:scale-105 duration-300">
               {/* overlay */}
               <div className="absolute w-full h-full bg-black/30 text-white rounded-xl">
                  <p className="font-bold text-2xl px-2 pt-4">We Deliver Sweets Too</p>
                  <p className="px-2">Through 6/26</p>
                  <button className="border-white bg-white text-black mx-2 absolute bottom-4 hover:scale-105 duration-150">Order Now</button>
               </div>
               <img className="max-h-[160px] md:max-h-[200px] w-full object-cover rounded-xl" src="https://as1.ftcdn.net/v2/jpg/04/84/94/58/1000_F_484945880_yqcmUlx4PR22FnuLWEknDRji2RLiM8Nh.jpg" alt="trending"/>
            </div>
        </div>
    );
}

export default HeadlinesCards;