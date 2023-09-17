import axios from 'axios'
import { useState } from 'react'
import {
  SafeAreaView,
  StatusBar,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native'

const FetchCountries = () => {
  const [searchCountry, setSearchCountry] = useState('')
  const [country, setCountry] = useState([])

  const getList = async () => {
    try {
      const { data } = await axios.get(
        `https://restcountries.com/v3.1/name/${searchCountry}`,
      )
      setCountry(data[0])
    } catch (error) {
      console.error(error)
    }
  }

  return (
    <SafeAreaView style={styles.container}>
      <TextInput
        style={styles.input}
        onChangeText={setSearchCountry}
        value={searchCountry}
      />
      <TouchableOpacity
        style={styles.button}
        disabled={!searchCountry}
        onPress={() => getList()}
      >
        <Text style={styles.buttonText}>BUSCAR PAÍS</Text>
      </TouchableOpacity>
      {country && country.name ? (
        <View
          style={{
            backgroundColor: 'gray',
            marginTop: 32,
            marginHorizontal: 16,
            padding: 8
          }}
        >
          <View style={styles.item}>
            <Text style={styles.formItemTitle}>Nome oficial: </Text>
            <Text>{country.name.official}</Text>
          </View>
          <View style={styles.item}>
            <Text style={styles.formItemTitle}>Região: </Text>
            <Text>{country.region}</Text>
          </View>
          <View style={styles.item}>
            <Text style={styles.formItemTitle}>Subregião: </Text>
            <Text>{country.subregion}</Text>
          </View>
          <View style={styles.item}>
            <Text style={styles.formItemTitle}>Area: </Text>
            <Text>{country.area}</Text>
          </View>
          <View style={styles.item}>
            <Text style={styles.formItemTitle}>População: </Text>
            <Text>{country.population}</Text>
          </View>
          <View style={styles.item}>
            <Text style={styles.formItemTitle}>Capital: </Text>
            <Text>{country.capital}</Text>
          </View>
        </View>
      ) : (
        <></>
      )}
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: StatusBar.currentHeight || 0,
    marginVertical: 8,
    marginHorizontal: 16,
  },
  input: {
    height: 40,
    margin: 12,
    borderWidth: 1,
    padding: 10,
  },
  button: {
    padding: 4,
    backgroundColor: 'cyan',
    alignItems: 'center',
    borderRadius: 4,
  },
  buttonText: {
    color: 'white',
    fontWeight: 'bold',
  },
  formItemTitle: {
    fontWeight: 'bold',
  },
  item: {
    marginBottom: 8,
  },
})

export default FetchCountries
