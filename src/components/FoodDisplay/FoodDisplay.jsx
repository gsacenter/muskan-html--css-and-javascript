
import React, { useContext } from 'react';
import './FoodDisplay.css';
import { StoreContext } from '../../context/Storecontext';
import Fooditem from '../../fooditem/fooditem';

const FoodDisplay = ({ category }) => {
    const { food_list } = useContext(StoreContext);

    const filteredList = category
        ? food_list.filter(item => item.category === category)
        : food_list;

    return (
        <div className="food-display" id="food-display">
            <h2>Top dishes near you</h2>
            <div className="food-display-list">
                {filteredList.map((item) => (
                    <Fooditem
                        key={item._id}
                        id={item._id}
                        name={item.name}
                        description={item.description}
                        price={item.price}
                        image={item.image}
                    />
                ))} 
            </div>
        </div>
    );
};

export default FoodDisplay;
