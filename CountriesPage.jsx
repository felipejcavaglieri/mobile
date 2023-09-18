import axios from 'axios'
import { useEffect, useState } from 'react'
import {
  FlatList,
  Image,
  SafeAreaView,
  Text,
  TouchableOpacity,
  View,
} from 'react-native'

const CountriesPage = ({ navigation }) => {
  const [countriesInfo, setCountriesInfo] = useState([])

  useEffect(() => {
    const getCountriesInfo = async () => {
      try {
        const { data } = await axios.get(`https://restcountries.com/v3.1/all`)
        setCountriesInfo(data)
      } catch (error) {
        console.error(error)
      }
    }
    getCountriesInfo()
  }, [])

  return (
    <SafeAreaView>
      <Text
        style={{
          marginTop: '15%',
          textAlign: 'center',
          fontWeight: 'bold',
          fontSize: 20,
        }}
      >
        Selecione um país
      </Text>
      <FlatList
        keyExtractor={(item) => item.cca2}
        numColumns={3}
        style={{ marginTop: 20 }}
        data={countriesInfo}
        renderItem={({ item }) => {
          return (
            <View
              style={{
                alignItems: 'center',
                backgroundColor: 'lightgray',
                flexGrow: 1,
                margin: 4,
                padding: 20,
              }}
            >
              <TouchableOpacity
                onPress={() =>
                  navigation.navigate('Country', { countryName: item.name.common })
                }
              >
                <Image
                  style={{
                    width: 40,
                    height: 40,
                  }}
                  source={{ uri: `${item.flags.png}` }}
                />
              </TouchableOpacity>
            </View>
          )
        }}
      />
    </SafeAreaView>
  )
}

export default CountriesPage
