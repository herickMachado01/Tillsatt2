import 'react-native-get-random-values';
import 'react-native-gesture-handler';
import React from 'react';
import { StyleSheet } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import bemvindo from "./Entrada/Bemvindo";
import login from "./Entrada/Login";
import cadastrar from "./Entrada/Cadastrar";
import recuperarSenha from "./Entrada/RecuperacaoSenha";
import navegacao from "./Navegacoes/Barranavegacao";
import alterarSenha from './Subperfil/AlterarSenha';
import alterarInformacoes from './Subperfil/AlterarInformacoes'; // Importar a nova tela

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="BemVindo">
        <Stack.Screen
          name="BemVindo"
          component={bemvindo}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="Login"
          component={login}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="Cadastre-se"
          component={cadastrar}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="RecuperarSenha"
          component={recuperarSenha}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="Navegacao"
          component={navegacao}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="AlterarSenha"
          component={alterarSenha}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="AlterarInformacoes"
          component={alterarInformacoes} 
          options={{ headerShown: true }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
});
