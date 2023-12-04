import { View, KeyboardAvoidingView, ScrollView, ViewProps } from 'react-native'

interface PageLayoutProps extends ViewProps {
  children: React.ReactNode
  scrolable?: boolean
}

export function PageLayout({ children, scrolable, ...props }: PageLayoutProps) {
  if (scrolable) {
    return (
      <KeyboardAvoidingView>
        <ScrollView>
          <View {...props}>{children}</View>
        </ScrollView>
      </KeyboardAvoidingView>
    )
  }

  return (
    <KeyboardAvoidingView>
      <View>{children}</View>
    </KeyboardAvoidingView>
  )
}
