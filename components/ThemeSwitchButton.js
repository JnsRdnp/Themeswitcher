import { View, Text } from 'react-native'
import React from 'react'
import { Switch } from 'react-native-paper'
import {useTheme} from '../context/useTheme'



const ThemeSwitchButton = () => {
    const {isDarkMode, toggleDarkMode} = useTheme()

  return (
    <Switch value={isDarkMode} onValueChange={toggleDarkMode}></Switch>
  )
}

export default ThemeSwitchButton