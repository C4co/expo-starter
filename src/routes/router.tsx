import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { HomeScreen, SettingsScreen } from '@modules'

const Stack = createNativeStackNavigator()

const customHeader = {
  headerStyle: {
    backgroundColor: '#FFFFFF',
    shadowColor: 'transparent',
    headerShadowVisible: false,
  },
  headerTintColor: '#000000',
}

export function Router() {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ headerShadowVisible: false }}>
        <Stack.Screen
          name="home"
          options={{
            title: 'Expo starter',
            ...customHeader,
          }}
          component={HomeScreen}
        />

        <Stack.Screen
          options={{
            title: 'Settings',
            ...customHeader,
          }}
          name="settings"
          component={SettingsScreen}
        />
      </Stack.Navigator>
    </NavigationContainer>
  )
}
