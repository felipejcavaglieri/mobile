import axios from 'axios'
import { useEffect, useState } from 'react'
import { FlatList, Image, SafeAreaView, Text} from 'react-native'

const CountriesPage = () => {
  const [countriesInfo, setCountriesInfo] = useState([])

  useEffect(() => {
    const getCountriesInfo = async () => {
      try {
        const { data } = await axios.get(`https://restcountries.com/v3.1/all`)
        setCountriesInfo(data)
        data.forEach((it) => console.log(it.flags.svg))
      } catch (error) {
        console.error(error)
      }
    }
    getCountriesInfo()
  }, [])

  return (
    <SafeAreaView styles={{ justifyContent: 'center' }}>
      <FlatList
        data={countriesInfo}
        renderItem={({ item }) => (
        //   <Image
        //     style={{ width: '10%', height: '5%' }}
        //     source={{ uri: `${item.flags.png}` }}
        //   />
        <Text>aaaaaaaa</Text>
        )}
      />
    </SafeAreaView>
  )
}

export default CountriesPage
