import { View, Text, StyleSheet } from 'react-native'
import React, { useContext } from 'react'
import { ThemeContext } from '../context/ThemeContext'
import Styles from '../Styles'
// import { useTheme } from 'react-native-paper'
import { useTheme } from '../context/useTheme'


const Home = () => {
    const {isDarkMode} = useTheme()

    return (
         //note: Using multiple styles for one with help of []!
    <View style={[Styles.container, isDarkMode ? Styles.dark : Styles.light]}>
      <Text style={isDarkMode ? Styles.dark : Styles.light}>Home</Text>
    </View>
  )
}

export default Home