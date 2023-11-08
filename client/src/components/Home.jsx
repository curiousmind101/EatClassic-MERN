import React from "react";
import Hero from "./Hero";
import HeadlinesCards from "./HeadlineCard";
import Food from "./Food";
import Category from "./Category";
import Copyrights from "./Copyrights";

const Home = ()=>{
    return (
        <div>
            <Hero/>
            <HeadlinesCards/>
            <Food/>
            <Category/>
            <Copyrights/>
        </div>
    )
}

export default Home;