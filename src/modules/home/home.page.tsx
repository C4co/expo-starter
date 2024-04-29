import { StatusBar } from 'expo-status-bar'
import { View, Text } from 'react-native'
import type { NativeStackScreenProps } from '@react-navigation/native-stack'
import { Button, Input, Gap } from '@components'
import { useGetTodos } from '@services'
import { PageLayout } from '@layouts'
import { Feather } from '@expo/vector-icons'

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
      <View className="min-h-screen p-3 bg-white">
        <Button
          onPress={() => {
            navigation.navigate('settings')
          }}
        >
          Settings
        </Button>

        <Gap height={10} />

        <Input
          label="Search"
          placeholder="Search"
          leftIcon={<Feather name="search" size={20} color="#000" />}
        />
        <Gap height={10} />
        <Input
          label="Search"
          placeholder="Search"
          errorMessage="Please enter a valid email."
        />
      </View>
    </PageLayout>
  )
}
