import React from 'react'
import {
  StyleSheet,
  Text,
  TouchableOpacity,
} from 'react-native'

import { normalize } from '../../utils/size'
import { colors } from '../../constants/colors'

interface Props {
  text: String,
  background: String,
  onPress: () => void
}

const Button = ({ text, onPress, background }: Props) => {
  return (
    <TouchableOpacity
      onPress={onPress}
    >
      <Text
        style={styles({ background }).button}
      >
        {text}
      </Text>
    </TouchableOpacity>
  )
}

const styles = ({ background }) => StyleSheet.create({
  button: {
    paddingHorizontal: normalize(30),
    paddingVertical: normalize(10),
    backgroundColor: background || colors.default.grey,
    color: '#fff',
    textAlign: 'center',
  }
})

export default Button
