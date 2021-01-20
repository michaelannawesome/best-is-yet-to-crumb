import React from 'react';
import Final from '../Images/final-img.jpg'

const DEFAULT_PLACEHOLDER_IMAGE = {Final}
function Header(props) {
    // const image = props.strMealThumb === null ? DEFAULT_PLACEHOLDER_IMAGE : props.strMealThumb
    return (
        <div >
           
           <h1>The Best is Yet to Crumb</h1>
          
           <div>
           {/* <img width= "200"
               alt= "chefs kiss"
               src={Final}/> */}

               {/* <img width="200"
               alt={`${props.strMeal}`}
               src={image}/> */}
               </div> 
        </div>
    );
}

export default Header;