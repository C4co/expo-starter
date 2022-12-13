import { StatusBar } from 'expo-status-bar'
import { View, Text } from 'react-native'
import { styles } from '@styles'
import type { NativeStackScreenProps } from '@react-navigation/native-stack'
import { Button } from '@components'
import { useGetTodos } from '@repositories'

type Props = NativeStackScreenProps<any, 'home'>

export function HomeScreen({ navigation }: Props) {
  const { data, isError, isLoading } = useGetTodos()

  if (isLoading) {
    return (
      <View style={styles.centerContainer}>
        <Text> Loading... </Text>
      </View>
    )
  }

  if (isError) {
    return (
      <View style={styles.centerContainer}>
        <Text> Error </Text>
      </View>
    )
  }

  console.log(data![0].title)

  return (
    <View style={styles.centerContainer}>
      <Button
        onPress={() => {
          navigation.navigate('settings')
        }}
      >
        Settings
      </Button>

      <StatusBar style="auto" />
    </View>
  )
}
