import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  Image,
  RefreshControl,
} from "react-native";
import React, { useContext, useState, useCallback, useEffect } from "react";
import { AuthContext } from "../../../Context/authContext";
import axios from "axios";
import { RecipeContext } from "../../../Context/recipeContext";
import RecipeCard from "../../Content/Recipecard";
import { Aboutstyle } from "./about.style";
import { Card, TextInput,Button,Title,Paragraph} from 'react-native-paper';
import { RecipeInformationContext } from '../../../Context/recipeinformationcontext';
import { RecipedetailsContext } from '../../../Context/recipedetailsContext';

export const FYRecipeSteps = ({navigation, route}) => {
  const [recipes] = useContext(RecipeContext);
  const [loading, setLoading]= useState(false);
  const { recipeId } = route.params;
  const [selectedrecipe, setSelectedRecipes] = useState([]);
  const [selectednutrition, setSelectedNutritions] = useState([]);
  const [recipenutrition] = useContext(RecipeInformationContext);
  const [recipeInformation] = useContext(RecipedetailsContext);
  const recipenutritioninfo = recipenutrition;
  const recipedetails = recipeInformation;
  const selectedRecipess = selectedrecipe.find((recipedetails) => recipedetails.id === recipeId);
  const recipenutritions = selectednutrition.find((recipenutritioninfo) => recipenutritioninfo.id === recipeId);
    //global state
    return (
        <View style={Aboutstyle.content}>
           <Card >
       <Card.Actions  style={Aboutstyle.card}>
       <Button onPress={() => navigation.navigate('RecipeDetails', { recipeId })}>Description</Button>
       <Button onPress={() => navigation.navigate('RecipeIngridients', { recipeId })}>Ingridients</Button>
       <Button onPress={() => navigation.navigate('RecipeSteps', { recipeId })}>Steps</Button>
       <Button onPress={() => navigation.navigate('RecipeNutrition', { recipeId })}>Nutrition</Button>
    </Card.Actions>
    </Card>
        <Recipestepscard recipeId = {recipeId} nutrition = {recipenutritions} recipeinformations = {selectedRecipess} />
        
      <View style={{ backgroundColor: "#ffffff" }}>
      </View>
    </View>
  );
     };