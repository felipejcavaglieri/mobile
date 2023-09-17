import axios from 'axios'
import { useEffect } from 'react'
import { SafeAreaView } from 'react-native'

const countryInfoDetails = ({ country }) => {
  const [countryInfo, setCountryInfo] = useState(second)

  useEffect(() => {
    const getCountry = async () => {
      try {
        const { data } = await axios.get(
          `https://restcountries.com/v3.1/name/${country}`,
        )
        setCountryInfo(data)
      } catch (error) {
        console.error(error)
      }
    }
    getCountry()
  }, [])

  return (
    <SafeAreaView>
      {countryInfo && countryInfo.name ? (
        <View
          style={{
            backgroundColor: 'gray',
            marginTop: 32,
            marginHorizontal: 16,
            padding: 8,
          }}
        >
          <View style={styles.item}>
            <Text style={styles.formItemTitle}>Nome oficial: </Text>
            <Text>{countryInfo.name.official}</Text>
          </View>
          <View style={styles.item}>
            <Text style={styles.formItemTitle}>Região: </Text>
            <Text>{countryInfo.region}</Text>
          </View>
          <View style={styles.item}>
            <Text style={styles.formItemTitle}>Subregião: </Text>
            <Text>{countryInfo.subregion}</Text>
          </View>
          <View style={styles.item}>
            <Text style={styles.formItemTitle}>Area: </Text>
            <Text>{countryInfo.area}</Text>
          </View>
          <View style={styles.item}>
            <Text style={styles.formItemTitle}>População: </Text>
            <Text>{countryInfo.population}</Text>
          </View>
          <View style={styles.item}>
            <Text style={styles.formItemTitle}>Capital: </Text>
            <Text>{countryInfo.capital}</Text>
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

export default countryInfoDetails
