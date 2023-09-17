import { StyleSheet } from 'react-native'
import CountriesPage from './CountriesPage'

export default function App() {
  return <CountriesPage />
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
})
