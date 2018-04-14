import React, { Component } from 'react';
import { 
  Text, 
  View, 
  Button, 
  TouchableOpacity, 
  Image
} from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import styles from '../../Styles.js';
import Header from '../Header.js';

class Home extends Component{
  static navigationOptions =  {
    drawerLabel: 'Home',
    drawerIcon: ({ tintColor, focused }) => (
      <Ionicons
        name={focused ? 'ios-home' : 'ios-home-outline'}
        size={20}
        style={{ color: tintColor }}
      />
    )
  };

  constructor(props){
    super(props);
  }

  _onPressButton(){
    this.props.navigation.navigate('search');
  }

  render(){
    return (
      <View className="home" style={styles.home}>
        <Header navigation={this.props.navigation}/>
        <Text>Home</Text>
        <Button onPress={ () => this._onPressButton() } title="click me"/>

        <TouchableOpacity onPress={ () => this._onPressButton() }>
          <Image source={require('./../img/react.png')} />
        </TouchableOpacity>
      </View>
    );
  }
}

export default Home;