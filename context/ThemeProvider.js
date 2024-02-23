import { StyleSheet, Text, View } from 'react-native'
import React, { useState } from 'react'
import { ThemeContext } from './ThemeContext'



const ThemeProvider = ({children}) => {
    const [isDarkMode, setIsDarkMode] = useState(false)

    const toggleDarkMode = () => {
        setIsDarkMode(prevDarkMode => !prevDarkMode)
    }


  return (
    <ThemeContext.Provider value={{isDarkMode, toggleDarkMode}}>
        { children }
    </ThemeContext.Provider>
  )
}

export default ThemeProvider

const styles = StyleSheet.create({})