import React, { useEffect } from "react";
import Search from "./Search";
import "./App.css";
import { useState } from "react";
import Recipe_Card from "./Recipe_Card";

function Home() {
    const [showTopBtn, setShowTopBtn] = useState(false);
    const [item, setItem] = useState("");


    useEffect(() => {
        const handleScrollY = () => {
            if(window.scrollY > 300){
                setShowTopBtn(true);
              } else{
                setShowTopBtn(false);
              }
        }

        window.addEventListener("scroll", handleScrollY)
    })

    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behaviour: "smooth"
        })
    }
    return (
        <>
            <div className="home">
                <div className="home-top">
                    <h1>RecipeXY</h1>
                    <p>
                        Browse our collection of delicious recipes from around
                        the world. Filter by cuisine, meal type, or search for
                        your favorites.
                    </p>
                </div>
                <Search setItem={setItem}/>
                <Recipe_Card item={item}/>
                {showTopBtn && (
                    <div  onClick={scrollToTop} className="scroll-to-top">
                        <span className="material-symbols-outlined">
                            arrow_upward
                        </span>
                    </div>
                )}
            </div>
        </>
    );
}

export default Home;
