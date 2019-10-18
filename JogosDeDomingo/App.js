/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, { Fragment } from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar, TouchableHighlight,
} from 'react-native';

import {
  Header,
  LearnMoreLinks,
  Colors,
  DebugInstructions,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';
import topo from './topo'
const App = () => {
  return (

    <View>
      <topo/>

      <View>
        <TouchableHighlight>
          <Text>Cadastrar Jogador</Text>
        </TouchableHighlight>
        <TouchableHighlight>
          <Text>Iniciar Dia de Jogo</Text>
        </TouchableHighlight>
      </View>
    </View>

  );
};

const styles = StyleSheet.create({

});

export default App;
