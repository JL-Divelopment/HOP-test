import React from 'react';
import { StyleSheet, Text, View,Button } from 'react-native';

const Home = ({navigation})=> {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>
          Home Screen
      </Text>
      <Button
        title={"Go to settings"}
        onPress={()=>navigation.navigate("Settings")}
      />
    </View>
  );
}

export default Home;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    fontSize:17,
    fontWeight:'bold',
    marginVertical:15
  },
});