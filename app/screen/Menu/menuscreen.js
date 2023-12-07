import React from 'react';

import { SafeAreaView,Text,View,ImageBackground,Image,ScrollView} from 'react-native';
import { Card, TextInput,Button,Title,Paragraph} from 'react-native-paper';
import { Menustyle } from './menu.style';


export const Menuscreen = ({navigation, route }) => {
  
    return(
<SafeAreaView style={Menustyle.content}>
    <View>
   
   <ScrollView>
    <Card style={Menustyle.card1}>
    <Card.Cover style={Menustyle.cardcover} resizeMode={`cover`} source={require('./asset/Fitnessbuddy.png')}/>
    <Card.Content>
      <Title>Food Recipe</Title>
      <Paragraph>Free healthy food recipe for Your fitness journey!</Paragraph>
    </Card.Content>
    <Card.Actions>
      <Button onPress={() => navigation.navigate('Recipescreen')}>Go</Button>
    </Card.Actions>
    
     </Card>
    <Card style={Menustyle.card1}>
    <Card.Cover style={Menustyle.cardcover} resizeMode={`cover`} source={require('./asset/COVER3.png')}/>
    <Card.Content>
      <Title>Pose Detection</Title>
      <Paragraph>Pose Detection for different exercises</Paragraph>
    </Card.Content>
    <Card.Actions>
    <Button onPress={() => navigation.navigate('Information')}>Go</Button>
    </Card.Actions>
    </Card>


    <Card style={Menustyle.card2}>
    <Card.Cover style={Menustyle.cardcover} resizeMode={`cover`} source={require('./asset/COVER2.png')}/>
    <Card.Content>
      <Title>Workout Guide</Title>
      <Paragraph>Workout guides for all</Paragraph>
    </Card.Content>
    <Card.Actions>
    <Button onPress={() => navigation.navigate('Exercisescreen')}>Go</Button>
    </Card.Actions>
    </Card>
    
    </ScrollView> 
    </View> 

</SafeAreaView>

    
   
    );
 };
