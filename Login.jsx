import { useState } from "react";
import {
  SafeAreaView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";

const Login = () => {
  const [login, setLogin] = useState("");
  const [password, setPassword] = useState("");

  return (
    <SafeAreaView>
      <Text style={styles.welcome}>Seja bem vindo!</Text>
      <View style={styles.container}>
        <TextInput
          style={styles.input}
          onChangeText={setLogin}
          value={login}
          placeholder={"Usuário"}
        />
        <TextInput
          style={styles.input}
          onChangeText={setPassword}
          value={password}
          placeholder={"Senha"}
          secureTextEntry={true}
        />
        <TouchableOpacity
          style={styles.loginButton}
          disabled={!login || !password}
        >
          <Text style={{ textAlign: "center" }}>Login</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: "gray",
    padding: 24,
    borderRadius: 10,
    margin: 24,
  },
  welcome: {
    color: "black",
    fontWeight: "bold",
    marginTop: "50%",
    fontSize: 20,
    textAlign: "center",
  },
  input: {
    padding: 8,
    backgroundColor: "lightgray",
    borderRadius: 10,
    marginBottom: 24,
  },
  loginButton: {
    backgroundColor: "lightblue",
    padding: 8,
    borderRadius: 10,
    marginTop: "10%",
  },
});

export default Login;
