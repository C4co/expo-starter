import { TextInput, TextInputProps, View, Text } from 'react-native'

interface InputProps extends TextInputProps {
  label: string
  errorMessage?: string
  leftIcon?: React.ReactNode
  rightIcon?: React.ReactNode
}

export function Input({
  label,
  errorMessage,
  leftIcon,
  rightIcon,
  ...props
}: InputProps) {
  return (
    <View className="w-full">
      <Text className="text-[12px] mb-1">
        {label && <Text className="font-bold mb-1"> {label} </Text>}
        {errorMessage && (
          <Text className="text-red-600">— {errorMessage} </Text>
        )}
      </Text>

      <View className="flex-row justify-center items-center w-full rounded-md border border-neutral-400">
        {leftIcon && <View className="ml-[10px]">{leftIcon}</View>}
        <TextInput
          {...props}
          style={{ paddingLeft: 15 }}
          className={`py-[7px] text-[16px] flex-1 focus:border-blue-500`}
        />
        {rightIcon && <View className="mr-[10px]">{rightIcon}</View>}
      </View>
    </View>
  )
}
