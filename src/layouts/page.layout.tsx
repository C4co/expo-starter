import { View } from 'react-native'

type PageLayoutProps = {
  children: React.ReactNode
}

export function PageLayout({ children }: PageLayoutProps) {
  return <View className="bg-white min-h-screen">{children}</View>
}
