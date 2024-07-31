import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, TextInput, Button, Alert } from 'react-native';
import Parse from '../Configuracoes/ParseConfig';
import COLORS from '../constantes/Color';

export default function AlterarInformacoes({ navigation }) {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');

  useEffect(() => {
    const fetchUserData = async () => {
      const currentUser = Parse.User.current();
      if (currentUser) {
        setName(currentUser.get('name'));
        setEmail(currentUser.get('email'));
        setPhone(currentUser.get('phone'));
      }
    };
    fetchUserData();
  }, []);

  const handleSaveChanges = async () => {
    const currentUser = Parse.User.current();
    if (currentUser) {
      currentUser.set('name', name);
      currentUser.set('email', email);
      currentUser.set('phone', phone);
      try {
        await currentUser.save();
        Alert.alert('Sucesso', 'Informações atualizadas com sucesso!');
        navigation.goBack();
      } catch (error) {
        Alert.alert('Erro', 'Erro ao atualizar informações: ' + error.message);
      }
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Alterar Informações</Text>
      <View style={styles.inputContainer}>
        <Text style={styles.label}>Nome:</Text>
        <TextInput
          style={styles.input}
          value={name}
          onChangeText={setName}
        />
      </View>
      <View style={styles.inputContainer}>
        <Text style={styles.label}>Email:</Text>
        <TextInput
          style={styles.input}
          value={email}
          onChangeText={setEmail}
        />
      </View>
      <View style={styles.inputContainer}>
        <Text style={styles.label}>Telefone:</Text>
        <TextInput
          style={styles.input}
          value={phone}
          onChangeText={setPhone}
        />
      </View>
      <Button
        title="Salvar Alterações"
        onPress={handleSaveChanges}
        color={COLORS.primary}
      />
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
  inputContainer: {
    marginBottom: 15,
  },
  label: {
    fontSize: 16,
    fontWeight: 'bold',
    color: COLORS.black,
  },
  input: {
    fontSize: 16,
    borderBottomWidth: 1,
    borderBottomColor: COLORS.gray,
    padding: 5,
    marginTop: 5,
    color: COLORS.black,
  },
});
