import {Text} from 'react-native';
import React, { useState, useMemo} from "react";
import { createStackNavigator, CardStyleInterpolators } from '@react-navigation/stack';
import { AppContext } from '../services/appContext';

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


const TabNavigation = () => {
    return (
          <Tab.Navigator initialRouteName="Profile" screenOptions={{
            tabBarActiveTintColor: '#e91e63',
          }}>
            <Tab.Screen 
                name="Profile" 
                component={UserAccount}
                initialParams={{user: 'liam'}}
                options={{
                    tabBarLabel: 'Profile', 
                    tabBarIcon: ({ color }) => (
                        <MaterialCommunityIcons name="account" color={color} size={20} /> 
                    ),
            }}/>

            <Tab.Screen 
                name="Add Memory" 
                component={AddMemories}
                initialParams={{user: 'liam'}}
                options={{
                    tabBarLabel: 'Add Memory', 
                    tabBarIcon: ({ color }) => (
                        <MaterialCommunityIcons name="image-plus" color={color} size={20} /> 
                    ),
            }}/>

            <Tab.Screen 
                name="Memories" 
                component={Memories} 
                initialParams={{user: 'liam'}}
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
