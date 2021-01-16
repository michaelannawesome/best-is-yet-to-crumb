import React from 'react';


const SearchResults = (props) => {
    console.log (props)
    const main = props.meals.map((meal) => {
      return (
        <div key={meal.id}>
          {meal.strMeal}
          </div>
      )
    })
      
    
    const instructions = props.meals.map((meal) => {
      return(
    <div key= {meal.id}>
      <h3>{meal.strMeal}</h3>
      <p>{meal.strInstructions}</p>
    </div>
      )
    })
    return (
        <div className= "results">
          {main}
          {instructions}
         
          


        </div>
      );
  }





//   const getRecipe = props.recipes.map(rec => {
//     return (
//         <div className="gallery">
//            <p>{rec.strMeal}</p>
            
//         </div>
//     );
// })
// return (
//     <div>
//         {getRecipe}
//     </div>
// )
// }







//First
// function Layout({ handleSubmit, handleChange, searchString }) {
//     return (
//         <div>
//             <h2>Layout</h2>
//             <form onSubmit= {handleSubmit} className="form-horizontal">
//             <input
//           onChange={handleChange}
//           value= {searchString}
//           type="text"
//           placeholder="Dish name or Ingredient"
//         />
//         <button type="submit">Cook!</button>
//             </form>
//         </div>
//     );
// }

export default SearchResults;