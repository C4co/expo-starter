import { StatusBar } from 'expo-status-bar'
import { View, Text, Button } from 'react-native'
import { styles } from '@styles'
import type { NativeStackScreenProps } from '@react-navigation/native-stack'

type Props = NativeStackScreenProps<any, 'home'>

export function HomeScreen({ navigation }: Props) {
  return (
    <View style={styles.centerContainer}>
      <Text> Home screen </Text>

      <Button
        title="Go to settings page"
        onPress={() => {
          navigation.navigate('settings')
        }}
      />

      <StatusBar style="auto" />
    </View>
  )
}
