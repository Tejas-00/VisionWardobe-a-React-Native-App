import { View, Text, StyleSheet, Image } from 'react-native';
import React from 'react';

const App = () => {
  return (
    <View style={styles.container}>
      {/* header */}
      <View style = {styles.header}>
        <Image
          source = {{uri: 'https://cdn-icons-png.flaticon.com/512/507/507257.png'}}
          style = {styles.headerBackImage}
        />
        <Text style={styles.headerText}>Enter Your Details</Text>
      </View>

      {/* Centered Text */}
      <Text style={styles.text}>tejas hello</Text>
    </View>
  );
};

export default App;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    padding: 20, // Adds spacing from edges
  },
  header: {
    display: 'flex',
    flexDirection: 'row',
    marginTop: 70,
  },
  headerBackImage: {
    width: 25,
  },
  headerText: {
    color: 'black',
    fontSize: 20,
    textAlign: 'center',
    width: '100%',
    marginLeft: -23,
  },
  text: {
    color: 'black',
    fontSize: 20,
    textAlign: 'center',
    width: '100%',
    marginTop: '80%', // Moves text to the center
  },
});
