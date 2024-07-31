

import React, { useState } from 'react';
import { View, Text, SafeAreaView, TextInput, TouchableOpacity, Image, Pressable, StyleSheet } from 'react-native';
import COLORS from '../constantes/Color';
import { Ionicons } from "@expo/vector-icons";
import Button from '../components/Button';
import Parse from '../Configuracoes/ParseConfig'; // Import Parse configuration

const Login = ({ navigation }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isPasswordShown, setIsPasswordShown] = useState(false);
  const [error, setError] = useState('');

  const handleLogin = async () => {
    try {
      await Parse.User.logIn(email, password);
      navigation.navigate('Navegacao');
    } catch (error) {
      setError('Email ou senha incorretos.'); // Set error message based on the caught error
      console.error('Erro ao fazer login:', error.message);
    }
  };

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: COLORS.white }}>
      <View style={styles.container}>
        <View style={{ marginVertical: 22 }}>
          <Text style={styles.headerText}>Bem vindo Novamente!</Text>
          <Text style={styles.subHeaderText}>Olá de novo, sentimos falta de você!</Text>
        </View>

        <View style={styles.inputContainer}>
          <Text style={styles.labelText}>Endereço de Email</Text>
          <View style={styles.inputWrapper}>
            <TextInput
              placeholder='Coloque seu endereço de E-mail'
              placeholderTextColor={COLORS.black}
              keyboardType='email-address'
              style={{ width: "100%" }}
              value={email}
              onChangeText={setEmail}
            />
          </View>
        </View>

        <View style={styles.inputContainer}>
          <Text style={styles.labelText}>Senha</Text>
          <View style={styles.inputWrapper}>
            <TextInput
              placeholder='Coloque sua senha'
              placeholderTextColor={COLORS.black}
              secureTextEntry={!isPasswordShown}
              style={{ width: "100%" }}
              value={password}
              onChangeText={setPassword}
            />
            <TouchableOpacity
              onPress={() => setIsPasswordShown(!isPasswordShown)}
              style={styles.eyeIcon}
            >
              {isPasswordShown ? (
                <Ionicons name='eye-off' size={24} color={COLORS.black} />
              ) : (
                <Ionicons name='eye' size={24} color={COLORS.black} />
              )}
            </TouchableOpacity>
          </View>
        </View>

        {error ? (
          <Text style={styles.errorText}>{error}</Text>
        ) : null}

        <Pressable
          onPress={() => navigation.navigate("RecuperarSenha")}
          style={{ marginBottom: 20 }}
        >
          <Text style={styles.forgotPasswordText}>Esqueceu a Senha?</Text>
        </Pressable>

        <Button
          title="Login"
          filled
          style={styles.loginButton}
          textStyle={{ color: COLORS.primary }}
          onPress={handleLogin}
        />

        <View style={styles.separatorContainer}>
          <View style={styles.separator} />
          <Text style={styles.separatorText}>Ou logar com</Text>
          <View style={styles.separator} />
        </View>

        <View style={styles.socialLoginContainer}>
          <TouchableOpacity
            onPress={() => console.log("Pressed")}
            style={styles.socialButton}
          >
            <Image
              source={require("../assets/google.png")}
              style={styles.socialIcon}
              resizeMode='contain'
            />
            <Text>Google</Text>
          </TouchableOpacity>

          <TouchableOpacity
            onPress={() => console.log("Pressed")}
            style={styles.socialButton}
          >
            <Image
              source={require("../assets/github.png")}
              style={styles.socialIcon}
              resizeMode='contain'
            />
            <Text>GitHub</Text>
          </TouchableOpacity>
        </View>

        <View style={styles.signupContainer}>
          <Text style={{ fontSize: 16, color: COLORS.black }}>Não tem uma conta?</Text>
          <Pressable
            onPress={() => navigation.navigate("Cadastre-se")}
          >
            <Text style={styles.signupText}>Inscreva-se</Text>
          </Pressable>
        </View>
      </View>
    </SafeAreaView>
  );
}

export default Login;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginHorizontal: 22,
    justifyContent: 'center',
  },
  headerText: {
    fontSize: 22,
    fontWeight: 'bold',
    marginVertical: 12,
    color: COLORS.black,
    textAlign: 'center',
  },
  subHeaderText: {
    fontSize: 16,
    color: COLORS.black,
    textAlign: 'center',
  },
  inputContainer: {
    marginBottom: 12,
  },
  labelText: {
    fontSize: 16,
    fontWeight: '400',
    marginVertical: 8,
  },
  inputWrapper: {
    width: "100%",
    height: 48,
    borderColor: COLORS.black,
    borderWidth: 1,
    borderRadius: 8,
    alignItems: "center",
    justifyContent: "center",
    paddingLeft: 22,
    position: 'relative',
  },
  eyeIcon: {
    position: "absolute",
    right: 12,
  },
  forgotPasswordText: {
    fontSize: 16,
    color: COLORS.primary,
    fontWeight: "bold",
  },
  loginButton: {
    marginTop: 18,
    marginBottom: 4,
    backgroundColor: 'transparent',
    borderColor: COLORS.primary,
  },
  separatorContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginTop: 40,
  },
  separator: {
    flex: 1,
    height: 1,
    backgroundColor: COLORS.grey,
    marginHorizontal: 10,
  },
  separatorText: {
    fontSize: 14,
  },
  socialLoginContainer: {
    flexDirection: "row",
    justifyContent: "center",
    marginTop: 20,
  },
  socialButton: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    flexDirection: "row",
    height: 52,
    borderWidth: 1,
    borderColor: COLORS.grey,
    marginHorizontal: 4,
    borderRadius: 10,
  },
  socialIcon: {
    height: 36,
    width: 36,
    marginRight: 8,
  },
  signupContainer: {
    flexDirection: "row",
    justifyContent: "center",
    marginVertical: 22,
  },
  signupText: {
    fontSize: 16,
    color: COLORS.primary,
    fontWeight: "bold",
    marginLeft: 6,
  },
  errorText: {
    fontSize: 14,
    color: 'red',
    textAlign: 'center',
    marginTop: 10,
  },
});


