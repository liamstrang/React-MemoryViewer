import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

const Tab = createMaterialBottomTabNavigator();

//Screens
import UserAccount from '../screens/Profile';
import Memories from '../screens/Memories';
import AddMemories from '../screens/AddMemories'

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

export default TabNavigation