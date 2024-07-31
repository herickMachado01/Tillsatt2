import React, { useEffect, useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Alert } from 'react-native';
import Parse from '../Configuracoes/ParseConfig';
import COLORS from '../constantes/Color';

export default function Perfil({ navigation }) {
  const [userData, setUserData] = useState({
    name: '',
    cpf: '',
    email: '',
    phone: '',
  });

  useEffect(() => {
    const fetchUserData = async () => {
      const currentUser = Parse.User.current();
      if (currentUser) {
        const name = currentUser.get('name');
        const cpf = currentUser.get('cpf');
        const email = currentUser.get('email');
        const phone = currentUser.get('phone');
        setUserData({ name, cpf, email, phone });
      }
    };
    fetchUserData();
  }, []);

  const handleLogout = async () => {
    try {
      await Parse.User.logOut();
      navigation.navigate('Login');
    } catch (error) {
      console.error('Erro ao deslogar:', error);
    }
  };

  const handleDeleteAccount = () => {
    Alert.alert(
      'Confirmação',
      'Tem certeza de que deseja excluir sua conta? Esta ação não pode ser desfeita.',
      [
        {
          text: 'Cancelar',
          style: 'cancel',
        },
        {
          text: 'Excluir',
          onPress: async () => {
            try {
              const currentUser = Parse.User.current();
              if (currentUser) {
                await currentUser.destroy();
                navigation.navigate('Login');
              }
            } catch (error) {
              console.error('Erro ao excluir conta:', error);
            }
          },
        },
      ]
    );
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Perfil</Text>
      <View style={styles.infoContainer}>
        <Text style={styles.label}>Nome:</Text>
        <Text style={styles.info}>{userData.name}</Text>
      </View>
      <View style={styles.infoContainer}>
        <Text style={styles.label}>CPF:</Text>
        <Text style={styles.info}>{userData.cpf}</Text>
      </View>
      <View style={styles.infoContainer}>
        <Text style={styles.label}>Email:</Text>
        <Text style={styles.info}>{userData.email}</Text>
      </View>
      <View style={styles.infoContainer}>
        <Text style={styles.label}>Telefone:</Text>
        <Text style={styles.info}>{userData.phone}</Text>
      </View>
      <TouchableOpacity onPress={() => navigation.navigate('AlterarInformacoes')}>
        <Text style={styles.link}>Alterar Informações</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => navigation.navigate('AlterarSenha')}>
        <Text style={styles.link}>Alterar Senha</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={handleLogout}>
        <Text style={styles.button}>Deslogar</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={handleDeleteAccount}>
        <Text style={styles.button}>Excluir Conta</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: COLORS.white,
  },
  title: {
    fontSize: 22,
    fontWeight: 'bold',
    marginBottom: 20,
    color: COLORS.black,
  },
  infoContainer: {
    marginBottom: 15,
  },
  label: {
    fontSize: 16,
    fontWeight: 'bold',
    color: COLORS.black,
  },
  info: {
    fontSize: 16,
    color: COLORS.black,
  },
  link: {
    fontSize: 16,
    color: COLORS.primary,
    fontWeight: 'bold',
    marginTop: 20,
  },
  button: {
    fontSize: 16,
    color: COLORS.red,
    fontWeight: 'bold',
    marginTop: 20,
  },
});
