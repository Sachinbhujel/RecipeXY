import React, {useState} from "react";
import './App.css';

function Search({setItem}) {
    const [showCuisine, setShowCuisine] = useState(false);
    const [showMeal, setShowMeal] = useState(false);
    return (
        <div className="search">
            <div className="search-div">
                <span className="material-symbols-outlined">search</span>
                <input type="text" placeholder="Search recipes..." onChange={(e) => setItem(e.target.value.toLowerCase())}/>
            </div>
            <div className="cuisine-meal-div">
                <div className="cuisine-wrapper">
                <div className="cuisine-div" onClick={() => setShowCuisine(!showCuisine)}>
                    <span className="material-symbols-outlined">menu_book</span>
                    <p>Cuisine</p>
                </div>
                {showCuisine && (
                <div className="dropdown cuisine-dropdown">
                    <p>Italian</p>
                    <p>Chinese</p>
                    <p>Mexican</p>
                    <p>Indian</p>
                </div>
            )}
                </div>
                <div className="meal-wrapper">
                <div className="meal-div" onClick={() => setShowMeal(!showMeal)}>
                    <span className="material-symbols-outlined">menu_book</span>
                    <p>Meal Type</p>
                </div>
                {showMeal && (
                <div className="dropdown meal-dropdown">
                    <p>Breakfast</p>
                    <p>Lunch</p>
                    <p>Dinner</p>
                    <p>Snack</p>
                </div>
            )}
                </div>
            </div>
        </div>
    );
}

export default Search;
