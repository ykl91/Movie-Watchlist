import React, { Component } from 'react';
import { Text, View } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

class Search extends Component{
  static navigationOptions =  {
    drawerLabel: 'Search',
    drawerIcon: ({ tintColor, focused }) => (
      <Ionicons
        name={focused ? 'md-search' : 'ios-search'}
        size={20}
        style={{ color: tintColor }}
      />
    )
  };

  constructor(props){
    super(props);
  }

  render(){
    return (
      <View className="Search">
        <Text>Search</Text>
      </View>
    );
  }
}

export default Search;