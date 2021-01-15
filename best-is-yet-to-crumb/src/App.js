import React, { useState, useEffect } from "react";
import { Route } from "react-router-dom";
import "./App.css";
import Layout from "./Components/Layout";
import Header from "./Components/Header.jsx";
import Chef from "./Components/Chef.jsx";
import Footer from "./Components/Footer.jsx";

function App() {
  
  const [recipes, setRecipes] = useState([]);

  const [searchString, setSearchString] = useState("a");
  
  const url = `https://www.themealdb.com/api/json/v1/1/search.php?f=${searchString}`;

  

  useEffect(() => {
    getRecipe(searchString);
  }, []);

  function getRecipe(searchString) {
    fetch(url)
      .then((response) => response.json())
      .then((response) => {
        setRecipes(response.data);

        setSearchString("");
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

  return (
    <div className="App">
      <Header />
      <Layout
        handleChange={handleChange}
        handleSubmit={handleSubmit}
        searchString={searchString}
      />
      <Chef recipes={recipes} />
      <Footer />
    </div>
  );
}

export default App;
