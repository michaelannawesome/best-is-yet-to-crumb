import React from 'react';


function Chef(props) {
    const getRecipe = props.recipes.map(rec => {
        return (
            <div className="gallery">
               <p>{rec.strMeal}</p>
                
            </div>
        );
    })
    return (
        <div>
            {getRecipe}
        </div>
    )
}
    

export default Chef;
    