import React, { useContext } from 'react';
import { SafeAreaView,Dimensions, ScrollView, View, Text, TouchableOpacity, FlatList } from 'react-native';
import { Card } from 'react-native-paper';
import { Homestyle } from './home.style';
import { AuthContext } from '../../../Context/authContext';

export const Homescreen = ({ navigation }) => {
  const [state] = useContext(AuthContext);

  // Define your menu items here
  const menuItems = [
    { imageSource: require('./asset/Allrecipe.png'), title: 'Dietary Food Recipes', screen: 'Recipescreen', description: 'Free Dietary Recipe for your fitness journey!' },
    { imageSource: require('./asset/SuggetedRecipe.png'), title: 'Suggested Dietary Foods For You', screen: 'FYRecipescreen', description: 'Suggested Dietary Recipe based on your goal!' },
    { imageSource: require('./asset/proj2.png'), title: 'Pose Detection', screen: 'Sensormenu', description: 'Pose Detection for different exercises!' },
    { imageSource: require('./asset/COVER2.png'), title: 'Workout Guide', screen: 'Exercisescreen', description: 'Workout guides for all!' },
  ];

  const renderItem = ({ item }) => (
    <TouchableOpacity
      style={Homestyle.menucard}
      onPress={() => navigation.navigate(item.screen)}
    >
      <Card style={Homestyle.card1}>
        <Card.Cover style={Homestyle.cardcover} resizeMode="cover" source={item.imageSource} />
        <Card.Content>
          <Text style={Homestyle.menucardText}>{item.title}</Text>
          <Text style={Homestyle.menucardDescription}>{item.description}</Text>
        </Card.Content>
      </Card>
    </TouchableOpacity>
  );

  return (
    <SafeAreaView style={Homestyle.content}>
      <Card style={Homestyle.card2}>
       <Card.Content>
       <Text style={Homestyle.titleText}>
       Welcome, {state.firstname}!
              </Text>
       </Card.Content>
       </Card>
      <FlatList
        data={menuItems}
        keyExtractor={(item) => item.screen}
        renderItem={renderItem}
        contentContainerStyle={Homestyle.menuContainer}
        numColumns={2}
      />
    </SafeAreaView>
  );
};
