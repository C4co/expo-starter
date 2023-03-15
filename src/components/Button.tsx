import {
  Text,
  TouchableOpacity,
  TouchableOpacityProps,
  View,
  ActivityIndicator,
} from 'react-native'

interface ButtonProps extends TouchableOpacityProps {
  children: string
  loading?: boolean
}

export function Button({ children, loading, ...props }: ButtonProps) {
  if (loading) {
    return (
      <View className="px-4 h-[45] bg-black rounded-full justify-center items-center w-full">
        <ActivityIndicator color="#FFF" />
      </View>
    )
  }

  return (
    <TouchableOpacity
      activeOpacity={0.7}
      className="px-4 h-[45] justify-center items-center bg-black rounded-full w-full"
      {...props}
    >
      <Text className="text-base text-white leading-none text-center">
        {children}
      </Text>
    </TouchableOpacity>
  )
}
