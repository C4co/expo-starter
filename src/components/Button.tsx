import {
  Text,
  TouchableOpacity,
  TouchableOpacityProps,
  StyleSheet,
} from 'react-native'

interface ButtonProps extends TouchableOpacityProps {
  children: string
}

const style = StyleSheet.create({
  button: {
    paddingHorizontal: 25,
    paddingVertical: 12,
    width: '100%',
    backgroundColor: 'black',
    borderRadius: 100,
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },

  label: {
    color: 'white',
    fontSize: 18,
  },
})

export function Button({ children, ...props }: ButtonProps) {
  return (
    <TouchableOpacity activeOpacity={0.7} style={style.button} {...props}>
      <Text style={style.label}>{children}</Text>
    </TouchableOpacity>
  )
}
