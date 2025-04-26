import React from "react";
import { useParams, Link } from "react-router-dom";
import { recipes } from "./Recipe_Data";

function Recipe_Detail() {
    const { id } = useParams();
    const recipe = recipes.find((r) => r.id === parseInt(id));

    if (!recipe) {
        return <div>Recipe not found!</div>;
    }

    return (
        <div className="recipe-detail-container">
            <Link to="/" className="back-btn">
                <span className="material-symbols-outlined">arrow_back</span>
            <button>Back to recipes</button>
            </Link>
            <div className="recipe-image">
                <img
                    src={recipe.imageUrl}
                    alt={recipe.title}
                    className="detail-image"
                />
            </div>
            <div className="recipe-tags">
                <p className="italian">{recipe.cuisine}</p>
                <p className="dinner">{recipe.mealType}</p>
            </div>
            <h1 className="recipe-title">{recipe.title}</h1>
            <p className="recipe-description">{recipe.description}</p>
            <div className="total-time-div">
                <div className="time-div">
                    <span className="material-symbols-outlined">schedule</span>
                    <div className="time-title">
                        <h3>Prep Time</h3>
                        <p>{recipe.prepTime} mins</p>
                    </div>
                </div>
                <div className="time-div">
                    <span className="material-symbols-outlined">schedule</span>
                    <div className="time-title">
                        <h3>Cook Time</h3>
                        <p>{recipe.cookTime} mins</p>
                    </div>
                </div>
                <div className="time-div">
                    <span className="material-symbols-outlined">schedule</span>
                    <div className="time-title">
                        <h3>Total Time</h3>
                        <p>{recipe.cookTime + recipe.prepTime} mins</p>
                    </div>
                </div>
                <div className="time-div">
                    <span className="material-symbols-outlined">restaurant</span>
                    <div className="time-title">
                        <h3>Servings</h3>
                        <p>{recipe.servings}</p>
                    </div>
                </div>
            </div>
            <div className="ingredients-instruction-div">
                <div className="ingredients-div">
                    <h3>Ingredients</h3>
                    <ul>
                        {recipe.ingredients.map((ingredient, index) => (
                            <li key={index}>{ingredient}</li>
                        ))}
                    </ul>
                </div>
                <div className="instructions-div">
                    <h3>Instructions</h3>
                    <ol>
                        {recipe.instructions.map((instruction, index) => (
                            <li key={index}>{instruction}</li>
                        ))}
                    </ol>
                </div>
            </div>
        </div>
    );
}

export default Recipe_Detail;
