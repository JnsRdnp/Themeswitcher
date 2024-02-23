import { View, Text } from 'react-native'
import React from 'react'
// import { useTheme } from 'react-native-paper'
import ThemeSwitchButton from '../components/ThemeSwitchButton'
import Styles from '../Styles'
import {useTheme} from '../context/useTheme'


const Settings = () => {
    const {isDarkMode} = useTheme()

  return (
    <View style={[Styles.container, isDarkMode ? Styles.dark : Styles.light]}>
      <ThemeSwitchButton/>
    </View>
  )
}

export default Settings