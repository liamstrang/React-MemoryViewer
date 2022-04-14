import React from "react";
import { createStackNavigator, CardStyleInterpolators } from '@react-navigation/stack';

//TabNavigation
import TabNavigation from "./TabNavigation";

//Screens
import Home from '../screens/Home';
import Registration from '../screens/Registration';
import Login from '../screens/Login';

const Stack = createStackNavigator();

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
