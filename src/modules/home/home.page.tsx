import { StatusBar } from 'expo-status-bar'
import { View, Text } from 'react-native'
import type { NativeStackScreenProps } from '@react-navigation/native-stack'
import { Button, Gap } from '@components'
import { useGetTodos } from '@repositories'
import { PageLayout } from '@layouts'

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
    <PageLayout>
      <StatusBar style="auto" />
      <View className="min-h-screen p-3 justify-center items-center">
        <Button
          onPress={() => {
            navigation.navigate('settings')
          }}
        >
          Settings
        </Button>
        <Gap height={10} />
        <Button loading={true}> Loading... </Button>
      </View>
    </PageLayout>
  )
}
