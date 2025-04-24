import React from 'react'
import Search from './Search';
import './App.css';
import Recipe_Card from './Recipe_Card';

function Home() {
  return (
    <>
        <div className='home'>
            <div className='home-top'>
                <h1>RecipeXY</h1>
                <p>Browse our collection of delicious recipes from around the world. Filter by cuisine, meal type, or search for your favorites.</p>
            </div>
            <Search />
            <Recipe_Card />
        </div>
    </>
  )
}

export default Home;