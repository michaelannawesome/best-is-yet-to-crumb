import React, { useState, useEffect } from "react";
import { Route } from "react-router-dom";
import "./App.css";
import background from "./Images/Crumb2.jpg"
import SearchResults from "./Components/SearchResults";
import Header from "./Components/Header.jsx";
import SearchForm from "./Components/SearchForm.jsx";
import Footer from "./Components/Footer.jsx";




function App() {
  
  
  const [recipes, setRecipes] = useState([]);

  const [searchString, setSearchString] = useState('carrot');
  const url = `https://www.themealdb.com/api/json/v1/1/search.php?f=${searchString}`;
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
    
    <div className="main">
      <div style= {{ backgroundImage: `url(${background})`}}>
        
      </div>
      <div className="header">
        <Header />
      </div>
      <div className="search">
        <SearchForm  handleChange={handleChange}
          handleSubmit={handleSubmit}
          searchString={searchString}/>
      </div>
      <div className="results">
        <SearchResults
          meals={recipes}
        />
      </div>
     
      <div className="footer">
        <Footer />
      </div>
    </div>
  );
}

export default App;
