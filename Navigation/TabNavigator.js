import React from 'react'
import { createBottomTabNavigator,} from '@react-navigation/bottom-tabs';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import Ionicons from '@expo/vector-icons/Ionicons';
import Feed from '../Screens/Feed';
import CreatePost from "../Screens/CreatePost";


const Tab = createMaterialBottomTabNavigator();

const BottomTabNavigator = () => {
    return (
        <Tab.Navigator
        activeColor="tomato"
        inactiveColor="gray"
        title='route.name'
        tabBarColor='black'
        barStyle={{ backgroundColor: 'black', }}
      
            screenOptions={({route}) => ({
            tabBarIcon:({focused,color,size})=> {
                let iconName;
                if(route.name === 'Feed'){
                    iconName = focused ? 'book' : 'book-outline'
                }else if(route.name === 'CreatePost'){
                    iconName = focused ?    'create' : 'create-outline'
                }
                return <Ionicons name={iconName} size={size} color={color} />
                },
                
            })}
        >
        <Tab.Screen name='Feed' component={Feed}/>   
        <Tab.Screen name='CreatePost' component={CreatePost}/>
        </Tab.Navigator>
    )
        }
    export default BottomTabNavigator