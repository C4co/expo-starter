import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { HomeScreen, SettingsScreen } from '@modules'

const Stack = createNativeStackNavigator()

export function Router() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="home"
          options={{ title: 'Expo starter' }}
          component={HomeScreen}
        />
        <Stack.Screen
          options={{ title: 'Settings' }}
          name="settings"
          component={SettingsScreen}
        />
      </Stack.Navigator>
    </NavigationContainer>
  )
}
