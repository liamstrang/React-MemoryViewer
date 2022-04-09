import {Text} from 'react-native';
import React, { useState, useMemo} from "react";
import { createStackNavigator, CardStyleInterpolators } from '@react-navigation/stack';
import { AppContext } from '../services/appContext';

//Pages
import Home from '../components/home';
import Profile from '../components/profile';
import Registration from '../components/registration';
import Login from '../components/login';
import Memories from '../components/memories';


const Stack = createStackNavigator();

const Navigation = () => {
    return (
            <Stack.Navigator
                screenOptions={{
                    cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS
                }}
            >
                <Stack.Screen name="Home" component={Home} />
                <Stack.Screen name="Registration" component={Registration} />
                <Stack.Screen name="Login" component={Login} />
                <Stack.Screen name="Profile" component={Profile} />
                <Stack.Screen name="Memories" component={Memories} />
            </Stack.Navigator>
    );
}

export default Navigation
