import { View } from 'react-native'

type GapProps = {
  width?: number
  height?: number
}

export function Gap({ height = 0, width = 0 }: GapProps) {
  return <View style={{ width, height }} />
}
