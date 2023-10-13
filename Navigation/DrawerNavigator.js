import React from "react";
import { createDrawerNavigator } from "@react-navigation/drawer";
import Profile from '../Screens/Profile';
import StackNavigator from "./StackNavigator";
import BottomTabNavigator from "./TabNavigator";

const Drawer = createDrawerNavigator();

const DrawerNavigator = () => {
    return (
        <Drawer.Navigator screenOptions={{headerShown:false}}>
            <Drawer.Screen name='Stack' component={StackNavigator}/>
            <Drawer.Screen name='Profile' component={Profile}/>
        </Drawer.Navigator>
    );
}
export default DrawerNavigator;
