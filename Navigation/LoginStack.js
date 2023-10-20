import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'
import Login from '../Screens/Login'
import Register from '../Screens/Register'
import DrawerNavigator from './DrawerNavigator'

const Stack = createStackNavigator()

export default LoginStackNavigator = () => {
    return(
        <Stack.Navigator>
            <Stack.Screen name='Login' component={Login}/>
            <Stack.Screen name='Drawer' component={DrawerNavigator}/>
            <Stack.Screen name='Register' component={Register}/>
        </Stack.Navigator>
    )
}

;