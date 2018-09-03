// Import library to help create a component
import React from 'react';
import {Text, AppRegistry} from 'react-native';

// Create a component
const App = () =>(
        <Text>Random Text</Text>
);

// Render it to the device
AppRegistry.registerComponent('albums', () => App);