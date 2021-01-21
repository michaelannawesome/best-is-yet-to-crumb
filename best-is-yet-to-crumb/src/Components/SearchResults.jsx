import React from "react";

const SearchResults = (props) => {
  const main = props.meals.map((meal) => {
    return <div key={meal.id}>{meal.strMeal}</div>;
  });

  const instructions = props.meals.map((meal) => {
    return (
      <div key={meal.id}>
        <h3>{meal.strMeal}</h3>
        <p>{meal.strInstructions}</p>
      </div>
    );
  });

  return (
    <section className="container">
      <div className="card">
        {main}
        {instructions}
      </div>
    </section>
  );
};

export default SearchResults;
