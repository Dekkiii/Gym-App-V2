import{ StyleSheet, Dimensions  } from "react-native";
const cardGap = 16;
const cardWidth = (Dimensions.get('window').width - cardGap * 3) / 2;
export const Homestyle = StyleSheet.create({
    content: {
      
      padding: 0,
        flex: 1,
        backgroundColor: "#354259",
      },
      
        top: {
          flex: .2,
          borderWidth: 10,
          borderColor: "#354259",
        },
        bottom: {
          flex: .8,
          
        },
      image: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        width: 300, height: 200
      },
    view: {
      flexDirection: 'column',
justifyContent: 'center',
alignItems: 'center',
height: '100%',
        width: "100%"
    },
    cardTitle: {
      textAlign: 'center',
        color: "rgb(101,37,131)"
    },
    titleText: {
      marginBottom:15,
      borderRadius: 0,
      backgroundColor: "#FF8D29",
      color: "#242F9B",
      textAlign: "center",
      padding:10,
      fontSize: 20,
    },
        Text: {
          marginTop: 16,
          paddingVertical: 8,
          borderWidth: 4,
          borderColor: "#20232a",
          borderRadius: 1,
          backgroundColor: "#ECE5C7",
          height: 70,
          textAlign: 'center',
            justifyContent: 'center',
            alignItems: 'center',
      },
      button:{
        
        justifyContent: 'center',
        alignItems: 'center',
        
        
        marginRight: 5,
        
      },
      card1:{
        margin:20,
        backgroundColor: "#FF8D29",
        width: 300
      },
      
      menucard1:{
        padding: 0,
        margin:20
      },
      menucard2:{
        padding: 0,
        margin:20,
        marginBottom:150
      },
    menucardButton: {
        margin: 1,
      
    },mencardcover:{
        
    },
      cardcover:{
        
      },
      card:{
     flexDirection:"row"
      },

      card2:{
       
        margin:10,
        backgroundColor: "#FF8D29",
      },
      Paragraph:{
        width: 500
      },

    cardButton: {
      position: 'absolute',
      bottom:0,
      left:0,
        
    },
    cardButton1: {
      
      margin: 1,
      backgroundColor: "#F6FBF4",
     
      bottom:0,
  },
  titleText: {
    marginBottom: 15,
    borderRadius: 0,
    backgroundColor: "#FF8D29",
    color: "#242F9B",
    textAlign: "center",
    padding: 10,
    fontSize: 20,
  },
  menuContainer: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  menucard: {
    backgroundColor: "#FF8D29",
    width: (Dimensions.get('window').width - cardGap * 3) / 2,
    height: 180,
    margin: cardGap / 2,
    borderRadius: 16,
    shadowOpacity: 0.2,
    justifyContent: 'center',
    alignItems: 'center',
  },
  menucardText: {
    color: 'white',
  },
    
})