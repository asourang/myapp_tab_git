import React from "react";
import { View , Text, StyleSheet, Button } from "react-native";

const LandingScreen =  props => {
  console.log(props);
  
  return <View style={styles.container}>
      <Text>Hello! How are you doing today!</Text>
         
          </View>
};
export default LandingScreen;


const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignContent: 'center',
    alignItems: 'center',
    top: '40%'

  },
  text: {
    fontSize: 100,
    fontWeight: 'bold'
  }
});

