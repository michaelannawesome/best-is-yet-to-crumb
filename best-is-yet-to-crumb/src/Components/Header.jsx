import React from 'react';
import Crumb1 from '../Images/Crumb1.jpeg'

const DEFAULT_PLACEHOLDER_IMAGE = {Crumb1}
function Header(props) {
    const image = props.strMealThumb === null ? DEFAULT_PLACEHOLDER_IMAGE : props.strMealThumb
    return (
        <div className="header">
           <h1>THE BEST IS YET TO CRUMB</h1>
           <div>
               <img width="200"
               alt={`${props.strMeal}`}
               src={image}/>
               </div> 
        </div>
    );
}

export default Header;