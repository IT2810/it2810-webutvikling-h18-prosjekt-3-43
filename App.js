import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Header from './src/components/Header'
import StatusBarBackground from './src/components/StatusBarBackground'

export default class App extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <StatusBarBackground style={{backgroundColor:'white'}}/>
        <Header />
        <Text>Open up App.js to start working on your app!</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
});
