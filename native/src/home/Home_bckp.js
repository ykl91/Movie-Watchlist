import React, { Component } from 'react';
import { Text, View, Button } from 'react-native';

class Home extends Component{
  static navigationOptions = {
    drawerLabel : 'Home',
    header : (
      <View>
        <Button title="menu" onPress={ () => this.props.navigation.navigate('DrawerToggle') } />
      </View>
    )
  };

  constructor(props){
    super(props);
  }

  render(){
    return (
      <View style={styles.container}>
        <Text>Home</Text>
      </View>
    );
  }
}

const styles = {
  container : {
    flex : 1,
    justifyContent : 'center',
    alignItems : 'center',
    backgroundColor : 'lightblue'
  }
};

export default Home;