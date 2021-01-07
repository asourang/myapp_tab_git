import React from "react";
import { View , Text, StyleSheet, Button } from "react-native";

function HomeScreen({ navigation }) {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Button
        onPress={() => navigation.navigate('Login')}
        title="Welcome!"
      />
    </View>
  );
}
export default HomeScreen;

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