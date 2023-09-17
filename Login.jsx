import { useState } from 'react'
import {
  SafeAreaView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
} from 'react-native'

const Login = () => {
  const [login, setLogin] = useState('')
  const [password, setPassword] = useState('')

  return (
    <SafeAreaView style={styles.container}>
      <TextInput
        onChangeText={setLogin}
        value={login}
        placeholder={'Usuário'}
      />
      <TextInput
        onChangeText={setPassword}
        value={password}
        placeholder={'Senha'}
        secureTextEntry={true}
      />
      <TouchableOpacity disabled={!login || !password}>
        <Text>Login</Text>
      </TouchableOpacity>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
})

export default Login
