import { View, StyleSheet } from 'react-native'

const style = StyleSheet.create({
  pageLayout: {
    padding: 10,
  },
})

type PageLayoutProps = {
  children: React.ReactNode
}

export function PageLayout({ children }: PageLayoutProps) {
  return <View style={style.pageLayout}>{children}</View>
}
