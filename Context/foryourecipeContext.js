// SuggestionContext.js
import React, { createContext, useContext, useEffect, useState } from "react";
import { RecipeInformationProvider } from "./recipeinformationcontext";
import { ProfileProvider } from "./profileinfocontext";
// SuggestionContext.js
const SuggestionContext = createContext();

const SuggestionProvider = ({ children }) => {
  // const [suggestedRecipes, setSuggestedRecipes] = useState([]);
  // const [profile] = useContext(ProfileProvider);
  // const [recipeInformation] = useContext(RecipeInformationProvider);

  // useEffect(() => {
  //   // Ensure that recipeInformation is available before attempting to filter
  //   if (recipeInformation) {
  //     // Logic to filter and set suggested recipes based on profile and recipe information
  //     const goal = profile.goal;

  //     // Filter recipes based on user's goal
  //     const filteredRecipes = recipeInformation.filter((recipe) => {
  //       // Add your logic here based on the user's goal and recipe information
  //       const calories = parseFloat(recipe.nutrition.calories);

  //       switch (goal) {
  //         case "lose weight":
  //           return calories <= 150; // Example: Recipes with calories below 150 for weight loss
  //         case "gain weight":
  //           return calories >= 250; // Example: Recipes with calories above 250 for weight gain
  //         case "maintain weight":
  //           return calories >= 150 && calories <= 250; // Example: Recipes within 150-250 calories for maintenance
  //         default:
  //           return true; // If the goal is not recognized, include all recipes
  //       }
  //     });

  //     setSuggestedRecipes(filteredRecipes);
  //   }
  // }, [profile, recipeInformation]);

  // return (
  //   <SuggestionContext.Provider value={suggestedRecipes}>
  //     {children}
  //   </SuggestionContext.Provider>
  // );
};

export { SuggestionContext, SuggestionProvider };
