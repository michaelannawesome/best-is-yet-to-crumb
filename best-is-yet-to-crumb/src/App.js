import React, { useState, useEffect } from "react";
import { Route } from "react-router-dom";
import "./App.css";
import background from "./Images/Crumb2.jpg"
import Layout from "./Components/Layout";
import Header from "./Components/Header.jsx";
import Chef from "./Components/Chef.jsx";
import Footer from "./Components/Footer.jsx";

function App() {
  const [recipes, setRecipes] = useState([]);

  const [searchString, setSearchString] = useState("b");

  const url = `https://www.themealdb.com/api/json/v1/1/search.php?f=${searchString}`;

  useEffect(() => {
    getRecipe(searchString);
  }, []);

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
    getRecipe(searchString);
  }

  return (
    
    <div className="main">
      <div style= {{ backgroundImage: `url(${background})`}}>
        
      </div>
      <div className="header">
        <Header />
      </div>
      <div className="layout">
        <Layout
          handleChange={handleChange}
          handleSubmit={handleSubmit}
          searchString={searchString}
        />
      </div>
      <div className="chef">
        <Chef recipes={recipes} />
      </div>
      <div className="footer">
        <Footer />
      </div>
    </div>
  );
}

export default App;
