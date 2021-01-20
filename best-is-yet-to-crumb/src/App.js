import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "./App.css";
// import Background from "./Images/final-img.jpg"
import SearchResults from "./Components/SearchResults";
import Header from "./Components/Header.jsx";
import Nav from "./Components/Nav.jsx";
import SearchForm from "./Components/SearchForm.jsx";
import Footer from "./Components/Footer.jsx";
import Home from "./Components/Home.jsx";
import Ingredients from "./Components/Ingredients.jsx";
import Supplies from "./Components/Supplies.jsx";




function App() {
  
  
  const [recipes, setRecipes] = useState([]);

  const [searchString, setSearchString] = useState('carrot');
  
  const SearchUrl = `https://www.themealdb.com/api/json/v1/1/search.php?s=${searchString}`;
  const randomUrl=`https://www.themealdb.com/api/json/v1/1/random.php`;
  // **Original code**
  useEffect(() => {
    getRecipe(searchString);
  }, []);
  

  async function getRecipe(searchString) {
    await fetch(SearchUrl)
      .then((response) => response.json())
      .then((response) => {
        console.log(response);
        setRecipes(response.meals);
        setSearchString("");
      })
      .catch(console.error);
  }

async function getRandom() {
    await fetch(randomUrl)
      .then((response) => response.json())
      .then((response) => {
        
        setRecipes(response.meals);
       
      })
      .catch(console.error);
  }

  function handleChange(event) {
    setSearchString(event.target.value);
  }

  function handleSubmit(event) {
    event.preventDefault();
    
    getRecipe(searchString);
  
  }

  function handleRandom (event) {
    event.preventDefault();
    getRandom();
  
  }

  return (
    <Router>
    <div>
      <div className="header-container">
        <Header />
      </div>
      <div>
        <Nav/>
      </div>
      <div>
      <Route exact path="/" component={Home} />
      <Route exact path="/ingredients" component={Ingredients} />
      <Route exact path="/supplies" component={Supplies} />
      </div>
      
      <div className="input-container">
      <div className="search">
       <SearchForm 
          handleChange={handleChange}
          handleSubmit={handleSubmit}
          searchString={searchString}
          handleRandom={handleRandom}
           />
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
    </Router>
  );
}

export default App;
