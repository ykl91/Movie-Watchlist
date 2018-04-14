import React, { Component } from 'react';
import { Text, View, Button } from 'react-native';

class Header extends Component{
  constructor(props){
    super(props);
  }

  render(){
    return (
      <View className="header" style={styles.menu}>
        <Text style={styles.menuTitle}>MoviesWatchlist</Text>
        <Button title="menu" onPress={ () => this.props.navigation.navigate('DrawerToggle') } />
      </View>
    );
  }
}

const styles = {
  menu : {
    display : 'flex',
    flexDirection: 'row',
    alignItems : 'center',
    paddingTop : 32,
    paddingLeft : 16,
    paddingRight : 16,
    paddingBottom : 16,
    backgroundColor : '#0a0a0a',
    borderBottomWidth : 1,
    borderBottomColor : '#202020',
    borderStyle : 'solid',
    justifyContent: 'space-between'
  },
  menuTitle : {
    color : '#fff'
  }
};

export default Header;