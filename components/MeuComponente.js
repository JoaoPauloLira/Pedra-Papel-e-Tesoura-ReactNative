'use strict'

import React, { Component } from 'react';
import { StyleSheet, Text, View } from 'react-native';

class MeuComponente extends Component{
  render(){
    return(
      <View>
        <Text>{this.props.teste}</Text>
      </View>
    )
  }
}

export default MeuComponente

/* 
APP

import React, { Component } from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';
import MeuComponente from './components/MeuComponente';

export default class App extends Component {
  constructor(props){
    super(props)
     this.state = { texto: 'Texto teste 2'}
  }
  
  alteraTexto = () =>{
    this.setState({ texto: 'Outro texto'})
  }

  render() {
    return (
      <View style={styles.container}>
        <MeuComponente teste={this.state.texto}></MeuComponente>
        <Button title='Click' onPress={this.alteraTexto}/> 
      </View>
    );
  }
}

 const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

*/