import {Text} from 'react-native';
import React, {useContext, useState} from "react";
import { createStackNavigator, CardStyleInterpolators } from '@react-navigation/stack';
import { AppContext } from '../services/appContext';
import {useNavigation} from '@react-navigation/native'

import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';



//Pages
import Home from '../components/home';
import UserAccount from '../components/profile';
import Registration from '../components/registration';
import Login from '../components/login';
import Memories from '../components/memories';
import AddMemories from '../components/addMemories'


const Stack = createStackNavigator();
const Tab = createMaterialBottomTabNavigator();

const TabNavigation = ({route, navigation}) => {
    const { user } = route.params;
    return (
          <Tab.Navigator initialRouteName="Profile" screenOptions={{
            tabBarActiveTintColor: '#e91e63',
          }}>
            <Tab.Screen 
                name="Profile" 
                component={UserAccount}
                initialParams={{ user: user }}
                options={{
                    tabBarLabel: 'Profile', 
                    tabBarIcon: ({ color }) => (
                        <MaterialCommunityIcons name="account" color={color} size={20} /> 
                    ),
            }}/>

            <Tab.Screen 
                name="Add Memory" 
                component={AddMemories}
                initialParams={{ user: user }}
                options={{
                    tabBarLabel: 'Add Memory', 
                    tabBarIcon: ({ color }) => (
                        <MaterialCommunityIcons name="image-plus" color={color} size={20} /> 
                    ),
            }}/>

            <Tab.Screen 
                name="Memories" 
                component={Memories}
                initialParams={{ user: user }}
                    options={{
                        tabBarLabel: 'Memories', 
                        tabBarIcon: ({ color }) => (
                            <MaterialCommunityIcons name="image-album" color={color} size={20} /> 
                        ),
                }}/>

          </Tab.Navigator>
    );
}

const Navigation = () => {
    return (
            <Stack.Navigator
                screenOptions={{
                    cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS,
                }}
            >
                <Stack.Screen name="Home" component={Home} />
                <Stack.Screen name="Registration" component={Registration} />
                <Stack.Screen name="Login" component={Login} />
                <Stack.Screen name="UserAccount" component={TabNavigation} options={{headerShown: false}}/>
            </Stack.Navigator>
    );
}

export default Navigation
