import { StatusBar } from 'expo-status-bar'
import { View, Text } from 'react-native'
import { styles } from '@styles'
import type { NativeStackScreenProps } from '@react-navigation/native-stack'
import { Button } from '@components'
import { useGetTodos } from '@repositories'
import { PageLayout } from '@layouts'

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
    <PageLayout>
      <StatusBar style="auto" />
      <Button
        onPress={() => {
          navigation.navigate('settings')
        }}
      >
        Settings
      </Button>

      <Text> Hello world this is an update </Text>
      <Text> This is a another update </Text>
    </PageLayout>
  )
}
