/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 */
'use strict';

var React = require('react-native');
var {
  Image,
  MapView,
  AppRegistry,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} = React;

var regionText = {
  latitude: '0',
  longitude: '0',
  latitudeDelta: '0',
  longitudeDelta: '0',
};

type MapRegion = {
  latitude: number,
  longitude: number,
  latitudeDelta?: number,
  longitudeDelta?: number,
};

type MapRegionInputState = {
  region: MapRegion,
};

var MonstranceClock = React.createClass({
  render: function() {

  }
});

var styles = StyleSheet.create({

});

AppRegistry.registerComponent('MonstranceClock', () => MonstranceClock);
