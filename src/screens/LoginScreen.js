import React from "react";
import { View , Text,TextInput, StyleSheet, Button } from "react-native";

const LoginScreen =  props => {
  console.log(props);
  
  return <View style={styles.container}>
    <Text>Username</Text>
      <TextInput 
      style={{ height: 40, width:200, borderColor: 'gray', borderWidth: 1 }}
    />
    <Text>Password</Text>
      <TextInput
      style={{ height: 40, width:200, borderColor: 'gray', borderWidth: 1 }}
      
    />

      <Button 
          title   = "Login"
          onPress = {()=> props.navigation.navigate("Landing")}
          />
         
          </View>
};
export default LoginScreen;


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