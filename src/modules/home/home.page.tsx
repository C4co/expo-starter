import { StatusBar } from 'expo-status-bar'
import { View, Text } from 'react-native'
import type { NativeStackScreenProps } from '@react-navigation/native-stack'
import { Button, Gap, Input } from '@components'
import { useGetTodos } from '@services'
import { PageLayout } from '@layouts'
import { AntDesign, MaterialIcons } from '@expo/vector-icons'

type Props = NativeStackScreenProps<any, 'home'>

export function HomeScreen({ navigation }: Props) {
  const { data, isError, isLoading } = useGetTodos()

  if (isLoading) {
    return (
      <View>
        <Text> Loading... </Text>
      </View>
    )
  }

  if (isError) {
    return (
      <View>
        <Text> Error </Text>
      </View>
    )
  }

  return (
    <PageLayout className="bg-white">
      <StatusBar style="auto" />
      <View className="min-h-screen p-3">
        <Button
          onPress={() => {
            navigation.navigate('settings')
          }}
        >
          Settings
        </Button>
      </View>
    </PageLayout>
  )
}
