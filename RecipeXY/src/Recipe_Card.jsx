import React, { useState } from "react";
import { recipes } from "./Recipe_Data";
import { Link } from "react-router-dom";

function Recipe_Card() {
    const [heartClick, setHeartClick] = useState({});
    const handleHeart = (id) => {
        setHeartClick((prev) => ({
            ...prev,
            [id] : !prev[id]
        }));
    }
    return (
        <>
            <div className="recipe-grid">
                {recipes.map((recipe) => {
                    return (
                        <div key={recipe.id} className="recipe-card">
                            <Link to={`/recipe/${recipe.id}`} className="link">
                                <img
                                    src={recipe.imageUrl}
                                    alt={recipe.title}
                                    className="recipe-image"
                                />
                            </Link>
                                <div className="recipe-tags-div">
                                    <div className="recipe-tags">
                                        <p className="italian">
                                            {recipe.cuisine}
                                        </p>
                                        <p className="dinner">
                                            {recipe.mealType}
                                        </p>
                                    </div>
                                    <div className={`heart-div ${heartClick[recipe.id] ? "active" : ""}`}  onClick={() => handleHeart(recipe.id)}>
                                        <span className="material-symbols-outlined heart">
                                            favorite
                                        </span>
                                    </div>
                                </div>
                                <h2>{recipe.title}</h2>
                                <h3>{recipe.description}</h3>
                                <hr />
                                <div className="minutes-servings-div">
                                    <div className="minutes-div">
                                        <span className="material-symbols-outlined">
                                            timer
                                        </span>
                                        <p>
                                            {recipe.prepTime + recipe.cookTime}{" "}
                                            mins
                                        </p>
                                    </div>
                                    <div className="servings-div">
                                        <span className="material-symbols-outlined">
                                            restaurant
                                        </span>
                                        <p>{recipe.servings} servings</p>
                                    </div>
                                </div>
                        </div>
                    );
                })}
            </div>
        </>
    );
}

export default Recipe_Card;
