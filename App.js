/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
} from 'react-native';

import {
  Header,
  LearnMoreLinks,
  Colors,
  DebugInstructions,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';

const App: () => React$Node = () => {
  return (
  
    <ScrollView style={styles.container}>
      <View style={styles.postContainer}>
      <Text style={styles.postTitle}>Running React Native  222 </Text>
      <Text style={styles.postDescription }> Lorem Ipsum has been the industry's standard dummy text ever since the 1500s</Text>

      </View>

      <View style={styles.postContainer}>
      <Text style={styles.postTitle}>Running React Native </Text>
      <Text style={styles.postDescription }> Lorem Ipsum has been the industry's standard dummy text ever since the 1500s</Text>

      </View>

      <View style={styles.postContainer}>
      <Text style={styles.postTitle}>Running React Native </Text>
      <Text style={styles.postDescription }> Lorem Ipsum has been the industry's standard dummy text ever since the 1500s</Text>

      </View>

      <View style={styles.postContainer}>
      <Text style={styles.postTitle}>Running React Native </Text>
      <Text style={styles.postDescription }> Lorem Ipsum has been the industry's standard dummy text ever since the 1500s</Text>

      </View>

      <View style={styles.postContainer}>
      <Text style={styles.postTitle}>Running React Native </Text>
      <Text style={styles.postDescription }> Lorem Ipsum has been the industry's standard dummy text ever since the 1500s</Text>

      </View>
      
    </ScrollView>
 
  );
};

const styles = StyleSheet.create({
  container : {
    flex : 1, 
    backgroundColor : "#333"
  },
  postContainer : {
    marginHorizontal : 20, 
    marginVertical : 20, 
    margin : 20,
    marginTop: 30,
    padding : 20, 
    backgroundColor : "#FFF", 
    borderRadius : 3
  },
  postTitle : {
    fontSize : 18, 
    fontWeight : "bold", 
    marginBottom : 5
  },
  postDescription : { 
    color : "#666"
  },
  box : { 
    width: 60, 
    height : 60, 
    backgroundColor : "#F00"
  }
});

export default App;
