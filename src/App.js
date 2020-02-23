import React, { useState, useRef, createContext } from 'react';
import { Toggle } from './Toggle';
import { Counter } from './Counter';
import { QueryForm } from './QueryForm';

export const UserContext = createContext()

const App = () => {

  const [dishes, setDishes] = useState([])
  const ref1 = useRef()

  const fetchDishes = async () => {
    const res = await fetch('https://my-json-server.typicode.com/leveluptuts/fakeapi/dishes')
    const dishes = await res.json()
    console.log('Fetching dishes...', dishes)
    setDishes(dishes)
}

  return (
    <UserContext.Provider value={{isUser: false}}>
      <div className="main-wrapper" ref={ref1}>
        <h1>Level Up Dishes</h1>
        <Toggle />
        <Counter />
        <QueryForm fetcher={fetchDishes}/>    

        {dishes.map(dish => (
          <article className="dish-card dish-card--withImage">
            <h3>{dish.name}</h3>
            <p>{dish.desc}</p>  
            <div className="ingredients">
              {dish.ingredients.map(ingredient => (
                <span>{ingredient}</span>
              ))}
            </div>
          </article>
        ))}
        
        </div>
    </UserContext.Provider>
  );
};

export default App;
