'use strict'

import React, { Component } from 'react';
import { View, Image } from 'react-native';

class Topo extends Component{
  render(){
    return(
        <View style={styles.painelAcoes}>
            <Image source={require('../img/jokenpo.png')}/>
        </View>
    )
  }
}

const styles = {
  painelAcoes:{   
    alignItems: 'center',
    justifyContent: 'center',
    top: 20
  }
}

export default Topo