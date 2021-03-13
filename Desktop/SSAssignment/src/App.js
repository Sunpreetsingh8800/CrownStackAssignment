import React, {Component} from 'react';
import {RootStack} from './routes';
import {NavigationContainer} from '@react-navigation/native';
import 'react-native-gesture-handler';
import {LogBox, Text} from 'react-native';

LogBox.ignoreAllLogs(true);

class App extends Component {
  render() {
    return (
      <NavigationContainer>
        <RootStack />
      </NavigationContainer>
    );
  }
}

export default App;
