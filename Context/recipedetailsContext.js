import React, { createContext, useState, useEffect } from "react";
import axios from "axios";

//context
const RecipedetailsContext = createContext();

const RecipedetailsProvider = ({ children }) => {
  //state
  const [loading, setLoading] = useState(false);
  const [recipesdetails, setRecipesdetails] = useState([]);
  const [recipeinformation, setRecipeinformation] = useState([]);
  


  //get posts
  const getAllRecipedetails = async () => {
    setLoading(true);
    try {
      const { data } = await axios.get("https://serverrrr-3kbl.onrender.com/recipesinformation");
      setLoading(false);
      setRecipesdetails(data.recipes);
    } catch (error) {
      console.log(error);
      setLoading(false);
    }
  };
  

  // inintal  posts
  useEffect(() => {
    getAllRecipedetails();
  }, []);

  
  return (
    <RecipedetailsContext.Provider value={[recipesdetails, setRecipesdetails, getAllRecipedetails]}>
      {children}
    </RecipedetailsContext.Provider>
  );
};

export { RecipedetailsContext, RecipedetailsProvider };