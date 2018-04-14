import React, { Component } from 'react';
import { StyleSheet, Text, View, Image  } from 'react-native';
import { DrawerNavigator } from 'react-navigation';
import styles from './Styles.js';

import Home from './src/home/Home.js';
import Search from './src/search/Search.js';

const AppNav = new DrawerNavigator({
  home : { screen : Home },
  search : { screen : Search }
}, 
{
  drawerPosition : 'top',
  drawerBackgroundColor : 'rgba(0, 0, 0, 0.7)',
  contentOptions : {
    activeTintColor : '#ec4531',
    inactiveTintColor : '#ffffff',
    itemsContainerStyle : {
      paddingTop : 70
    }
  }
});

export default class App extends Component {
  constructor(props){
    super(props);
  }

  render() {
    return (
       <AppNav />
    );
  }
}
