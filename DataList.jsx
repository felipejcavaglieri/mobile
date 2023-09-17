import axios from 'axios'
import { useEffect, useState } from 'react'
import {
  FlatList,
  SafeAreaView,
  StatusBar,
  StyleSheet,
  Text,
  View,
} from 'react-native'

const Item = ({ item }) => (
  <View style={styles.item}>
    <Text style={styles.itemTitle}>ID: {item.id}</Text>
    <Text style={styles.itemText}>Tipo: {item.type}</Text>
    <Text style={styles.itemText}>Fator RH: {item.rh_factor}</Text>
    <Text style={styles.itemText}>Grupo: {item.group}</Text>
  </View>
)

const DataList = () => {
  const [list, setList] = useState([])

  const getList = async () => {
    try {
      const { data } = await axios.get(
        'https://random-data-api.com/api/v2/blood_types?size=10',
      )
      setList(data)
    } catch (error) {
      console.error(error)
    }
  }

  useEffect(() => {
    getList()
  }, [])

  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.title}>Listagem de Tipos Sanguíneos</Text>
      {list && list.length ? (
        <FlatList data={list} renderItem={({ item }) => <Item item={item} />} />
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
  item: {
    backgroundColor: '#056279',
    marginVertical: 8,
    padding: 8
  },
  title: {
    fontSize: 32,
    fontWeight: 'bold',
    color: '#054179',
  },
  itemTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 8,
    color: 'white',
  },
  itemText: {
    color: 'white'
  }
})

export default DataList
