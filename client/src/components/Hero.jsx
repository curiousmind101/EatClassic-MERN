import React from "react";

const Hero =()=>{
    return (
        <div className="max-w-[1620px] mx-auto p-4 mt-[5rem]">
            <div className="max-h-[500px] relative">
                <div className="absolute h-full w-full text-gray-200 max-h-[500px] bg-black/40 flex flex-col justify-end pb-4">
                    <h1 className="px-4 text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold">The <span className="text-orange-400">Best</span></h1>
                    <h1 className="px-4 text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold"><span className="text-orange-400">Foods</span> Delivered</h1>
                </div>
                <img className="w-full max-h-[500px] object-cover" src="https://images.pexels.com/photos/10580197/pexels-photo-10580197.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="classic_indian"/>
            </div>
        </div>
    );
}

export default Hero;