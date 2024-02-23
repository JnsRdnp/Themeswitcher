import { StyleSheet, Text, View } from 'react-native'
import {Appbar} from 'react-native-paper'
import { getHeaderTitle } from '@react-navigation/elements'
import { MaterialCommunityIcons } from '@expo/vector-icons';


import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'

const MainAppbar = (props) => {
    const title = getHeaderTitle(props.options, props.route.name)
    
    return (
        

        <Appbar.Header style={{backgroundColor: props.backgroundColor}} mode='center-aligned'>
            <Text></Text>
            {props.back ? <Appbar.BackAction  color={props.color} onPress={() => props.navigation.goBack()}/> : null }
            <Appbar.Content title={title} color={props.color}></Appbar.Content>
            {props.back ? null : <Appbar.Action icon='cog'  color={props.color} onPress={() =>
                props.navigation.navigate('Settings')}/>
            }
            
        </Appbar.Header>


    )
}

export default MainAppbar

const styles = StyleSheet.create({})