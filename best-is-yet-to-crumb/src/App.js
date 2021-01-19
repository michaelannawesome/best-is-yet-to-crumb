import React, { useState, useEffect } from "react";
import { Route } from "react-router-dom";
import "./App.css";
import Background from "./Images/final-img.jpg"
import SearchResults from "./Components/SearchResults";
import Header from "./Components/Header.jsx";
import SearchForm from "./Components/SearchForm.jsx";
import Footer from "./Components/Footer.jsx";




function App() {
  
  
  const [recipes, setRecipes] = useState([]);

  const [searchString, setSearchString] = useState('carrot');
  const url = `https://www.themealdb.com/api/json/v1/1/search.php?s=${searchString}`;
  // **Original code**
  useEffect(() => {
    getRecipe(searchString);
  }, []);
  // **************

  // useEffect (() => {
  //     fetch(url)
  //     .then(response => response.json())
  //     .then(jsonResponse => {

  //       setSearchString ({
  //         type:"Recipe_Found",
  //         payload: jsonResponse.Layout
  //       });
  //     });
  // },[]);

  async function getRecipe(searchString) {
    await fetch(url)
      .then((response) => response.json())
      .then((response) => {
        console.log(response);
        setRecipes(response.meals);
        setSearchString("");
      })
      .catch(console.error);
  }

  function handleChange(event) {
    setSearchString(event.target.value);
  }

  function handleSubmit(event) {
    event.preventDefault();
    console.log(searchString)
    getRecipe(searchString);
  }

  return (
    
    <div>
      <div className="header-container">
        <Header />
      </div>
      <div className="input-container">
      <div className="search">
        <SearchForm  handleChange={handleChange}
          handleSubmit={handleSubmit}
          searchString={searchString}/>
      </div>
      </div>
      <div className="results">
        <SearchResults
          meals={recipes}
        />
      </div>
      
      <div className="footer">
        <div>
        <Footer />
        </div>
      </div>
    </div>
  );
}

export default App;
