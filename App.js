import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import CountriesPage from './CountriesPage'
import CountryDetails from './CountryDetails'
import Login from './Login'
import MoreDetails from './MoreDetails'

const Stack = createNativeStackNavigator()

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name='Login' component={Login} />
        <Stack.Screen name='Home' component={CountriesPage} />
        <Stack.Screen name='Country' component={CountryDetails} />
        <Stack.Screen name='MoreDetails' component={MoreDetails} />
      </Stack.Navigator>
    </NavigationContainer>
  )
}
