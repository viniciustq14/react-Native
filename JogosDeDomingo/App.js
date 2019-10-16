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

const App = () => {
  return (

    <View>

      <View>
        <Text>
          Pelada de Domingo
        </Text>
      </View>
      <View>
        <TouchableHighlight>
          <Text>
            Lista de Jogadores
          </Text>
        </TouchableHighlight>
        <TouchableHighlight>
          <Text>Lista de Jogos</Text>
        </TouchableHighlight>
      </View>
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
