import React, { Component } from 'react';
import { Text, View } from 'react-native';
import Topo from './components/Topo';
import Informacoes from './components/Informacoes';
import Botoes from './components/Botoes';

export default class App extends Component {
  constructor(props) {
    super(props)

    this.state = {
      escolhaUsuario: '',
      escolhaComputador: '',
      resultado: '',
      countUser: 0,
      countPc: 0
    }
  }

  setEscola = (escolha) => {
    let numAleatorio = Math.floor(Math.random() * 3)
    let escolhaPC = ['Pedra', 'Papel', 'Tesoura']

    let pc = escolhaPC[numAleatorio]
    let usuario = escolha
    let resultado = ''
    let placarUser = this.state.countUser
    let placarPc = this.state.countPc

    if (pc === 'Pedra' && usuario === 'Tesoura')
      resultado = 'Vitorioa do Computador'
    else if (usuario === 'Pedra' && pc === 'Tesoura')
      resultado = 'Vitorioa do Usuário'

    else if (pc === 'Papel' && usuario === 'Pedra')
      resultado = 'Vitorioa do Computador'
    else if (usuario === 'Papel' && pc === 'Pedra')
      resultado = 'Vitorioa do Usuário'

    else if (pc === 'Tesoura' && usuario === 'Papel')
      resultado = 'Vitorioa do Computador'
    else if (usuario === 'Tesoura' && pc === 'Papel')
      resultado = 'Vitorioa do Usuário'
    else
      resultado = 'Empate'

    if (resultado.includes('Computador'))
      placarPc++;
    else if (resultado.includes('Usuário'))
      placarUser++

    this.setState({
      escolhaUsuario: escolha,
      escolhaComputador: pc,
      resultado: resultado,
      countPc: placarPc,
      countUser: placarUser
    })
  }

  render() {
    return (
      <View>
        <Topo></Topo>
        <Botoes funcao={this.setEscola}></Botoes>
        <View>
          <Text></Text>
        </View>
        <Informacoes
          countUser={this.state.countUser}
          countPc={this.state.countPc}
          escolhaComputador={this.state.escolhaComputador}
          escolhaUsuario={this.state.escolhaUsuario}
          resultado={this.state.resultado}>
        </Informacoes>
        <View>
        </View>
      </View>
    );
  }
}
