import React from 'react';
import { Platform } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import colors from '../styles/colors';
import { PlantSelect } from '../pages/PlantSelect';
import { MaterialIcons } from '@expo/vector-icons';
import { MyPlants } from '../pages/MyPlants';

const AppTab = createBottomTabNavigator();

const AuthRoutes = () => {
    return (
        <AppTab.Navigator 
            screenOptions={{
                tabBarActiveTintColor: colors.green,
                tabBarInactiveTintColor: colors.heading,
                tabBarLabelPosition: 'beside-icon', 
                // activeTintColor: colors.green,
                // inactiveTintColor: colors.heading,
                // labelPosition: 'beside-icon',
                tabBarStyle: {
                    paddingVertical: Platform.OS === 'ios' ? 0 : 0,
                    height: Platform.OS === 'ios' ? 100 : 50,
                }
                
                
            }}

        >
            <AppTab.Screen 
                name='Nova Planta'
                component={PlantSelect}
                options={{
                    headerShown: false,
                    tabBarIcon: (({ size, color }) => (
                    <MaterialIcons
                        name='add-circle-outline'
                        size={size}
                        color={color}
                    />
                    ))
                }}
            />

            <AppTab.Screen 
                name='Minhas Plantas'
                component={MyPlants}
                options={{
                    headerShown: false,
                    tabBarIcon: (({ size, color }) => (
                    <MaterialIcons
                        name='format-list-bulleted'
                        size={size}
                        color={color}
                    />
                    ))
                }}
            />
        </AppTab.Navigator>
    )
}

export default AuthRoutes;