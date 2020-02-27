import React from 'react';
import { StyleSheet, Text, View,Button } from 'react-native';

const Settings = ({navigation})=> {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>
        Settings Screen
      </Text>
      <Button
        title={"Go to home"}
        onPress={()=>navigation.navigate("Home")}
      />
    </View>
  );
}

export default Settings;

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